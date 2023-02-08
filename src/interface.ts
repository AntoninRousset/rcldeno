import { Buffer } from "../deps.ts";

// TODO: Big Endian detection
const BUFFER_ALIGNMENT = 8;

interface Property {
  name: string;
  type: string;
}

interface AlignedProperty extends Property {
  offset: number;
  size: number;
}

const TYPES: { [type: string]: { size: number; alignment: number } } = {
  "unique_identifier_msgs/UUID": { size: 16, alignment: 1 },
  "string": { size: 24, alignment: 8 },
  "builtin_interfaces/Time": { size: 8, alignment: 4 },
  "builtin_interfaces/Duration": { size: 8, alignment: 4 },
  "bool": { size: 1, alignment: 1 },
  "int8": { size: 1, alignment: 1 },
  "int16": { size: 2, alignment: 2 },
  "geometry_msgs/TransformStamped": { size: 112, alignment: 8 },
  "tf2_msgs/TF2Error": { size: 32, alignment: 8 },
} as const;

// Add paddings
function alignProperties(
  properties: Property[],
): {
  totalLength: number;
  alignedProperties: AlignedProperty[];
} {
  const alignedProperties: AlignedProperty[] = [];
  let offset = 0;
  let largestAlignment = 1;
  properties.forEach((property) => {
    const { alignment, size } = TYPES[property.type];
    offset += (alignment - (offset % alignment)) % alignment;
    alignedProperties.push({ ...property, offset, size });
    offset += size;
    largestAlignment = Math.max(alignment, largestAlignment);
  });
  // complete the struct to be aligned with the largest alignment it contains
  offset += (largestAlignment - (offset % largestAlignment)) % largestAlignment;
  return { alignedProperties, totalLength: offset };
}

