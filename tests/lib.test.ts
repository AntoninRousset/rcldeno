import * as rcl from "../mod.ts";
import { assertEquals, assertObjectMatch, deferred } from "./deps.ts";
import std_msgs from "./std_msgs/mod.ts";
import tf2_msgs from "./tf2_msgs/mod.ts";

import type { Int8 } from "./std_msgs/msg/mod.ts";
import type { LookupTransform } from "./tf2_msgs/action/mod.ts";

Deno.test("Publisher and subscription", async () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const messageDeferred = deferred<Int8.Message>();

  const MESSAGE = {
    data: 43,
  } as const;

  const publisherOptions = new rcl.PublisherOptions();
  const publisher = new rcl.Publisher(
    node,
    std_msgs.msg.Int8,
    "chatter",
    publisherOptions,
  );

  const subscriptionOptions = new rcl.SubscriptionOptions();
  const subscription = new rcl.Subscription(
    node,
    std_msgs.msg.Int8,
    "chatter",
    subscriptionOptions,
  );

  subscription.setOnNewMessageCallback(async (amount) => {
    assertEquals(amount, 1);
    const message = await subscription.take();
    assertObjectMatch(message, MESSAGE);
    messageDeferred.resolve(message);
  });

  const message = new std_msgs.msg.Int8.Message(MESSAGE);
  publisher.publish(message);

  await messageDeferred;

  publisher.fini(node);
  subscription.fini(node);
  rcl.shutdown(context);
  node.fini();
  nodeOptions.fini();
  context.fini();
  initOptions.fini();
});

Deno.test("Action client and server", async () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const allocator = new rcl.Allocator();
  const clock = new rcl.SystemClock(allocator);
  const serveriOptions = new rcl.ActionServerOptions();
  const actionServer = new rcl.ActionServer(
    node,
    clock,
    tf2_msgs.action.LookupTransform,
    "lookup_transform",
    serveriOptions,
  );
  const resultDeferred = deferred<LookupTransform.Result>();
  const goalHandleDeferred = deferred<rcl.GoalHandle>();

  const GOAL_REQUEST = {
    goalId: globalThis.crypto.randomUUID(),
    targetFrame: "target",
    sourceFrame: "source",
    sourceTime: { sec: 1, nanosec: 0 },
    timeout: { sec: 10, nanosec: 0 },
    targetTime: { sec: 4, nanosec: 0 },
    fixedFrame: "fixed",
    advanced: false,
  } as const;

  const GOAL_RESPONSE = {
    accepted: true,
    stamp: { sec: 1, nanosec: 0 },
  } as const;

  const RESULT_RESQUEST = {
    goalId: GOAL_REQUEST.goalId,
  } as const;

  const RESULT_RESPONSE = {
    status: 0,
    transform: {
      header: {
        stamp: { sec: 1, nanosec: 0 },
        frameId: "frame",
      },
      childFrameId: "childFrame",
      transform: {
        translation: { x: 1, y: 2, z: 3 },
        rotation: { x: 0, y: 0, z: 0, w: 1 },
      },
    },
    error: {
      error: 0,
      errorString: "no error",
    },
  } as const;

  actionServer.setGoalServiceCallback(async (amount: number) => {
    assertEquals(amount, 1);

    const { requestId, goal } = await actionServer.takeGoalRequest();
    assertObjectMatch(goal, GOAL_REQUEST);

    const goalInfo = new rcl.GoalInfo();
    const goalHandle = actionServer.acceptNewGoal(goalInfo);

    goalHandleDeferred.resolve(goalHandle);

    const goalResponse = new rcl.GoalResponse(GOAL_RESPONSE);
    actionServer.sendGoalResponse(requestId, goalResponse);
  });

  actionServer.setResultServiceCallback(async (amount: number) => {
    assertEquals(amount, 1);

    const { requestId, resultRequest } = await actionServer.takeResultRequest();

    // TODO: assert requestId
    assertObjectMatch(resultRequest, RESULT_RESQUEST);

    const goalHandle = await goalHandleDeferred;
    goalHandle.updateGoalState(rcl.GoalEvent.Execute);
    // TODO: feedbacks and status
    goalHandle.updateGoalState(rcl.GoalEvent.Succeed);

    const result = new tf2_msgs.action.LookupTransform.Result(RESULT_RESPONSE);
    actionServer.sendResultResponse(requestId, result);
  });

  const clientOptions = new rcl.ActionClientOptions();
  const actionClient = new rcl.ActionClient(
    node,
    tf2_msgs.action.LookupTransform,
    "lookup_transform",
    clientOptions,
  );

  actionClient.setGoalClientCallback(async (amount: number) => {
    assertEquals(amount, 1);
    const { goalResponse } = await actionClient.takeGoalResponse();

    // TODO assert requestId
    assertObjectMatch(goalResponse, GOAL_RESPONSE);

    const resultRequest = new rcl.ResultRequest(RESULT_RESQUEST);
    actionClient.sendResultRequest(resultRequest);
  });

  actionClient.setResultClientCallback(async (amount: number) => {
    assertEquals(amount, 1);
    const { result } = await actionClient.takeResultResponse();

    // TODO assert requestId
    assertObjectMatch(result, RESULT_RESPONSE);

    resultDeferred.resolve(result);
  });

  const goal = new tf2_msgs.action.LookupTransform.Goal(GOAL_REQUEST);
  actionClient.sendGoalRequest(goal);

  const goalHandle = await goalHandleDeferred;
  await resultDeferred;

  actionClient.fini(node);

  goalHandle.fini();
  actionServer.fini(node);
  clock.fini();

  node.fini();
  nodeOptions.fini();

  rcl.shutdown(context);
  context.fini();
  initOptions.fini();
});
