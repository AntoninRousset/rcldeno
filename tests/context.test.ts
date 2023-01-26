import { assert } from "./deps.ts";
import * as rcl from "../mod.ts";

Deno.test("Context lifecycle", () => {
  const context = new rcl.Context();
  assert(!context.isValid());

  const initOptions = new rcl.InitOptions();
  rcl.init(Deno.args, initOptions, context);
  assert(context.isValid());

  rcl.shutdown(context);
  assert(!context.isValid());
  initOptions.fini();
  context.fini();
});
