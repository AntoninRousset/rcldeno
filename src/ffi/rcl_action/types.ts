import {
  rcl_allocator_t,
  rcl_duration_t,
  rmw_qos_profile_t,
} from "../rcl/types.ts";

export {
  rcl_allocator_t,
  rcl_event_callback_t,
  rcl_ret_t,
} from "../rcl/types.ts";
export const rcl_action_goal_handle_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_action_client_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_action_client_options_t: Deno.NativeType = {
  struct: [
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    rcl_allocator_t,
  ],
} as const;
export const rcl_action_server_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_action_server_options_t: Deno.NativeType = {
  struct: [
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_qos_profile_t), // FIXME: https://github.com/denoland/deno/issues/17482
    rcl_allocator_t,
    rcl_duration_t,
  ],
} as const;
const action_msgs__msg__GoalInfo__Sequence: Deno.NativeType = {
  struct: [
    "pointer",
    "usize",
    "usize",
  ],
} as const;
const action_msgs__srv__CancelGoal_Request: Deno.NativeType = {
  struct: [
    "i8",
    action_msgs__msg__GoalInfo__Sequence,
  ],
} as const;
export const rcl_action_cancel_request_t: Deno.NativeType =
  action_msgs__srv__CancelGoal_Request;
const unique_identifier_msgs__msg__UUID: Deno.NativeType = {
  struct: [
    ...Array(16).fill("u8"),
  ],
} as const;
const builtin_interfaces__msg__Time: Deno.NativeType = {
  struct: [
    "i32",
    "u32",
  ],
} as const;
const action_msgs__msg__GoalInfo: Deno.NativeType = {
  struct: [
    unique_identifier_msgs__msg__UUID,
    builtin_interfaces__msg__Time,
  ],
} as const;
const action_msgs__srv__CancelGoal_Response: Deno.NativeType = {
  struct: [
    "i8",
    action_msgs__msg__GoalInfo__Sequence,
  ],
} as const;
export const rcl_action_cancel_response_t: Deno.NativeType = {
  struct: [
    action_msgs__srv__CancelGoal_Response,
    rcl_allocator_t,
  ],
} as const;
export const rcl_action_goal_info_t: Deno.NativeType =
  action_msgs__msg__GoalInfo;
const action_msgs__msg__GoalStatus__Sequence: Deno.NativeType = {
  struct: [
    "pointer",
    "usize",
    "usize",
  ],
} as const;
const action_msgs__msg__GoalStatusArray: Deno.NativeType = {
  struct: [
    action_msgs__msg__GoalStatus__Sequence,
  ],
} as const;
export const rcl_action_goal_status_array_t: Deno.NativeType = {
  struct: [
    action_msgs__msg__GoalStatusArray,
    rcl_allocator_t,
  ],
} as const;
export const rcl_action_goal_state_t: Deno.NativeType = "i8";
export const rcl_action_goal_event_t: Deno.NativeType = "i32";
