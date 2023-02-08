export function ROSIDL_TYPESUPPORT_INTERFACE__SYMBOL_NAME(
  typesupport_name: string,
  function_name: string,
  package_name: string,
  interface_type: string,
  interface_name: string,
): string {
  return [
    typesupport_name,
    function_name,
    package_name,
    interface_type,
    interface_name,
  ].join("__");
}
export function ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(
  typesupport_name: string,
  package_name: string,
  interface_type: string,
  message_name: string,
): string {
  return ROSIDL_TYPESUPPORT_INTERFACE__SYMBOL_NAME(
    typesupport_name,
    "get_message_type_support_handle",
    package_name,
    interface_type,
    message_name,
  );
}

export function ROSIDL_TYPESUPPORT_INTERFACE__SERVICE_SYMBOL_NAME(
  typesupport_name: string,
  package_name: string,
  interface_type: string,
  service_name: string,
): string {
  return ROSIDL_TYPESUPPORT_INTERFACE__SYMBOL_NAME(
    typesupport_name,
    "get_service_type_support_handle",
    package_name,
    interface_type,
    service_name,
  );
}

export function ROSIDL_TYPESUPPORT_INTERFACE__ACTION_SYMBOL_NAME(
  typesupport_name: string,
  package_name: string,
  interface_type: string,
  action_name: string,
): string {
  return ROSIDL_TYPESUPPORT_INTERFACE__SYMBOL_NAME(
    typesupport_name,
    "get_action_type_support_handle",
    package_name,
    interface_type,
    action_name,
  );
}
