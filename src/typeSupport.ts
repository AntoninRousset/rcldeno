import { Message } from "./message.ts";

export interface TypeSupport<M extends Message> {
  readonly unsafeHandle: Deno.PointerValue;
  readonly MessageClass: new () => M;
}
