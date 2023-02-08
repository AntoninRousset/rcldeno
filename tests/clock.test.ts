import { assert } from "./deps.ts";
import * as rcl from "../mod.ts";

/* FIXME segmentation fault
Deno.test("ROS clock lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const allocator = new rcl.Allocator()
  const clock = new rcl.RosClock(allocator);

  assert(clock.isValid());

  clock.fini();

  node.fini();
  nodeOptions.fini();

  rcl.shutdown(context);
  context.fini();
  initOptions.fini();
});
*/

Deno.test("Steady clock lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const allocator = new rcl.Allocator();
  const clock = new rcl.SteadyClock(allocator);

  assert(clock.isValid());

  clock.fini();

  node.fini();
  nodeOptions.fini();

  rcl.shutdown(context);
  context.fini();
  initOptions.fini();
});

Deno.test("System clock lifecycle", () => {
  const initOptions = new rcl.InitOptions();
  const context = new rcl.Context();
  rcl.init(Deno.args, initOptions, context);

  const nodeOptions = new rcl.NodeOptions();
  const node = new rcl.Node("test", "/ns", context, nodeOptions);

  const allocator = new rcl.Allocator();
  const clock = new rcl.SystemClock(allocator);

  assert(clock.isValid());

  clock.fini();

  node.fini();
  nodeOptions.fini();

  rcl.shutdown(context);
  context.fini();
  initOptions.fini();
});
