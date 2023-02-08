import * as rcl from "../../../mod.ts";

interface Time {
  sec: number;
  nanosec: number;
}

interface Duration {
  sec: number;
  nanosec: number;
}

export class Goal extends rcl.Goal {
  declare goalId: string;
  declare targetFrame: string;
  declare sourceFrame: string;
  declare sourceTime: Time;
  declare timeout: Duration;
  declare targetTime: Time;
  declare fixedFrame: string;
  declare advanced: boolean;

  constructor(properties: {
    goalId: string;
    targetFrame: string;
    sourceFrame: string;
    sourceTime: Time;
    timeout: Duration;
    // Advanced API
    targetTime: Time;
    fixedFrame: string;
    // Whether or not to use the advanced API
    advanced: boolean;
  }) {
    super([
      { name: "goalId", type: "unique_identifier_msgs/UUID" },
      { name: "targetFrame", type: "string" },
      { name: "sourceFrame", type: "string" },
      { name: "sourceTime", type: "builtin_interfaces/Time" },
      { name: "timeout", type: "builtin_interfaces/Duration" },
      { name: "targetTime", type: "builtin_interfaces/Time" },
      { name: "fixedFrame", type: "string" },
      { name: "advanced", type: "bool" },
    ]);
    Object.assign(this, properties);
  }
}

export class Result extends rcl.Result {
  declare status: number;
  declare transform: {
    header: {
      stamp: { sec: number; nanosec: number };
      frameId: string;
    };
    childFrameId: string;
    transform: {
      translation: { x: number; y: number; z: number };
      rotation: { x: number; y: number; z: number; w: number };
    };
  };
  declare error: {
    error: number;
    errorString: string;
  };

  constructor(properties: {
    status: number;
    transform: {
      header: {
        stamp: { sec: number; nanosec: number };
        frameId: string;
      };
      childFrameId: string;
      transform: {
        translation: { x: number; y: number; z: number };
        rotation: { x: number; y: number; z: number; w: number };
      };
    };
    error: {
      error: number;
      errorString: string;
    };
  }) {
    super([
      { name: "status", type: "int8" },
      { name: "transform", type: "geometry_msgs/TransformStamped" },
      { name: "error", type: "tf2_msgs/TF2Error" },
    ]);
    Object.assign(this, properties);
  }
}

export class Feedback extends rcl.Feedback {
  constructor(properties = {}) {
    super();
    Object.assign(this, properties);
  }
}
