import * as macros from "./macros.ts";

export const rcutils_allocator_t: Deno.NativeType = {
  struct: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
} as const;
export const rcl_allocator_t = rcutils_allocator_t;
export const rcl_arguments_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_context_instance_id_t = "u64";
export const rcl_context_t: Deno.NativeType = {
  struct: [
    rcl_arguments_t,
    "pointer",
    ...Array(8).fill("u8"),
  ],
} as const;
export const rmw_event_callback_t: Deno.UnsafeCallbackDefinition = {
  parameters: [
    "pointer",
    "usize",
  ],
  result: "void",
} as const;
export const rcl_event_callback_t = rmw_event_callback_t;
export const rcl_guard_condition_t: Deno.NativeType = {
  struct: [
    "pointer",
    "pointer",
  ],
} as const;
export const rcl_guard_condition_options_t: Deno.NativeType = {
  struct: [rcl_allocator_t],
} as const;
export const rcl_init_options_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rmw_ret_t = "i32";
export const rcl_ret_t = rmw_ret_t;
//export const rcl_init: Deno.NativeType = {
//  parameters: ["i32", "pointer", "pointer", "pointer"],
//  result: rcl_ret_t,
//};
//export const rcl_shutdown: Deno.NativeType = {
//  parameters: ["pointer"],
//  result: rcl_ret_t,
//};
export const rcl_log_severity_t = "i32";
//export const rcl_logger_setting_t: Deno.NativeType = {
//  struct: [
//    "pointer",
//    rcl_log_severity_t,
//  ],
//}
export const rcl_log_levels_t: Deno.NativeType = {
  struct: [
    rcl_log_severity_t,
    "pointer",
    "usize",
    "usize",
    rcl_allocator_t,
  ],
} as const;
export const rmw_qos_history_policy_t = "i32";
export const rmw_qos_reliability_policy_t = "i32";
export const rmw_qos_durability_policy_t = "i32";
export const rmw_time_t: Deno.NativeType = {
  struct: [
    "u64",
    "u64",
  ],
} as const;
export const rmw_qos_liveliness_policy_t = "i32";
export const rmw_qos_profile_t: Deno.NativeType = {
  struct: [
    rmw_qos_history_policy_t,
    "usize",
    rmw_qos_reliability_policy_t,
    rmw_qos_durability_policy_t,
    structuredClone(rmw_time_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_time_t), // FIXME: https://github.com/denoland/deno/issues/17482
    rmw_qos_liveliness_policy_t,
    structuredClone(rmw_time_t), // FIXME: https://github.com/denoland/deno/issues/17482
    "bool",
  ],
} as const;
export const rcl_node_options_t: Deno.NativeType = {
  struct: [
    rcl_allocator_t,
    "bool",
    rcl_arguments_t,
    "bool",
    rmw_qos_profile_t,
  ],
} as const;
export const rcl_node_t: Deno.NativeType = {
  struct: [
    "pointer",
    "pointer",
  ],
} as const;
export const rcl_publisher_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rmw_unique_network_flow_endpoints_requirement_t = "i32";
export const rmw_publisher_options_t: Deno.NativeType = {
  struct: [
    "pointer",
    rmw_unique_network_flow_endpoints_requirement_t,
  ],
} as const;
export const rcl_publisher_options_t: Deno.NativeType = {
  struct: [
    rmw_qos_profile_t,
    rcl_allocator_t,
    rmw_publisher_options_t,
  ],
} as const;
export const rcl_subscription_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rmw_subscription_options_t: Deno.NativeType = {
  struct: [
    "pointer",
    "bool",
    rmw_unique_network_flow_endpoints_requirement_t,
    "pointer",
  ],
} as const;
export const rcl_subscription_options_t: Deno.NativeType = {
  struct: [
    rmw_qos_profile_t,
    rcl_allocator_t,
    rmw_subscription_options_t,
  ],
} as const;
//const rcutils_uint8_array_t: Deno.NativeType = {
//  struct: [
//    "pointer",
//    "usize",
//    "usize",
//    rcutils_allocator_t,
//  ]
//}
//const rmw_serialized_message_t = rcutils_uint8_array_t
//export const rcl_serialized_message_t = rmw_serialized_message_t
//
export const rcl_client_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_client_options_t: Deno.NativeType = {
  struct: [
    rmw_qos_profile_t,
    rcl_allocator_t,
  ],
} as const;
export const rcutils_duration_value_t = "i64";
export const rcl_duration_value_t = rcutils_duration_value_t;
export const rcl_duration_t: Deno.NativeType = {
  struct: [rcl_duration_value_t],
} as const;
export const rcl_jump_threshold_t: Deno.NativeType = {
  struct: [
    "bool",
    structuredClone(rcl_duration_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rcl_duration_t), // FIXME: https://github.com/denoland/deno/issues/17482
  ],
} as const;
export const rcl_jump_callback_t: Deno.UnsafeCallbackDefinition = {
  parameters: [
    "pointer",
    "bool",
    "pointer",
  ],
  result: "void",
} as const;
export const rcl_clock_type_t = "i32";
export const rcl_event_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_lexer_lookahead2_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_remap_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_service_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_subscription_content_filter_options_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_timer_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcl_wait_set_t: Deno.NativeType = {
  struct: [
    "pointer",
    "usize",
    "pointer",
    "usize",
    "pointer",
    "usize",
    "pointer",
    "usize",
    "pointer",
    "usize",
    "pointer",
    "usize",
    "pointer",
  ],
} as const;
export const rcl_service_options_t: Deno.NativeType = {
  struct: [
    rmw_qos_profile_t,
    rcl_allocator_t,
  ],
} as const;
export const rcl_lexeme_t = "i32";
export const rcutils_time_point_value_t = "i64";
const rcutils_logging_output_handler_t: Deno.UnsafeCallbackDefinition = {
  parameters: [
    "pointer",
    "i32",
    "pointer",
    rcutils_time_point_value_t,
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const rcl_logging_output_handler_t = rcutils_logging_output_handler_t;
export const rcl_logging_ret_t = "i32";
export const rcl_publisher_event_type_t = "i32";
export const rcl_subscription_event_type_t = "i32";
export const rcl_timer_callback_t: Deno.UnsafeCallbackDefinition = {
  parameters: [
    "pointer",
    "i64",
  ],
  result: "void",
} as const;
export const rcutils_ret_t = "i32";
export const rcutils_error_string_t: Deno.NativeType = {
  struct: Array(macros.RCUTILS_ERROR_MESSAGE_MAX_LENGTH).fill("u8"),
} as const;
export const rcutils_hash_map_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcutils_string_map_t: Deno.NativeType = {
  struct: ["pointer"],
} as const;
export const rcutils_hash_map_key_hasher_t: Deno.UnsafeCallbackDefinition = {
  parameters: ["pointer"],
  result: "usize",
} as const;
export const rcutils_hash_map_key_cmp_t: Deno.UnsafeCallbackDefinition = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "i32",
} as const;
export const rcutils_string_array_t: Deno.NativeType = {
  struct: [
    "usize",
    "pointer",
    rcutils_allocator_t,
  ],
} as const;
export const rmw_subscription_content_filter_options_t: Deno.NativeType = {
  struct: [
    "pointer",
    rcutils_string_array_t,
  ],
} as const;
export const rmw_security_enforcement_policy_t = "i32";
export const rmw_security_options_t: Deno.NativeType = {
  struct: [
    rmw_security_enforcement_policy_t,
    "pointer",
  ],
} as const;
export const rmw_localhost_only_t = "i32";
export const rmw_init_options_t: Deno.NativeType = {
  struct: [
    "u64",
    "pointer",
    "usize",
    rmw_security_options_t,
    rmw_localhost_only_t,
    "pointer",
    rcutils_allocator_t,
    "pointer",
  ],
} as const;
export const rmw_context_t: Deno.NativeType = {
  struct: [
    "u64",
    "pointer",
    rmw_init_options_t,
    "usize",
    "pointer",
  ],
} as const;
export const rmw_event_type_t = "i32";
export const rmw_event_t: Deno.NativeType = {
  struct: [
    "pointer",
    "pointer",
    rmw_event_type_t,
  ],
} as const;
export const rmw_time_point_value_t = rcutils_time_point_value_t;
export const rmw_gid_t: Deno.NativeType = {
  struct: [
    "pointer",
    ...Array(macros.RMW_GID_STORAGE_SIZE).fill("u8"),
  ],
} as const;
export const rmw_message_info_t: Deno.NativeType = {
  struct: [
    structuredClone(rmw_time_point_value_t), // FIXME: https://github.com/denoland/deno/issues/17482
    structuredClone(rmw_time_point_value_t), // FIXME: https://github.com/denoland/deno/issues/17482
    "u64",
    "u64",
    rmw_gid_t,
    "bool",
  ],
} as const;
