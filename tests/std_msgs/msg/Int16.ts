import * as rcl from "../../../mod.ts";

export class Message extends rcl.Message {
  declare data: number;

  constructor(properties: { data?: number } = {}) {
    super([
      { name: "data", type: "int16" },
    ]);
    Object.assign(this, properties);
  }
}
