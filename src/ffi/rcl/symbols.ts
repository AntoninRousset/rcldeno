import * as types from "./types.ts";

export const rcl_arguments_copy: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_arguments_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_arguments_get_count_unparsed: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_arguments_get_count_unparsed_ros: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "i32",
} as const;
export const rcl_arguments_get_log_levels: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_arguments_get_param_files: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "i32",
} as const;
export const rcl_arguments_get_param_files_count: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_arguments_get_param_overrides: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_arguments_get_unparsed: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_arguments_get_unparsed_ros: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "i32",
} as const;
export const rcl_borrow_loaned_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_client_fini: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_client_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_client_options_t,
} as const;
export const rcl_client_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_client_options_t,
} as const;
export const rcl_client_get_rmw_handle: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_client_get_service_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_client_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_client_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_client_request_publisher_get_actual_qos: Deno.ForeignFunction =
  {
    parameters: ["pointer"],
    result: "pointer",
  } as const;
export const rcl_client_response_subscription_get_actual_qos:
  Deno.ForeignFunction = {
    parameters: ["pointer"],
    result: "pointer",
  } as const;
export const rcl_client_set_on_new_response_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_clock_add_jump_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_jump_threshold_t,
    "function",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_clock_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_clock_get_now: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_clock_init: Deno.ForeignFunction = {
  parameters: [
    types.rcl_clock_type_t,
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_clock_remove_jump_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_clock_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_context_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_context_get_domain_id: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_context_get_init_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_context_get_instance_id: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_context_instance_id_t,
} as const;
export const rcl_context_get_rmw_context: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_context_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_count_publishers: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_count_subscribers: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_difference_times: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_disable_ros_time_override: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_enable_ros_time_override: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_enclave_name_validation_result_string: Deno.ForeignFunction = {
  parameters: ["i32"],
  result: "pointer",
} as const;
export const rcl_event_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_event_get_rmw_handle: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_event_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_event_set_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_expand_topic_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: "bool",
} as const;
export const rcl_get_client_names_and_types_by_node: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_default_domain_id: Deno.ForeignFunction = {
  parameters: ["usize"],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_default_topic_name_substitutions: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_disable_loaned_message: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_enforcement_policy: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_localhost_only: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_node_names: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_node_names_with_enclaves: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_publisher_names_and_types_by_node: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "bool",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_publishers_info_by_topic: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "bool",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_secure_root: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rcl_get_security_options_from_environment: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_service_names_and_types: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_service_names_and_types_by_node: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_subscriber_names_and_types_by_node: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "bool",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_get_subscriptions_info_by_topic: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "bool",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_topic_names_and_types: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "bool",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_get_zero_initialized_arguments: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_arguments_t,
} as const;
export const rcl_get_zero_initialized_client: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_client_t,
} as const;
export const rcl_get_zero_initialized_context: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_context_t,
} as const;
export const rcl_get_zero_initialized_event: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_event_t,
} as const;
export const rcl_get_zero_initialized_guard_condition: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_guard_condition_t,
} as const;
export const rcl_get_zero_initialized_init_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_init_options_t,
} as const;
export const rcl_get_zero_initialized_lexer_lookahead2: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_lexer_lookahead2_t,
} as const;
export const rcl_get_zero_initialized_log_levels: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_log_levels_t,
} as const;
export const rcl_get_zero_initialized_node: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_node_t,
} as const;
export const rcl_get_zero_initialized_publisher: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_publisher_t,
} as const;
export const rcl_get_zero_initialized_remap: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_remap_t,
} as const;
export const rcl_get_zero_initialized_service: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_service_t,
} as const;
export const rcl_get_zero_initialized_subscription: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_subscription_t,
} as const;
export const rcl_get_zero_initialized_subscription_content_filter_options:
  Deno.ForeignFunction = {
    parameters: [],
    result: types.rcl_subscription_content_filter_options_t,
  } as const;
