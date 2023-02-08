import { assert } from "./deps.ts";
import * as rcl from "../mod.ts";

Deno.test("Allocator lifecycle", () => {
  const allocator = new rcl.Allocator();

  assert(allocator.isValid());
});
