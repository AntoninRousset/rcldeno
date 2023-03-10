import { assert, assertEquals } from "./deps.ts";
import * as rcl from "../mod.ts";
import std_msgs from "./std_msgs/mod.ts";

Deno.test("Publisher lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const options = new rcl.PublisherOptions();
  const publisher = new rcl.Publisher(
    node,
    std_msgs.msg.Int8,
    "chatter",
    options,
  );
  assert(publisher.isValid());
  assertEquals(publisher.topicName, "/ns/chatter");

  publisher.fini(node);

  node.fini();
  nodeOptions.fini();

  rcl.shutdown(context);
  context.fini();
  initOptions.fini();
});
