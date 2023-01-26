import { path } from "../../deps.ts";

import * as symbols from "./symbols.ts";

export * as macros from "./macros.ts";
export * as symbols from "./symbols.ts";
export * as types from "./types.ts";

const amentPrefixPath = Deno.env.get("AMENT_PREFIX_PATH");
if (!amentPrefixPath) {
  throw "AMENT_PREFIX_PATH environment variable is not set, did you forget to source setup ROS environment?";
}

export const libDir = path.join(amentPrefixPath, "lib");
const libPath = path.join(libDir, `librcl.so`);
export const lib = Deno.dlopen(
  libPath,
  structuredClone({ ...symbols }), // FIXME: TS2615
);
