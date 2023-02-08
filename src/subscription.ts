import { lib, macros, types } from "./ffi/rcl/mod.ts";

import type { Message } from "./interface.ts";
import type { Node } from "./node.ts";
import type { SubscriptionOptions } from "./subscriptionOptions.ts";
import type { MsgTypeSupport } from "./typeSupport.ts";

export class Subscription<MESSAGE extends Message> {
  private handle: ArrayBuffer;
  private onNewMessageCallbackHandle?: Deno.UnsafeCallback;

  constructor(
    node: Node,
    private typeSupport: MsgTypeSupport<MESSAGE>,
    topicName: string,
    options: SubscriptionOptions,
  ) {
    const topicNameBuffer = new Uint8Array([
      ...new TextEncoder().encode(topicName),
      0,
    ]);
    this.handle = lib.symbols
      .rcl_get_zero_initialized_subscription();
    const ret = lib.symbols.rcl_subscription_init(
      this.unsafeHandle,
      node.unsafeHandle,
      typeSupport.unsafeHandle,
      Deno.UnsafePointer.of(topicNameBuffer),
      options.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize subscription`;
    }
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  isValid(): boolean {
    return Boolean(lib.symbols.rcl_subscription_is_valid(this.unsafeHandle));
  }

  async take(): Promise<MESSAGE> {
    const message = new this.typeSupport.Message();
    const messageInfoHandle = lib.symbols
      .rmw_get_zero_initialized_message_info();
    const ret = await lib.symbols.rcl_take(
      this.unsafeHandle,
      message.unsafeHandle,
      Deno.UnsafePointer.of(messageInfoHandle),
      null, // TODO: allocation
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to take message`;
    }
    return message;
  }

  setOnNewMessageCallback(callback: ((amount: number) => void) | null = null) {
    if (this.onNewMessageCallbackHandle) {
      this.onNewMessageCallbackHandle.close();
      delete this.onNewMessageCallbackHandle;
    }
    lib.symbols.rcl_subscription_set_on_new_message_callback(
      this.unsafeHandle,
      null,
      null,
    );
    if (callback) {
      this.onNewMessageCallbackHandle = new Deno.UnsafeCallback(
        structuredClone(types.rcl_event_callback_t),
        (_, amount) => callback(Number(amount)),
      );
      const ret = lib.symbols.rcl_subscription_set_on_new_message_callback(
        this.unsafeHandle,
        this.onNewMessageCallbackHandle.pointer,
        null,
      );
      if (ret != macros.RCL_RET_OK) {
        throw `failed to on new message callback`;
      }
    }
  }

  get topicName(): string {
    const topicNamePtr = lib.symbols.rcl_subscription_get_topic_name(
      this.unsafeHandle,
    );
    const topicNamePtrView = new Deno.UnsafePointerView(topicNamePtr);
    return topicNamePtrView.getCString();
  }

  fini(node: Node) {
    const ret = lib.symbols.rcl_subscription_fini(
      this.unsafeHandle,
      node.unsafeHandle,
    );
    if (this.onNewMessageCallbackHandle) {
      this.onNewMessageCallbackHandle.close();
    }
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize subscription`;
    }
  }
}