export const rcl_get_zero_initialized_timer: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_timer_t,
} as const;
export const rcl_get_zero_initialized_wait_set: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_wait_set_t,
} as const;
export const rcl_guard_condition_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_guard_condition_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_service_options_t,
} as const;
export const rcl_guard_condition_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_guard_condition_get_rmw_handle: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_guard_condition_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcl_guard_condition_options_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_init: Deno.ForeignFunction = {
  parameters: [
    "i32",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_init_options_copy: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_init_options_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_init_options_get_allocator: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_init_options_get_domain_id: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_init_options_get_rmw_init_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_init_options_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_init_options_set_domain_id: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
  ],
  result: types.rcl_ret_t,
} as const;
//export const rcl_interfaces__msg__Log__create: Deno.ForeignFunction = {}
//export const rcl_interfaces__msg__Log__destroy: Deno.ForeignFunction = {}
export const rcl_is_enabled_ros_time_override: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_lexer_analyze: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_lexer_lookahead2_accept: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_lexer_lookahead2_expect: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_lexeme_t,
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_lexer_lookahead2_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_lexer_lookahead2_get_text: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_lexer_lookahead2_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcl_allocator_t,
  ],
  result: "pointer",
} as const;
export const rcl_lexer_lookahead2_peek: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_lexer_lookahead2_peek2: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_log_levels_add_logger_setting: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcl_log_severity_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_log_levels_copy: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_log_levels_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_log_levels_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "usize",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_log_levels_shrink_to_size: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_logging_configure: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_logging_configure_with_output_handler: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "function",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_logging_external_initialize: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcutils_allocator_t,
  ],
  result: types.rcl_logging_ret_t,
} as const;
export const rcl_logging_external_log: Deno.ForeignFunction = {
  parameters: [
    "i32",
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const rcl_logging_external_set_logger_level: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
  ],
  result: types.rcl_logging_ret_t,
} as const;
export const rcl_logging_external_shutdown: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_logging_ret_t,
} as const;
export const rcl_logging_fini: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_ret_t,
} as const;
export const rcl_logging_multiple_output_handler: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
    "pointer",
    types.rcutils_time_point_value_t,
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const rcl_logging_rosout_enabled: Deno.ForeignFunction = {
  parameters: [],
  result: "bool",
} as const;
export const rcl_logging_rosout_fini: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_ret_t,
} as const;
export const rcl_logging_rosout_fini_publisher_for_node: Deno.ForeignFunction =
  {
    parameters: ["pointer"],
    result: types.rcl_ret_t,
  } as const;
export const rcl_logging_rosout_init: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_logging_rosout_init_publisher_for_node: Deno.ForeignFunction =
  {
    parameters: ["pointer"],
    result: types.rcl_ret_t,
  } as const;
export const rcl_logging_rosout_output_handler: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
    "pointer",
    types.rcutils_time_point_value_t,
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_names_and_types_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_names_and_types_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_node_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_node_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_node_options_t,
} as const;
export const rcl_node_get_domain_id: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_node_get_fully_qualified_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_node_get_graph_guard_condition: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_node_get_logger_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_node_get_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_node_get_namespace: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_node_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_node_get_rcl_instance_id: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "i64",
} as const;
export const rcl_node_get_rmw_handle: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_node_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_node_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_node_is_valid_except_context: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_node_options_copy: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_node_options_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_node_resolve_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcl_allocator_t,
    "bool",
    "bool",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_parse_arguments: Deno.ForeignFunction = {
  parameters: [
    "i32",
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_parse_yaml_file: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "bool",
} as const;
export const rcl_parse_yaml_value: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "bool",
} as const;
export const rcl_publish: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publish_loaned_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publish_serialized_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publisher_assert_liveliness: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_publisher_can_loan_messages: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_publisher_event_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcl_publisher_event_type_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publisher_fini: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publisher_get_actual_qos: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_publisher_get_context: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_publisher_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_publisher_options_t,
} as const;
export const rcl_publisher_get_network_flow_endpoints: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publisher_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_publisher_get_rmw_handle: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_publisher_get_subscription_count: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publisher_get_topic_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_publisher_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_publisher_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_publisher_is_valid_except_context: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_publisher_wait_for_all_acked: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
  nonblocking: true,
} as const;
export const rcl_remap_copy: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_remap_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_remap_node_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_remap_node_namespace: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_remap_service_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_remap_topic_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_remove_ros_arguments: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcl_allocator_t,
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_return_loaned_message_from_publisher: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_return_loaned_message_from_subscription: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_rmw_implementation_identifier_check: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_ret_t,
} as const;
export const rcl_ros_clock_fini: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_ret_t,
} as const;
export const rcl_ros_clock_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_security_enabled: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_send_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_send_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_service_fini: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_service_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_service_options_t,
} as const;
export const rcl_service_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_service_get_rmw_handle: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_service_get_service_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_service_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_service_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_service_request_subscription_get_actual_qos:
  Deno.ForeignFunction = {
    parameters: ["pointer"],
    result: "pointer",
  } as const;
