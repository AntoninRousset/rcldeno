import { lib } from "./ffi/mod.ts";

export class PublisherOptions {
  private handle: Uint8Array;

  constructor() {
    this.handle = lib.symbols.rcl_publisher_get_default_options() as Uint8Array;
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }
}
