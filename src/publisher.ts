import { lib, macros } from "./ffi/mod.ts";

import type { Message } from "./message.ts";
import type { Node } from "./node.ts";
import type { PublisherOptions } from "./publisherOptions.ts";
import type { TypeSupport } from "./typeSupport.ts";

export class Publisher<M extends Message> {
  private handle: Uint8Array;

  constructor(
    node: Node,
    typeSupport: TypeSupport<M>,
    topicName: string,
    options: PublisherOptions,
  ) {
    const topicNameBuffer = new Uint8Array([
      ...new TextEncoder().encode(topicName),
      0,
    ]);
    this.handle = lib.symbols
      .rcl_get_zero_initialized_publisher() as Uint8Array;
    const ret = lib.symbols.rcl_publisher_init(
      this.unsafeHandle,
      node.unsafeHandle,
      typeSupport.unsafeHandle,
      Deno.UnsafePointer.of(topicNameBuffer),
      options.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize publisher`;
    }
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  isValid(): boolean {
    return Boolean(lib.symbols.rcl_publisher_is_valid(this.unsafeHandle));
  }

  async publish(message: M) {
    const ret = await lib.symbols.rcl_publish(
      this.unsafeHandle,
      message.unsafeHandle,
      null, // TODO: allocation
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to publish message`;
    }
  }

  get topicName(): string {
    const topicNamePtr = lib.symbols.rcl_publisher_get_topic_name(
      this.unsafeHandle,
    ) as Deno.PointerValue;
    const topicNamePtrView = new Deno.UnsafePointerView(topicNamePtr);
    return topicNamePtrView.getCString();
  }

  fini(node: Node) {
    const ret = lib.symbols.rcl_publisher_fini(
      this.unsafeHandle,
      node.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize publisher`;
    }
  }
}
