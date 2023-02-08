import type {
  Feedback,
  Goal,
  Interface,
  Message,
  Request,
  Response,
  Result,
} from "./interface.ts";
import { getLibPath } from "./ffi/utils.ts";
import * as macros from "./ffi/rosidl_runtime_c/macros.ts";

export type InterfaceConstructor<I extends Interface> = new (
  // deno-lint-ignore no-explicit-any
  properties?: any,
) => I;

interface TypeSupport {
  readonly unsafeHandle: Deno.PointerValue;
}

export interface ActionTypeSupport<
  GOAL extends Goal,
  FEEDBACK extends Feedback,
  RESULT extends Result,
> extends TypeSupport {
  readonly Goal: InterfaceConstructor<GOAL>;
  readonly Feedback: InterfaceConstructor<FEEDBACK>;
  readonly Result: InterfaceConstructor<RESULT>;
}

export interface MsgTypeSupport<
  MESSAGE extends Message,
> extends TypeSupport {
  readonly Message: InterfaceConstructor<MESSAGE>;
}

export interface SrvTypeSupport<
  REQUEST extends Request,
  RESPONSE extends Response,
> extends TypeSupport {
  readonly Request: InterfaceConstructor<REQUEST>;
  readonly Response: InterfaceConstructor<RESPONSE>;
}

// Generator

type Input = {
  "action": {
    [name: string]: {
      Goal: InterfaceConstructor<Goal>;
      Feedback: InterfaceConstructor<Feedback>;
      Result: InterfaceConstructor<Result>;
    };
  };
  "msg": {
    [name: string]: {
      Message: InterfaceConstructor<Message>;
    };
  };
  "srv": {
    [name: string]: {
      Request: InterfaceConstructor<Request>;
      Response: InterfaceConstructor<Response>;
    };
  };
};

type Output<I extends Input> = {
  "action": {
    [N in keyof I["action"]]: ActionTypeSupport<
      InstanceType<I["action"][N]["Goal"]>,
      InstanceType<I["action"][N]["Feedback"]>,
      InstanceType<I["action"][N]["Result"]>
    >;
  };
  "msg": {
    [N in keyof I["msg"]]: MsgTypeSupport<
      InstanceType<I["msg"][N]["Message"]>
    >;
  };
  "srv": {
    [N in keyof I["srv"]]: SrvTypeSupport<
      InstanceType<I["srv"][N]["Request"]>,
      InstanceType<I["srv"][N]["Response"]>
    >;
  };
};

const symbolNamers: {
  [type: string]: (packageName: string, name: string) => string;
} = {
  action: (packageName, name) =>
    macros.ROSIDL_GET_ACTION_TYPE_SUPPORT(packageName, name),
  msg: (packageName, name) =>
    macros.ROSIDL_GET_MSG_TYPE_SUPPORT(packageName, "msg", name),
  srv: (packageName, name) =>
    macros.ROSIDL_GET_SRV_TYPE_SUPPORT(packageName, "srv", name),
};

export function makeTypeSupports<I extends Input>(
  packageName: string,
  definition: I,
) {
  const libPath = getLibPath(`lib${packageName}__rosidl_typesupport_c.so`);
  const symbols: Deno.ForeignLibraryInterface = {};
  Object.entries(definition).forEach(([type, c]) => {
    Object.keys(c).forEach((name) => {
      symbols[`${type}:${name}`] = {
        name: symbolNamers[type](packageName, name),
        parameters: [],
        result: "pointer",
      } as const;
    });
  });
  const lib = Deno.dlopen(libPath, structuredClone({ ...symbols }));
  return Object.entries(definition).reduce(
    (a1, [type, c]) =>
      Object.assign(
        a1,
        {
          [type]: Object.entries(c).reduce(
            (a2, [name, interfaceConstructors]) =>
              Object.assign(
                a2,
                {
                  [name]: {
                    ...interfaceConstructors,
                    unsafeHandle: lib.symbols[`${type}:${name}`](),
                  },
                },
              ),
            {},
          ),
        },
      ),
    {},
  ) as Output<I>;
}
