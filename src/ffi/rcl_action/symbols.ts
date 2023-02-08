import * as types from "./types.ts";

export const rcl_action_accept_new_goal: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "pointer",
} as const;
export const rcl_action_cancel_response_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_cancel_response_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    types.rcl_allocator_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_client_fini: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_client_get_action_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_action_client_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_action_client_options_t,
} as const;
export const rcl_action_client_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_action_client_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_client_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_action_client_set_cancel_client_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_client_set_feedback_subscription_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_client_set_goal_client_callback: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_client_set_result_client_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_client_set_status_subscription_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_client_wait_set_get_entities_ready:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_client_wait_set_get_num_entities: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_expire_goals: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "usize",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_cancel_service_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_client_names_and_types_by_node:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_get_feedback_topic_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_goal_service_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_goal_status_array: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_names_and_types: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_result_service_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_server_names_and_types_by_node:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_get_status_topic_name: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_allocator_t,
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_get_zero_initialized_cancel_request:
  Deno.ForeignFunction = {
    parameters: [],
    result: types.rcl_action_cancel_request_t,
  };
export const rcl_action_get_zero_initialized_cancel_response:
  Deno.ForeignFunction = {
    parameters: [],
    result: types.rcl_action_cancel_response_t,
  };
export const rcl_action_get_zero_initialized_client: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_action_client_t,
} as const;
export const rcl_action_get_zero_initialized_goal_handle: Deno.ForeignFunction =
  {
    parameters: [],
    result: types.rcl_action_goal_handle_t,
  };
export const rcl_action_get_zero_initialized_goal_info: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_action_goal_info_t,
} as const;
export const rcl_action_get_zero_initialized_goal_status_array:
  Deno.ForeignFunction = {
    parameters: [],
    result: types.rcl_action_goal_status_array_t,
  };
export const rcl_action_get_zero_initialized_server: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_action_server_t,
} as const;
export const rcl_action_goal_handle_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_goal_handle_get_info: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_goal_handle_get_status: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_goal_handle_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    types.rcl_allocator_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_goal_handle_is_active: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_action_goal_handle_is_cancelable: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_action_goal_handle_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_action_goal_status_array_fini: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_goal_status_array_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "usize",
    types.rcl_allocator_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_notify_goal_done: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_process_cancel_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_publish_feedback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_publish_status: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_send_cancel_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_send_cancel_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_send_goal_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_send_goal_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_send_result_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_send_result_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_server_fini: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_server_get_action_name: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_action_server_get_default_options: Deno.ForeignFunction = {
  parameters: [],
  result: types.rcl_action_server_options_t,
} as const;
export const rcl_action_server_get_goal_handles: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_server_get_options: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "pointer",
} as const;
export const rcl_action_server_goal_exists: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: "bool",
} as const;
export const rcl_action_server_init: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_server_is_available: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_server_is_valid: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_action_server_is_valid_except_context: Deno.ForeignFunction = {
  parameters: ["pointer"],
  result: "bool",
} as const;
export const rcl_action_server_set_cancel_service_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_server_set_goal_service_callback: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_server_set_result_service_callback:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "function",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_server_wait_set_get_entities_ready:
  Deno.ForeignFunction = {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_server_wait_set_get_num_entities: Deno.ForeignFunction =
  {
    parameters: [
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
      "pointer",
    ],
    result: types.rcl_ret_t,
  };
export const rcl_action_take_cancel_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_take_cancel_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_take_feedback: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_take_goal_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_take_goal_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_take_result_request: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_take_result_response: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_take_status: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_transition_goal_state: Deno.ForeignFunction = {
  parameters: [
    types.rcl_action_goal_state_t,
    types.rcl_action_goal_event_t,
  ],
  result: types.rcl_action_goal_state_t,
} as const;
export const rcl_action_update_goal_state: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    types.rcl_action_goal_event_t,
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_wait_set_add_action_client: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
export const rcl_action_wait_set_add_action_server: Deno.ForeignFunction = {
  parameters: [
    "pointer",
    "pointer",
    "pointer",
  ],
  result: types.rcl_ret_t,
} as const;
