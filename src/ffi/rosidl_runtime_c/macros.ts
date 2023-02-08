import {
  ROSIDL_TYPESUPPORT_INTERFACE__ACTION_SYMBOL_NAME,
  ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME,
  ROSIDL_TYPESUPPORT_INTERFACE__SERVICE_SYMBOL_NAME,
} from "../rosidl_typesupport_interface/macros.ts";

export function ROSIDL_GET_ACTION_TYPE_SUPPORT(
  PkgName: string,
  Name: string,
): string {
  return ROSIDL_TYPESUPPORT_INTERFACE__ACTION_SYMBOL_NAME(
    "rosidl_typesupport_c",
    PkgName,
    "action",
    Name,
  );
}

export function ROSIDL_GET_MSG_TYPE_SUPPORT(
  PkgName: string,
  MsgSubfolder: string,
  Name: string,
): string {
  return ROSIDL_TYPESUPPORT_INTERFACE__MESSAGE_SYMBOL_NAME(
    "rosidl_typesupport_c",
    PkgName,
    MsgSubfolder,
    Name,
  );
}

export function ROSIDL_GET_SRV_TYPE_SUPPORT(
  PkgName: string,
  SrvSubfolder: string,
  SrvName: string,
): string {
  return ROSIDL_TYPESUPPORT_INTERFACE__SERVICE_SYMBOL_NAME(
    "rosidl_typesupport_c",
    PkgName,
    SrvSubfolder,
    SrvName,
  );
}
