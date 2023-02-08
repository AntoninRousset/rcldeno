import { lib, macros } from "./ffi/rcl/mod.ts";

export class Context {
  private handle: ArrayBuffer;

  constructor() {
    this.handle = lib.symbols.rcl_get_zero_initialized_context();
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  isValid(): boolean {
    return Boolean(lib.symbols.rcl_context_is_valid(this.unsafeHandle));
  }

  get instanceId(): number {
    return lib.symbols.rcl_context_get_instance_id(this.unsafeHandle);
  }

  fini() {
    const ret = lib.symbols.rcl_context_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize context`;
    }
  }
}
