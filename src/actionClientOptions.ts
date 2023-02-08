import { lib } from "./ffi/rcl_action/mod.ts";

export class ActionClientOptions {
  private handle: ArrayBuffer;

  constructor() {
    this.handle = lib.symbols.rcl_action_client_get_default_options();
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }
}
