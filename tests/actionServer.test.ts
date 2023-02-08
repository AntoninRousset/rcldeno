import { assert, assertEquals } from "./deps.ts";
import * as rcl from "../mod.ts";
import tf2_msgs from "./tf2_msgs/mod.ts";

Deno.test("Action server lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const allocator = new rcl.Allocator();
  const clock = new rcl.SystemClock(allocator);
  const options = new rcl.ActionServerOptions();
  const actionServer = new rcl.ActionServer(
    node,
    clock,
    tf2_msgs.action.LookupTransform,
    "lookup_transform",
    options,
  );
  assert(actionServer.isValid());
  assertEquals(actionServer.actionName, "lookup_transform");

  actionServer.fini(node);
  clock.fini();

  node.fini();
  nodeOptions.fini();

  rcl.shutdown(context);
  context.fini();
  initOptions.fini();
});
