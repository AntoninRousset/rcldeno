import { lib, macros } from "./ffi/mod.ts";

import type { Context } from "./context.ts";
import type { InitOptions } from "./initOptions.ts";

export function init(
  _args: string[],
  options: InitOptions,
  context: Context,
) {
  const ret = lib.symbols.rcl_init(
    0,
    null, // TODO: args
    options.unsafeHandle,
    context.unsafeHandle,
  );
  if (ret != macros.RCL_RET_OK) {
    throw `failed to init`;
  }
}

export function shutdown(context: Context) {
  const ret = lib.symbols.rcl_shutdown(context.unsafeHandle);
  if (ret != macros.RCL_RET_OK) {
    throw `failed to shutdown`;
  }
}
