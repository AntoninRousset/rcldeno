import { path } from "../../deps.ts";

const packageName = "std_msgs";
const interfaceType = "msg";
const messageNames = ["Int8"];
const ROSIDL_TYPESUPPORT_INTERFACE__SYMBOL_NAME = (
  typesupport_name: string,
  function_name: string,
  package_name: string,
  interface_type: string,
  interface_name: string,
) =>
  `${typesupport_name}__${function_name}__${package_name}__${interface_type}__${interface_name}`;
const ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME = (
  typesupport_name: string,
  package_name: string,
  interface_type: string,
  message_name: string,
) =>
  ROSIDL_TYPESUPPORT_INTERFACE__SYMBOL_NAME(
    typesupport_name,
    "get_message_type_support_handle",
    package_name,
    interface_type,
    message_name,
  );
const symbols = Object.fromEntries(
  messageNames.map((
    messageName,
  ) => [
    ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(
      "rosidl_typesupport_c",
      packageName,
      interfaceType,
      messageName,
    ),
    { parameters: [], result: "pointer" },
  ]),
);

import { libDir } from "../../src/ffi/mod.ts";
const libPath = path.join(libDir, `libstd_msgs__rosidl_typesupport_c.so`);
export const lib = Deno.dlopen(
  libPath,
  structuredClone({ ...symbols }), // FIXME: TS2615
);
