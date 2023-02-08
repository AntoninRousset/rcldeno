import { assert, assertEquals } from "./deps.ts";
import * as rcl from "../mod.ts";
import tf2_msgs from "./tf2_msgs/mod.ts";

Deno.test("Action client lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const options = new rcl.ActionClientOptions();
  const actionClient = new rcl.ActionClient(
    node,
    tf2_msgs.action.LookupTransform,
    "lookup_transform",
    options,
  );
  assert(actionClient.isValid());
  assertEquals(actionClient.actionName, "lookup_transform");

  actionClient.fini(node);

  node.fini();
  nodeOptions.fini();

  rcl.shutdown(context);
  context.fini();
  initOptions.fini();
});
