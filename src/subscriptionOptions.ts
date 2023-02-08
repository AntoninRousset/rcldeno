import { lib } from "./ffi/rcl/mod.ts";

export class SubscriptionOptions {
  private handle: ArrayBuffer;

  constructor() {
    this.handle = lib.symbols.rcl_subscription_get_default_options();
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }
}
