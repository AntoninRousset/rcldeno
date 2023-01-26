import { assert, assertEquals } from "./deps.ts";
import * as std_msgs from "./std_msgs/mod.ts";
import * as rcl from "../mod.ts";

Deno.test("Publisher lifecycle", async () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const typeSupport = new std_msgs.Int8TypeSupport();
  const options = new rcl.PublisherOptions();
  const publisher = new rcl.Publisher(node, typeSupport, "chatter", options);
  assert(publisher.isValid());
  assertEquals(publisher.topicName, "/ns/chatter");

  const message = new std_msgs.Int8Message({ data: 43 });
  await publisher.publish(message);

  publisher.fini(node);
  rcl.shutdown(context);
  node.fini();
  nodeOptions.fini();
  context.fini();
  initOptions.fini();
});
