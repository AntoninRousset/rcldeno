import { lib, macros, types } from "./ffi/rcl_action/mod.ts";

import type { Clock } from "./clock.ts";
import {
  Feedback,
  Goal,
  GoalResponse,
  RequestId,
  Result,
  ResultRequest,
} from "./interface.ts";
import type { ActionServerOptions } from "./actionServerOptions.ts";
import type { Node } from "./node.ts";
import type { ActionTypeSupport } from "./typeSupport.ts";

export enum GoalEvent {
  Execute = 0,
  CancelGoal,
  Succeed,
  Abort,
  Canceled,
  NumEvents,
}

export class GoalHandle {
  constructor(
    readonly unsafeHandle: Deno.PointerValue,
  ) {}

  updateGoalState(goalEvent: GoalEvent) {
    const ret = lib.symbols.rcl_action_update_goal_state(
      this.unsafeHandle,
      goalEvent,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to update goal state`;
    }
  }

  fini() {
    const ret = lib.symbols.rcl_action_goal_handle_fini(this.unsafeHandle);
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize goal handle`;
    }
  }
}

export class ActionServer<
  GOAL extends Goal,
  FEEDBACK extends Feedback,
  RESULT extends Result,
> {
  private handle: ArrayBuffer;
  private goalServiceCallbackHandle?: Deno.UnsafeCallback;
  private resultServiceCallbackHandle?: Deno.UnsafeCallback;

  constructor(
    node: Node,
    clock: Clock,
    private typeSupport: ActionTypeSupport<GOAL, FEEDBACK, RESULT>,
    actionName: string,
    options: ActionServerOptions,
  ) {
    const actionNameBuffer = new Uint8Array([
      ...new TextEncoder().encode(actionName),
      0,
    ]);
    this.handle = lib.symbols.rcl_action_get_zero_initialized_server();
    const ret = lib.symbols.rcl_action_server_init(
      this.unsafeHandle,
      node.unsafeHandle,
      clock.unsafeHandle,
      typeSupport.unsafeHandle,
      Deno.UnsafePointer.of(actionNameBuffer),
      options.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize action server`;
    }
  }

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  serverIsAvailable(): boolean {
    return Boolean(
      lib.symbols.rcl_action_server_is_available(this.unsafeHandle),
    );
  }

  async takeGoalRequest(): Promise<{ requestId: RequestId; goal: GOAL }> {
    const goal = new this.typeSupport.Goal();
    const requestId = new RequestId();
    const ret = await lib.symbols.rcl_action_take_goal_request(
      this.unsafeHandle,
      requestId.unsafeHandle,
      goal.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to take goal request`;
    }
    return { requestId, goal };
  }

  sendGoalResponse(requestId: RequestId, goalResponse: GoalResponse) {
    const ret = lib.symbols.rcl_action_send_goal_response(
      this.unsafeHandle,
      requestId.unsafeHandle,
      goalResponse.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to send goal response`;
    }
  }

  acceptNewGoal(goalInfo: GoalInfo): GoalHandle {
    const goalHandlePtr = lib.symbols.rcl_action_accept_new_goal(
      this.unsafeHandle,
      goalInfo.unsafeHandle,
    );
    return new GoalHandle(goalHandlePtr);
  }

  // rcl_action_publish_feedback
  // rcl_action_get_goal_status_array
  // rcl_action_publish_status

  async takeResultRequest(): Promise<
    { requestId: RequestId; resultRequest: ResultRequest }
  > {
    const resultRequest = new ResultRequest();
    const requestId = new RequestId();
    const ret = await lib.symbols.rcl_action_take_result_request(
      this.unsafeHandle,
      requestId.unsafeHandle,
      resultRequest.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to take result request`;
    }
    return { requestId, resultRequest };
  }

  sendResultResponse(requestId: RequestId, resultResponse: Result) {
    const ret = lib.symbols.rcl_action_send_result_response(
      this.unsafeHandle,
      requestId.unsafeHandle,
      resultResponse.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to send result response`;
    }
  }
  // rcl_action_expire_goals
  // rcl_action_notify_goal_done
  // rcl_action_take_cancel_request
  // rcl_action_process_cancel_request
  // rcl_action_send_cancel_response

  get actionName(): string {
    const actionNamePtr = lib.symbols.rcl_action_server_get_action_name(
      this.unsafeHandle,
    );
    const actionNamePtrView = new Deno.UnsafePointerView(actionNamePtr);
    return actionNamePtrView.getCString();
  }

  // rcl_action_server_get_options
  // rcl_action_server_get_goal_handles
  // rcl_action_server_goal_exists

  isValid(): boolean {
    return Boolean(lib.symbols.rcl_action_server_is_valid(this.unsafeHandle));
  }

  // rcl_action_server_is_valid_except_context
  // rcl_action_server_set_goal_service_callback
  // rcl_action_server_set_cancel_service_callback

  setResultServiceCallback(callback: ((amount: number) => void) | null = null) {
    if (this.resultServiceCallbackHandle) {
      this.resultServiceCallbackHandle.close();
      delete this.resultServiceCallbackHandle;
    }
    if (callback) {
      this.resultServiceCallbackHandle = new Deno.UnsafeCallback(
        structuredClone(types.rcl_event_callback_t),
        (_, amount) => callback(Number(amount)),
      );
      const ret = lib.symbols.rcl_action_server_set_result_service_callback(
        this.unsafeHandle,
        this.resultServiceCallbackHandle.pointer,
        null,
      );
      if (ret != macros.RCL_RET_OK) {
        throw `failed to set result service callback`;
      }
    }
  }

  setGoalServiceCallback(callback: ((amount: number) => void) | null = null) {
    if (this.goalServiceCallbackHandle) {
      this.goalServiceCallbackHandle.close();
      delete this.goalServiceCallbackHandle;
    }
    if (callback) {
      this.goalServiceCallbackHandle = new Deno.UnsafeCallback(
        structuredClone(types.rcl_event_callback_t),
        (_, amount) => callback(Number(amount)),
      );
      const ret = lib.symbols.rcl_action_server_set_goal_service_callback(
        this.unsafeHandle,
        this.goalServiceCallbackHandle.pointer,
        null,
      );
      if (ret != macros.RCL_RET_OK) {
        throw `failed to set goal service callback`;
      }
    }
  }

  fini(node: Node) {
    const ret = lib.symbols.rcl_action_server_fini(
      this.unsafeHandle,
      node.unsafeHandle,
    );
    if (this.goalServiceCallbackHandle) {
      this.goalServiceCallbackHandle.close();
    }
    if (this.resultServiceCallbackHandle) {
      this.resultServiceCallbackHandle.close();
    }
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize action server`;
    }
  }
}

export class GoalInfo {
  private handle: ArrayBuffer;

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  constructor() {
    this.handle = lib.symbols.rcl_action_get_zero_initialized_goal_info();
  }
}
