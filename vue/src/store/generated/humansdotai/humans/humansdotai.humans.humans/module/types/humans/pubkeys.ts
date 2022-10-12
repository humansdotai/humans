/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "humansdotai.humans.humans";

export interface Pubkeys {
  index: string;
  moniker: string;
  pubkey: string;
  issigner: string;
  timeat: string;
}

const basePubkeys: object = {
  index: "",
  moniker: "",
  pubkey: "",
  issigner: "",
  timeat: "",
};

export const Pubkeys = {
  encode(message: Pubkeys, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.pubkey !== "") {
      writer.uint32(26).string(message.pubkey);
    }
    if (message.issigner !== "") {
      writer.uint32(34).string(message.issigner);
    }
    if (message.timeat !== "") {
      writer.uint32(42).string(message.timeat);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Pubkeys {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePubkeys } as Pubkeys;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.pubkey = reader.string();
          break;
        case 4:
          message.issigner = reader.string();
          break;
        case 5:
          message.timeat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pubkeys {
    const message = { ...basePubkeys } as Pubkeys;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = String(object.moniker);
    } else {
      message.moniker = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = String(object.pubkey);
    } else {
      message.pubkey = "";
    }
    if (object.issigner !== undefined && object.issigner !== null) {
      message.issigner = String(object.issigner);
    } else {
      message.issigner = "";
    }
    if (object.timeat !== undefined && object.timeat !== null) {
      message.timeat = String(object.timeat);
    } else {
      message.timeat = "";
    }
    return message;
  },

  toJSON(message: Pubkeys): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.issigner !== undefined && (obj.issigner = message.issigner);
    message.timeat !== undefined && (obj.timeat = message.timeat);
    return obj;
  },

  fromPartial(object: DeepPartial<Pubkeys>): Pubkeys {
    const message = { ...basePubkeys } as Pubkeys;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    } else {
      message.moniker = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = "";
    }
    if (object.issigner !== undefined && object.issigner !== null) {
      message.issigner = object.issigner;
    } else {
      message.issigner = "";
    }
    if (object.timeat !== undefined && object.timeat !== null) {
      message.timeat = object.timeat;
    } else {
      message.timeat = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
