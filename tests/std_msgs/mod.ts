import { lib } from "./ffi.ts";

import type { Message, TypeSupport } from "../../mod.ts";

export class Int8Message implements Message {
  protected handle: Uint8Array = new Uint8Array(1);

  constructor({ data }: { data?: number } = {}) {
    if (data) this.data = data;
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  get data() {
    return this.handle[0];
  }

  set data(value: number) {
    this.handle[0] = value;
  }
}

export class Int8TypeSupport implements TypeSupport<Int8Message> {
  readonly unsafeHandle: Deno.PointerValue;
  readonly MessageClass: new () => Int8Message;

  constructor() {
    this.unsafeHandle = lib.symbols
      .rosidl_typesupport_c__get_message_type_support_handle__std_msgs__msg__Int8() as Deno.PointerValue;
    this.MessageClass = Int8Message;
  }
}