export const rcl_service_response_publisher_get_actual_qos:
  Deno.ForeignFunction = {
    parameters: ["pointer"],
    result: "pointer",
  } as const;
export const rcl_service_server_is_available: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_service_set_on_new_request_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_set_ros_time_override: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcutils_time_point_value_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_shutdown: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_steady_clock_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_steady_clock_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_can_loan_messages: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_subscription_content_filter_options_fini:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_subscription_content_filter_options_init:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
      "usize",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_subscription_content_filter_options_set: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "usize",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_subscription_event_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_subscription_event_type_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_fini: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_get_actual_qos: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_subscription_get_content_filter: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_subscription_options_t,
} as const;
export const rcl_subscription_get_network_flow_endpoints: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_subscription_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_subscription_get_publisher_count: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_get_rmw_handle: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_subscription_get_topic_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_subscription_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_is_cft_enabled: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_subscription_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_subscription_options_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_options_set_content_filter_options:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "usize",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_subscription_set_content_filter: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_subscription_set_on_new_message_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  } as const;
export const rcl_system_clock_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_system_clock_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_event: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_loaned_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_request_with_info: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_response_with_info: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_sequence: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "usize",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_take_serialized_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_call: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_cancel: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_clock: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_exchange_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_exchange_period: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i64",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_get_allocator: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_timer_get_callback: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "function",
} as const;
export const rcl_timer_get_guard_condition: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_timer_get_period: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_get_time_since_last_call: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_get_time_until_next_call: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "i64",
    "function",
    types.rcl_allocator_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_is_canceled: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_is_ready: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_timer_reset: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_topic_name_validation_result_string: Deno.ForeignFunction = {
  parameters: ["i32"],
  result: "pointer",
} as const;
export const rcl_trigger_guard_condition: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_validate_enclave_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_validate_enclave_name_with_size: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_validate_topic_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_validate_topic_name_with_size: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i64",
  ],
  result: types.rcl_ret_t,
  nonblocking: true,
} as const;
export const rcl_wait_for_publishers: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "usize",
    types.rcutils_duration_value_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
  nonblocking: true,
} as const;
export const rcl_wait_for_subscribers: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "usize",
    types.rcutils_duration_value_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
  nonblocking: true,
} as const;
export const rcl_wait_set_add_client: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_add_event: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_add_guard_condition: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_add_service: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_add_subscription: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_add_timer: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_clear: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_get_allocator: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "usize",
    "usize",
    "usize",
    "usize",
    "usize",
    "pointer",
    types.rcl_allocator_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_wait_set_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_wait_set_resize: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "usize",
    "usize",
    "usize",
    "usize",
    "usize",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_yaml_node_struct_copy: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "bool",
} as const;
export const rcl_yaml_node_struct_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "void",
} as const;
export const rcl_yaml_node_struct_init: Deno.ForeignFunction = {
  parameters: [types.rcutils_allocator_t],
  result: "pointer",
} as const;
export const rcutils_allocator_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcutils_char_array_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_char_array_vsprintf: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_error_is_set: Deno.ForeignFunction = {
  parameters: [],
  result: "void",
} as const;
export const rcutils_format_string_limit: Deno.ForeignFunction = {
  parameters: [
    types.rcutils_allocator_t,
    "usize",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rcutils_get_default_allocator: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcutils_allocator_t,
} as const;
export const rcutils_get_env: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rcutils_get_error_string: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcutils_error_string_t,
} as const;
export const rcutils_get_zero_initialized_hash_map: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcutils_hash_map_t,
} as const;
export const rcutils_get_zero_initialized_string_map: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcutils_hash_map_t,
} as const;
export const rcutils_hash_map_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_hash_map_get: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_hash_map_get_next_key_and_data: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_hash_map_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "usize",
    "usize",
    "function",
    "function",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_hash_map_key_exists: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "bool",
} as const;
export const rcutils_hash_map_set: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_hash_map_string_cmp_func: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "i32",
} as const;
export const rcutils_hash_map_string_hash_func: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "usize",
} as const;
export const rcutils_hash_map_unset: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_is_directory: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcutils_join_path: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcutils_allocator_t,
  ],
  result: "pointer",
} as const;
export const rcutils_log: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const rcutils_logging_console_output_handler: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
    "pointer",
    types.rcutils_time_point_value_t,
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const rcutils_logging_format_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
    "pointer",
    types.rcutils_time_point_value_t,
    "pointer",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_logging_initialize: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_logging_logger_is_enabled_for: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
  ],
  result: "bool",
} as const;
export const rcutils_logging_set_default_logger_level: Deno.ForeignFunction = {
  parameters: ["i32"],
  result: "void",
} as const;
export const rcutils_logging_set_logger_level: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i32",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_logging_set_output_handler: Deno.ForeignFunction = {
  parameters: ["function"],
  result: "void",
} as const;
export const rcutils_logging_severity_level_from_string: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      types.rcutils_allocator_t,
      "pointer",
    ],
    result: types.rcutils_ret_t,
  };
