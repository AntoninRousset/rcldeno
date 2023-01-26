import { lib, macros } from "./ffi/mod.ts";

import type { Context } from "./context.ts";
import type { NodeOptions } from "./nodeOptions.ts";

export class Node {
  private handle: Uint8Array;

  constructor(
    name: string,
    namespace: string,
    context: Context,
    options: NodeOptions,
  ) {
    this.handle = lib.symbols.rcl_get_zero_initialized_node() as Uint8Array;

    const nameBuffer = new Uint8Array([...new TextEncoder().encode(name), 0]);
    const namespaceBuffer = new Uint8Array([
      ...new TextEncoder().encode(namespace),
      0,
    ]);
    const ret = lib.symbols.rcl_node_init(
      this.unsafeHandle,
      Deno.UnsafePointer.of(nameBuffer),
      Deno.UnsafePointer.of(namespaceBuffer),
      context.unsafeHandle,
      options.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize node`;
    }
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  isValid(): boolean {
    return Boolean(lib.symbols.rcl_node_is_valid(this.unsafeHandle));
  }

  get name(): string {
    const namePtr = lib.symbols.rcl_node_get_name(
      this.unsafeHandle,
    ) as Deno.PointerValue;
    const namePtrView = new Deno.UnsafePointerView(namePtr);
    return namePtrView.getCString();
  }

  get namespace(): string {
    const namespacePtr = lib.symbols.rcl_node_get_namespace(
      this.unsafeHandle,
    ) as Deno.PointerValue;
    const namespacePtrView = new Deno.UnsafePointerView(namespacePtr);
    return namespacePtrView.getCString();
  }

  fini() {
    const ret = lib.symbols.rcl_node_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize node`;
    }
  }
}
