/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "humansdotai.humans.humans";

export interface WhitelistedNode {
  index: string;
  nodeaddr: string;
  walletaddr: string;
  pubkey: string;
  fee: string;
}

const baseWhitelistedNode: object = {
  index: "",
  nodeaddr: "",
  walletaddr: "",
  pubkey: "",
  fee: "",
};

export const WhitelistedNode = {
  encode(message: WhitelistedNode, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.nodeaddr !== "") {
      writer.uint32(18).string(message.nodeaddr);
    }
    if (message.walletaddr !== "") {
      writer.uint32(26).string(message.walletaddr);
    }
    if (message.pubkey !== "") {
      writer.uint32(34).string(message.pubkey);
    }
    if (message.fee !== "") {
      writer.uint32(42).string(message.fee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WhitelistedNode {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhitelistedNode } as WhitelistedNode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.nodeaddr = reader.string();
          break;
        case 3:
          message.walletaddr = reader.string();
          break;
        case 4:
          message.pubkey = reader.string();
          break;
        case 5:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhitelistedNode {
    const message = { ...baseWhitelistedNode } as WhitelistedNode;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.nodeaddr !== undefined && object.nodeaddr !== null) {
      message.nodeaddr = String(object.nodeaddr);
    } else {
      message.nodeaddr = "";
    }
    if (object.walletaddr !== undefined && object.walletaddr !== null) {
      message.walletaddr = String(object.walletaddr);
    } else {
      message.walletaddr = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = String(object.pubkey);
    } else {
      message.pubkey = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    return message;
  },

  toJSON(message: WhitelistedNode): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.nodeaddr !== undefined && (obj.nodeaddr = message.nodeaddr);
    message.walletaddr !== undefined && (obj.walletaddr = message.walletaddr);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial(object: DeepPartial<WhitelistedNode>): WhitelistedNode {
    const message = { ...baseWhitelistedNode } as WhitelistedNode;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.nodeaddr !== undefined && object.nodeaddr !== null) {
      message.nodeaddr = object.nodeaddr;
    } else {
      message.nodeaddr = "";
    }
    if (object.walletaddr !== undefined && object.walletaddr !== null) {
      message.walletaddr = object.walletaddr;
    } else {
      message.walletaddr = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
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