export const rcutils_reallocf: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rcutils_repl_str: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rcutils_reset_error: Deno.ForeignFunction = {
  parameters: [],
  result: "void",
} as const;
export const rcutils_set_error_state: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "usize",
  ],
  result: "void",
} as const;
export const rcutils_snprintf: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
  ],
  result: "i32",
} as const;
export const rcutils_steady_time_now: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_strdup: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcutils_allocator_t,
  ],
  result: "pointer",
} as const;
export const rcutils_string_map_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_string_map_getn: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "usize",
  ],
  result: "pointer",
} as const;
export const rcutils_string_map_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    types.rcutils_allocator_t,
  ],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_strndup: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    types.rcutils_allocator_t,
  ],
  result: "pointer",
} as const;
export const rcutils_system_time_now: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcutils_ret_t,
} as const;
export const rcutils_to_native_path: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcutils_allocator_t,
  ],
  result: "pointer",
} as const;
export const rmw_borrow_loaned_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcutils_ret_t,
} as const;
export const rmw_client_request_publisher_get_actual_qos: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcutils_ret_t,
  };
export const rmw_client_response_subscription_get_actual_qos:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_client_set_on_new_response_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_context_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_count_publishers: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_count_subscribers: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_create_client: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rmw_create_guard_condition: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rmw_create_node: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rmw_create_publisher: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rmw_create_service: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rmw_create_subscription: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rmw_create_wait_set: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
  ],
  result: "pointer",
} as const;
export const rmw_destroy_client: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_destroy_guard_condition: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_destroy_node: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_destroy_publisher: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_destroy_service: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_destroy_subscription: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_destroy_wait_set: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_event_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_event_set_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_full_topic_name_validation_result_string:
  Deno.ForeignFunction = {
    parameters: ["i32"],
    result: "pointer",
  };
