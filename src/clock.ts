import { lib, macros } from "./ffi/rcl/mod.ts";

import type { Allocator } from "./allocator.ts";

export abstract class Clock {
  private handle = new ArrayBuffer(76);

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  isValid(): boolean {
    return Boolean(lib.symbols.rcl_clock_valid(this.unsafeHandle));
  }
}

/* FIXME segmentation fault
export class RosClock extends Clock {
  constructor(
    allocator: Allocator,
  ) {
    super()
    const ret = lib.symbols.rcl_ros_clock_init(
      this.unsafeHandle,
      allocator.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize clock`;
    }
  }

  fini() {
    const ret = lib.symbols.rcl_ros_clock_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize clock`;
    }
  }
}
*/

export class SteadyClock extends Clock {
  constructor(
    allocator: Allocator,
  ) {
    super();
    const ret = lib.symbols.rcl_steady_clock_init(
      this.unsafeHandle,
      allocator.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize clock`;
    }
  }

  fini() {
    const ret = lib.symbols.rcl_steady_clock_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize clock`;
    }
  }
}

export class SystemClock extends Clock {
  constructor(
    allocator: Allocator,
  ) {
    super();
    const ret = lib.symbols.rcl_system_clock_init(
      this.unsafeHandle,
      allocator.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize clock`;
    }
  }

  fini() {
    const ret = lib.symbols.rcl_system_clock_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize clock`;
    }
  }
}
