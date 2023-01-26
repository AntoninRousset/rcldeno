import { lib, macros } from "./ffi/mod.ts";

export class NodeOptions {
  private handle: Uint8Array;

  constructor() {
    this.handle = lib.symbols.rcl_node_get_default_options() as Uint8Array;
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  fini() {
    const ret = lib.symbols.rcl_node_options_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize node options`;
    }
  }
}
