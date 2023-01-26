import { lib } from "./ffi/mod.ts";

export class SubscriptionOptions {
  private handle: Uint8Array;

  constructor() {
    this.handle = lib.symbols
      .rcl_subscription_get_default_options() as Uint8Array;
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }
}