export abstract class Interface {
  protected handle: Buffer;
  private extraBuffers: { [propertyName: string]: { [key: string]: Buffer } } =
    {};

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }

  constructor(properties: Property[] = []) {
    const { totalLength, alignedProperties } = alignProperties(properties);
    this.handle = new Buffer(totalLength);

    if (BigInt(this.unsafeHandle) % BigInt(BUFFER_ALIGNMENT)) {
      throw `buffer is not ${BUFFER_ALIGNMENT}-bytes aligned`;
    }

    alignedProperties.forEach(
      (alignedProperty) => this.defineProperty(alignedProperty),
    );
  }

  defineProperty(alignedProperty: AlignedProperty) {
    const buffer = this.handle.slice(
      alignedProperty.offset,
      alignedProperty.offset + alignedProperty.size,
    );
    let propertyDescriptor: PropertyDescriptor = {};
    const extraBuffers: { [key: string]: Buffer } = {};

    switch (alignedProperty.type) {
      case "unique_identifier_msgs/UUID":
        propertyDescriptor = {
          get() {
            const s = buffer.toString("hex");
            return [
              s.slice(0, 8),
              s.slice(8, 12),
              s.slice(12, 16),
              s.slice(16, 20),
              s.slice(20, 32),
            ].join("-");
          },
          set(value: string) {
            const s = value.replace(/-/g, "");
            buffer.write(s, 0, "hex");
          },
        };
        break;
      case "tf2_msgs/TF2Error":
        propertyDescriptor = {
          get() {
            const errorStringPtr = buffer.readBigInt64LE(8);
            const errorStringView = new Deno.UnsafePointerView(errorStringPtr);
            return {
              error: buffer.readUInt8(0),
              errorString: errorStringView.getCString(),
            };
          },
          set(value: { error: number; errorString: string }) {
            buffer.writeUInt8(value.error, 0);

            extraBuffers.errorString = Buffer.concat([
              Buffer.from(value.errorString),
              Buffer.from([0]),
            ]);
            buffer.writeBigInt64LE(
              BigInt(Deno.UnsafePointer.of(extraBuffers.errorString)),
              8,
            );
            buffer.writeBigInt64LE(BigInt(value.errorString.length), 16);
            buffer.writeBigInt64LE(BigInt(extraBuffers.errorString.length), 24);
          },
        };
        break;
      case "geometry_msgs/TransformStamped":
        propertyDescriptor = {
          get() {
            const frameIdPtr = buffer.readBigInt64LE(8);
            const frameIdView = new Deno.UnsafePointerView(frameIdPtr);
            const childFrameIdPtr = buffer.readBigInt64LE(32);
            const childFrameIdView = new Deno.UnsafePointerView(
              childFrameIdPtr,
            );
            return {
              header: {
                stamp: {
                  sec: buffer.readInt32LE(0),
                  nanosec: buffer.readUInt32LE(4),
                },
                frameId: frameIdView.getCString(),
              },
              childFrameId: childFrameIdView.getCString(),
              transform: {
                translation: {
                  x: buffer.readDoubleLE(56),
                  y: buffer.readDoubleLE(64),
                  z: buffer.readDoubleLE(72),
                },
                rotation: {
                  x: buffer.readDoubleLE(80),
                  y: buffer.readDoubleLE(88),
                  z: buffer.readDoubleLE(96),
                  w: buffer.readDoubleLE(104),
                },
              },
            };
          },
          set(
            value: {
              header: {
                stamp: { sec: number; nanosec: number };
                frameId: string;
              };
              childFrameId: string;
              transform: {
                translation: { x: number; y: number; z: number };
                rotation: { x: number; y: number; z: number; w: number };
              };
            },
          ) {
            buffer.writeInt32LE(value.header.stamp.sec, 0);
            buffer.writeUInt32LE(value.header.stamp.nanosec, 4);

            extraBuffers.frameId = Buffer.concat([
              Buffer.from(value.header.frameId),
              Buffer.from([0]),
            ]);
            buffer.writeBigInt64LE(
              BigInt(Deno.UnsafePointer.of(extraBuffers.frameId)),
              8,
            );
            buffer.writeBigInt64LE(BigInt(value.header.frameId.length), 16);
            buffer.writeBigInt64LE(BigInt(extraBuffers.frameId.length), 24);

            extraBuffers.childFrameId = Buffer.concat([
              Buffer.from(value.childFrameId),
              Buffer.from([0]),
            ]);
            buffer.writeBigInt64LE(
              BigInt(Deno.UnsafePointer.of(extraBuffers.childFrameId)),
              32,
            );
            buffer.writeBigInt64LE(BigInt(value.childFrameId.length), 40);
            buffer.writeBigInt64LE(
              BigInt(extraBuffers.childFrameId.length),
              48,
            );

            buffer.writeDoubleLE(value.transform.translation.x, 56);
            buffer.writeDoubleLE(value.transform.translation.y, 64);
            buffer.writeDoubleLE(value.transform.translation.z, 72);

            buffer.writeDoubleLE(value.transform.rotation.x, 80);
            buffer.writeDoubleLE(value.transform.rotation.y, 88);
            buffer.writeDoubleLE(value.transform.rotation.z, 96);
            buffer.writeDoubleLE(value.transform.rotation.w, 104);
          },
        };
        break;
      case "string":
        propertyDescriptor = {
          get() {
            const ptr = buffer.readBigInt64LE(0);
            const view = new Deno.UnsafePointerView(ptr);
            return view.getCString();
          },
          set(value: string) {
            extraBuffers.value = Buffer.concat([
              Buffer.from(value),
              Buffer.from([0]),
            ]);
            buffer.writeBigInt64LE(
              BigInt(Deno.UnsafePointer.of(extraBuffers.value)),
              0,
            );
            buffer.writeBigInt64LE(BigInt(value.length), 8);
            buffer.writeBigInt64LE(BigInt(extraBuffers.value.length), 16);
          },
        };
        break;
      case "builtin_interfaces/Time":
        propertyDescriptor = {
          get() {
            return {
              sec: buffer.readInt32LE(0),
              nanosec: buffer.readUInt32LE(4),
            };
          },
          set(value: { sec: number; nanosec: number }) {
            buffer.writeInt32LE(value.sec, 0);
            buffer.writeUInt32LE(value.nanosec, 4);
          },
        };
        break;
      case "builtin_interfaces/Duration":
        propertyDescriptor = {
          get() {
            return {
              sec: buffer.readInt32LE(0),
              nanosec: buffer.readUInt32LE(4),
            };
          },
          set(value: { sec: number; nanosec: number }) {
            buffer.writeInt32LE(value.sec, 0);
            buffer.writeUInt32LE(value.nanosec, 4);
          },
        };
        break;
      case "bool":
        propertyDescriptor = {
          get() {
            return Boolean(buffer.readUInt8(0));
          },
          set(value: boolean) {
            buffer.writeUInt8(value ? 1 : 0, 0);
          },
        };
        break;
      case "int8":
        propertyDescriptor = {
          get() {
            return buffer.readUInt8(0);
          },
          set(value: number) {
            buffer.writeInt8(value, 0);
          },
        };
        break;
      case "int16":
        propertyDescriptor = {
          get() {
            return buffer.readUInt16LE(0);
          },
          set(value: number) {
            buffer.writeInt16LE(value, 0);
          },
        };
        break;
    }

    this.extraBuffers[alignedProperty.name] = extraBuffers;
    Object.defineProperty(this, alignedProperty.name, propertyDescriptor);
  }
}

export abstract class Feedback extends Interface {}
export abstract class Goal extends Interface {}
export abstract class Message extends Interface {}
export abstract class Request extends Interface {}
export abstract class Response extends Interface {}
export abstract class Result extends Interface {}

export class GoalResponse extends Interface {
  declare accepted: boolean;
  declare stamp: { sec: number; nanosec: number };

  constructor(properties: {
    accepted?: boolean;
    stamp?: { sec: number; nanosec: number };
  } = {}) {
    super([
      { name: "accepted", type: "bool" },
      { name: "stamp", type: "builtin_interfaces/Time" },
    ]);
    Object.assign(this, properties);
  }
}

export class ResultRequest extends Interface {
  declare goalId: string;

  constructor(properties: {
    goalId?: string;
  } = {}) {
    super([
      { name: "goalId", type: "unique_identifier_msgs/UUID" },
    ]);
    Object.assign(this, properties);
  }
}

export class RequestId {
  private handle = new Uint8Array(9);

  get unsafeHandle(): Deno.PointerValue {
    return Deno.UnsafePointer.of(this.handle);
  }
}
