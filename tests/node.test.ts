import { assert, assertEquals } from "./deps.ts";
import * as rcl from "../mod.ts";

Deno.test("Node lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const options = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, options);
  assert(node.isValid());
  assertEquals(node.name, "test");
  assertEquals(node.namespace, "/ns");

  rcl.shutdown(context);
  node.fini();
  options.fini();
  context.fini();
  initOptions.fini();
});
