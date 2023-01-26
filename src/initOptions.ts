import { lib, macros } from "./ffi/mod.ts";

export class InitOptions {
  private handle: Uint8Array;

  constructor() {
    this.handle = lib.symbols
      .rcl_get_zero_initialized_init_options() as Uint8Array;
    lib.symbols.rcl_init_options_init(
      this.unsafeHandle,
      lib.symbols.rcutils_get_default_allocator() as Uint8Array,
    );
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  public get domainId(): number {
    const id = new BigUint64Array(1);
    const ret = lib.symbols.rcl_init_options_get_domain_id(
      this.unsafeHandle,
      Deno.UnsafePointer.of(id),
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to get domainId`;
    }
    return Number(id[0]);
  }

  public set domainId(id: number) {
    const ret = lib.symbols.rcl_init_options_set_domain_id(
      this.unsafeHandle,
      id,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to set domainId to ${id}`;
    }
  }

  fini() {
    const ret = lib.symbols.rcl_init_options_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize node options`;
    }
  }
}
