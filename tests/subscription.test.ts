import { assert, assertEquals } from "./deps.ts";
import * as rcl from "../mod.ts";
import std_msgs from "./std_msgs/mod.ts";

Deno.test("Subscription lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const options = new rcl.SubscriptionOptions();
  const subscription = new rcl.Subscription(
    node,
    std_msgs.msg.Int8,
    "chatter",
    options,
  );
  assert(subscription.isValid());
  assertEquals(subscription.topicName, "/ns/chatter");

  subscription.fini(node);
  rcl.shutdown(context);
  node.fini();
  nodeOptions.fini();
  context.fini();
  initOptions.fini();
});
