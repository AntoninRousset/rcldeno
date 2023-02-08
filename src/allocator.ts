import { lib } from "./ffi/rcl/mod.ts";

export class Allocator {
  private handle: ArrayBuffer;

  constructor() {
    this.handle = lib.symbols.rcutils_get_default_allocator();
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  isValid(): boolean {
    return Boolean(lib.symbols.rcutils_allocator_is_valid(this.unsafeHandle));
  }
}
