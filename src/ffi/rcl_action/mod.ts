import { getLibPath } from "../utils.ts";

import * as symbols from "./symbols.ts";

export * as macros from "./macros.ts";
export * as symbols from "./symbols.ts";
export * as types from "./types.ts";

export const lib = Deno.dlopen(
  getLibPath("librcl_action.so"),
  structuredClone({ ...symbols }),
);
