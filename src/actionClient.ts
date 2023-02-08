import { lib, macros, types } from "./ffi/rcl_action/mod.ts";

import {
  Feedback,
  Goal,
  GoalResponse,
  RequestId,
  Result,
  ResultRequest,
} from "./interface.ts";
import type { ActionClientOptions } from "./actionClientOptions.ts";
import type { Node } from "./node.ts";
import type { ActionTypeSupport } from "./typeSupport.ts";

export class ActionClient<
  GOAL extends Goal,
  FEEDBACK extends Feedback,
  RESULT extends Result,
> {
  private handle: ArrayBuffer;
  private goalClientCallbackHandle?: Deno.UnsafeCallback;
  private resultClientCallbackHandle?: Deno.UnsafeCallback;

  constructor(
    node: Node,
    private actionTypeSupport: ActionTypeSupport<GOAL, FEEDBACK, RESULT>,
    actionName: string,
    options: ActionClientOptions,
  ) {
    const actionNameBuffer = new Uint8Array([
      ...new TextEncoder().encode(actionName),
      0,
    ]);
    this.handle = lib.symbols.rcl_action_get_zero_initialized_client();
    const ret = lib.symbols.rcl_action_client_init(
      this.unsafeHandle,
      node.unsafeHandle,
      actionTypeSupport.unsafeHandle,
      Deno.UnsafePointer.of(actionNameBuffer),
      options.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to initialize action client`;
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

  sendGoalRequest(
    goalRequest: GOAL,
  ): BigInt {
    const sequenceNumberBuffer = new BigInt64Array(1);
    const ret = lib.symbols.rcl_action_send_goal_request(
      this.unsafeHandle,
      goalRequest.unsafeHandle,
      Deno.UnsafePointer.of(sequenceNumberBuffer),
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to send goal request: ${ret}`;
    }
    return sequenceNumberBuffer[0];
  }

  sendResultRequest(
    resultRequest: ResultRequest,
  ) {
    const sequenceNumberBuffer = new BigInt64Array(1);
    const ret = lib.symbols.rcl_action_send_result_request(
      this.unsafeHandle,
      resultRequest.unsafeHandle,
      Deno.UnsafePointer.of(sequenceNumberBuffer),
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to send result request: ${ret}`;
    }
    return sequenceNumberBuffer[0];
  }

  async takeGoalResponse(): Promise<
    { requestId: RequestId; goalResponse: GoalResponse }
  > {
    const requestId = new RequestId();
    const goalResponse = new GoalResponse();
    const ret = await lib.symbols.rcl_action_take_goal_response(
      this.unsafeHandle,
      requestId.unsafeHandle,
      goalResponse.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to take goal request`;
    }
    return { requestId, goalResponse };
  }

  // rcl_action_take_feedback
  // rcl_action_take_status
  // rcl_action_take_result_response

  async takeResultResponse(): Promise<
    { requestId: RequestId; result: RESULT }
  > {
    const requestId = new RequestId();
    const result = new this.actionTypeSupport.Result();
    const ret = await lib.symbols.rcl_action_take_result_response(
      this.unsafeHandle,
      requestId.unsafeHandle,
      result.unsafeHandle,
    );
    if (ret != macros.RCL_RET_OK) {
      throw `failed to take result response: ${ret}`;
    }
    return { requestId, result };
  }

  // rcl_action_send_cancel_request
  // rcl_action_take_cancel_response

  get actionName(): string {
    const actionNamePtr = lib.symbols.rcl_action_client_get_action_name(
      this.unsafeHandle,
    );
    const actionNamePtrView = new Deno.UnsafePointerView(actionNamePtr);
    return actionNamePtrView.getCString();
  }

  // rcl_action_client_get_options

  isValid(): boolean {
    return Boolean(lib.symbols.rcl_action_client_is_valid(this.unsafeHandle));
  }

  setGoalClientCallback(callback: ((amount: number) => void) | null = null) {
    if (this.goalClientCallbackHandle) {
      this.goalClientCallbackHandle.close();
      delete this.goalClientCallbackHandle;
    }
    if (callback) {
      this.goalClientCallbackHandle = new Deno.UnsafeCallback(
        structuredClone(types.rcl_event_callback_t),
        (_, amount) => callback(Number(amount)),
      );
      const ret = lib.symbols.rcl_action_client_set_goal_client_callback(
        this.unsafeHandle,
        this.goalClientCallbackHandle.pointer,
        null,
      );
      if (ret != macros.RCL_RET_OK) {
        throw `failed to set goal client callback`;
      }
    }
  }

  // rcl_action_client_set_cancel_client_callback
  // rcl_action_client_set_result_client_callback

  setResultClientCallback(callback: ((amount: number) => void) | null = null) {
    if (this.resultClientCallbackHandle) {
      this.resultClientCallbackHandle.close();
      delete this.resultClientCallbackHandle;
    }
    if (callback) {
      this.resultClientCallbackHandle = new Deno.UnsafeCallback(
        structuredClone(types.rcl_event_callback_t),
        (_, amount) => callback(Number(amount)),
      );
      const ret = lib.symbols.rcl_action_client_set_result_client_callback(
        this.unsafeHandle,
        this.resultClientCallbackHandle.pointer,
        null,
      );
      if (ret != macros.RCL_RET_OK) {
        throw `failed to set result client callback`;
      }
    }
  }

  // rcl_action_client_set_feedback_subscription_callback
  // rcl_action_client_set_status_subscription_callback

  fini(node: Node) {
    const ret = lib.symbols.rcl_action_client_fini(
      this.unsafeHandle,
      node.unsafeHandle,
    );
    if (this.goalClientCallbackHandle) {
      this.goalClientCallbackHandle.close();
    }
    if (this.resultClientCallbackHandle) {
      this.resultClientCallbackHandle.close();
    }
    if (ret != macros.RCL_RET_OK) {
      throw `failed to finalize action client`;
    }
  }
}
