import { assertEquals } from "./deps.ts";
import * as rcl from "../mod.ts";
import * as std_msgs from "./std_msgs/mod.ts";

Deno.test("Publish and take message", async () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const typeSupport = new std_msgs.Int8TypeSupport();

  const publisherOptions = new rcl.PublisherOptions();
  const publisher = new rcl.Publisher(
    node,
    typeSupport,
    "chatter",
    publisherOptions,
  );

  const subscriptionOptions = new rcl.SubscriptionOptions();
  const subscription = new rcl.Subscription(
    node,
    typeSupport,
    "chatter",
    subscriptionOptions,
  );

  const publishedMessage = new std_msgs.Int8Message({ data: 43 });
  await publisher.publish(publishedMessage);
  const takenMessage = await subscription.take() as std_msgs.Int8Message;
  assertEquals(takenMessage.data, publishedMessage.data);

  publisher.fini(node);
  subscription.fini(node);
  rcl.shutdown(context);
  node.fini();
  nodeOptions.fini();
  context.fini();
  initOptions.fini();
});

Deno.test("Publish and take message with callback", async () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const typeSupport = new std_msgs.Int8TypeSupport();

  const publisherOptions = new rcl.PublisherOptions();
  const publisher = new rcl.Publisher(
    node,
    typeSupport,
    "chatter",
    publisherOptions,
  );

  const subscriptionOptions = new rcl.SubscriptionOptions();
  const subscription = new rcl.Subscription(
    node,
    typeSupport,
    "chatter",
    subscriptionOptions,
  );

  const takenMessagePromise = new Promise<std_msgs.Int8Message>((resolve) =>
    subscription.setOnNewMessageCallback(async (amount) => {
      assertEquals(amount, 1);
      resolve(await subscription.take() as std_msgs.Int8Message);
    })
  );

  const publishedMessage = new std_msgs.Int8Message({ data: 43 });
  await publisher.publish(publishedMessage);

  const takenMessage = await takenMessagePromise;
  assertEquals(takenMessage.data, publishedMessage.data);

  publisher.fini(node);
  subscription.fini(node);
  rcl.shutdown(context);
  node.fini();
  nodeOptions.fini();
  context.fini();
  initOptions.fini();
});