export const rmw_get_client_names_and_types_by_node: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_default_publisher_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rmw_publisher_options_t,
} as const;
export const rmw_get_default_subscription_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rmw_subscription_options_t,
} as const;
export const rmw_get_implementation_identifier: Deno.ForeignFunction = {
  parameters: [],
  result: "pointer",
} as const;
export const rmw_get_node_names: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_node_names_with_enclaves: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_publisher_names_and_types_by_node: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "bool",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_publishers_info_by_topic: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "bool",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_service_names_and_types: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_service_names_and_types_by_node: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_subscriber_names_and_types_by_node: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "bool",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_get_subscriptions_info_by_topic: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "bool",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_topic_names_and_types: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "bool",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_get_zero_initialized_content_filter_options:
  Deno.ForeignFunction = {
    parameters: [],
    result: types.rmw_subscription_content_filter_options_t,
  };
export const rmw_get_zero_initialized_context: Deno.ForeignFunction = {
  parameters: [],
  result: types.rmw_context_t,
} as const;
export const rmw_get_zero_initialized_event: Deno.ForeignFunction = {
  parameters: [],
  result: types.rmw_event_t,
} as const;
export const rmw_get_zero_initialized_init_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rmw_init_options_t,
} as const;
export const rmw_get_zero_initialized_message_info: Deno.ForeignFunction = {
  parameters: [],
  result: types.rmw_message_info_t,
} as const;
export const rmw_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_init_options_copy: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_init_options_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_init_options_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcutils_allocator_t,
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_names_and_types_check_zero: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_names_and_types_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_names_and_types_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_namespace_validation_result_string: Deno.ForeignFunction = {
  parameters: ["i32"],
  result: "pointer",
} as const;
export const rmw_network_flow_endpoint_array_check_zero: Deno.ForeignFunction =
  {
    parameters: ["pointer"],
    result: types.rmw_ret_t,
  };
export const rmw_node_get_graph_guard_condition: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rmw_node_name_validation_result_string: Deno.ForeignFunction = {
  parameters: ["i32"],
  result: "pointer",
} as const;
export const rmw_publish: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_publish_loaned_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_publish_serialized_message: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_publisher_assert_liveliness: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_publisher_count_matched_subscriptions: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_publisher_event_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rmw_event_type_t,
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_publisher_get_actual_qos: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_publisher_get_network_flow_endpoints: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_publisher_wait_for_all_acked: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rmw_time_t,
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_return_loaned_message_from_publisher: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_return_loaned_message_from_subscription: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_send_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_send_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_service_request_subscription_get_actual_qos:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_service_response_publisher_get_actual_qos:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_service_server_is_available: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_service_set_on_new_request_callback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "function",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_shutdown: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_subscription_content_filter_options_copy:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_subscription_content_filter_options_fini:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_subscription_content_filter_options_init:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "usize",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_subscription_content_filter_options_set: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "usize",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_subscription_count_matched_publishers: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_subscription_event_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rmw_event_type_t,
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_subscription_get_actual_qos: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_subscription_get_content_filter: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_subscription_get_network_flow_endpoints: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_subscription_set_content_filter: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_subscription_set_on_new_message_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rmw_ret_t,
  };
export const rmw_take_event: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_take_loaned_message_with_info: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_take_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_take_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_take_sequence: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_take_serialized_message_with_info: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_take_with_info: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_topic_endpoint_info_array_check_zero: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_trigger_guard_condition: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rmw_ret_t,
} as const;
export const rmw_validate_full_topic_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_validate_namespace: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_validate_namespace_with_size: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    "pointer",
    "usize",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_validate_node_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
} as const;
export const rmw_wait: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rmw_ret_t,
  nonblocking: true,
} as const;
export const ros_trace_rcl_client_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const ros_trace_rcl_init: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "void",
} as const;
export const ros_trace_rcl_node_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const ros_trace_rcl_publish: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const ros_trace_rcl_publisher_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "usize",
  ],
  result: "void",
} as const;
export const ros_trace_rcl_service_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: "void",
} as const;
export const ros_trace_rcl_subscription_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "usize",
  ],
  result: "void",
} as const;
//export const ros_trace_rcl_take
export const ros_trace_rcl_timer_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "i64",
  ],
  result: "void",
} as const;
//export const rosidl_runtime_c__String__assign
//export const rosidl_typesupport_c__get_message_type_support_handle__rcl_interfaces__msg__Log
