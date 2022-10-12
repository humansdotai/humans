/* eslint-disable */
import { Params } from "../humans/params";
import { FeeBalance } from "../humans/fee_balance";
import { KeysignVoteData } from "../humans/keysign_vote_data";
import { ObserveVote } from "../humans/observe_vote";
import { PoolBalance } from "../humans/pool_balance";
import { Pubkeys } from "../humans/pubkeys";
import { Superadmin } from "../humans/superadmin";
import { TransactionData } from "../humans/transaction_data";
import { WhitelistedNode } from "../humans/whitelisted_node";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "humansdotai.humans.humans";

/** GenesisState defines the humans module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  feeBalanceList: FeeBalance[];
  keysignVoteDataList: KeysignVoteData[];
  observeVoteList: ObserveVote[];
  poolBalanceList: PoolBalance[];
  pubkeysList: Pubkeys[];
  superadminList: Superadmin[];
  transactionDataList: TransactionData[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  whitelistedNodeList: WhitelistedNode[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeBalanceList) {
      FeeBalance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.keysignVoteDataList) {
      KeysignVoteData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.observeVoteList) {
      ObserveVote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolBalanceList) {
      PoolBalance.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.pubkeysList) {
      Pubkeys.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.superadminList) {
      Superadmin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.transactionDataList) {
      TransactionData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.whitelistedNodeList) {
      WhitelistedNode.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.feeBalanceList = [];
    message.keysignVoteDataList = [];
    message.observeVoteList = [];
    message.poolBalanceList = [];
    message.pubkeysList = [];
    message.superadminList = [];
    message.transactionDataList = [];
    message.whitelistedNodeList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feeBalanceList.push(
            FeeBalance.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.keysignVoteDataList.push(
            KeysignVoteData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.observeVoteList.push(
            ObserveVote.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.poolBalanceList.push(
            PoolBalance.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.pubkeysList.push(Pubkeys.decode(reader, reader.uint32()));
          break;
        case 7:
          message.superadminList.push(
            Superadmin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.transactionDataList.push(
            TransactionData.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.whitelistedNodeList.push(
            WhitelistedNode.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.feeBalanceList = [];
    message.keysignVoteDataList = [];
    message.observeVoteList = [];
    message.poolBalanceList = [];
    message.pubkeysList = [];
    message.superadminList = [];
    message.transactionDataList = [];
    message.whitelistedNodeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.feeBalanceList !== undefined && object.feeBalanceList !== null) {
      for (const e of object.feeBalanceList) {
        message.feeBalanceList.push(FeeBalance.fromJSON(e));
      }
    }
    if (
      object.keysignVoteDataList !== undefined &&
      object.keysignVoteDataList !== null
    ) {
      for (const e of object.keysignVoteDataList) {
        message.keysignVoteDataList.push(KeysignVoteData.fromJSON(e));
      }
    }
    if (
      object.observeVoteList !== undefined &&
      object.observeVoteList !== null
    ) {
      for (const e of object.observeVoteList) {
        message.observeVoteList.push(ObserveVote.fromJSON(e));
      }
    }
    if (
      object.poolBalanceList !== undefined &&
      object.poolBalanceList !== null
    ) {
      for (const e of object.poolBalanceList) {
        message.poolBalanceList.push(PoolBalance.fromJSON(e));
      }
    }
    if (object.pubkeysList !== undefined && object.pubkeysList !== null) {
      for (const e of object.pubkeysList) {
        message.pubkeysList.push(Pubkeys.fromJSON(e));
      }
    }
    if (object.superadminList !== undefined && object.superadminList !== null) {
      for (const e of object.superadminList) {
        message.superadminList.push(Superadmin.fromJSON(e));
      }
    }
    if (
      object.transactionDataList !== undefined &&
      object.transactionDataList !== null
    ) {
      for (const e of object.transactionDataList) {
        message.transactionDataList.push(TransactionData.fromJSON(e));
      }
    }
    if (
      object.whitelistedNodeList !== undefined &&
      object.whitelistedNodeList !== null
    ) {
      for (const e of object.whitelistedNodeList) {
        message.whitelistedNodeList.push(WhitelistedNode.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feeBalanceList) {
      obj.feeBalanceList = message.feeBalanceList.map((e) =>
        e ? FeeBalance.toJSON(e) : undefined
      );
    } else {
      obj.feeBalanceList = [];
    }
    if (message.keysignVoteDataList) {
      obj.keysignVoteDataList = message.keysignVoteDataList.map((e) =>
        e ? KeysignVoteData.toJSON(e) : undefined
      );
    } else {
      obj.keysignVoteDataList = [];
    }
    if (message.observeVoteList) {
      obj.observeVoteList = message.observeVoteList.map((e) =>
        e ? ObserveVote.toJSON(e) : undefined
      );
    } else {
      obj.observeVoteList = [];
    }
    if (message.poolBalanceList) {
      obj.poolBalanceList = message.poolBalanceList.map((e) =>
        e ? PoolBalance.toJSON(e) : undefined
      );
    } else {
      obj.poolBalanceList = [];
    }
    if (message.pubkeysList) {
      obj.pubkeysList = message.pubkeysList.map((e) =>
        e ? Pubkeys.toJSON(e) : undefined
      );
    } else {
      obj.pubkeysList = [];
    }
    if (message.superadminList) {
      obj.superadminList = message.superadminList.map((e) =>
        e ? Superadmin.toJSON(e) : undefined
      );
    } else {
      obj.superadminList = [];
    }
    if (message.transactionDataList) {
      obj.transactionDataList = message.transactionDataList.map((e) =>
        e ? TransactionData.toJSON(e) : undefined
      );
    } else {
      obj.transactionDataList = [];
    }
    if (message.whitelistedNodeList) {
      obj.whitelistedNodeList = message.whitelistedNodeList.map((e) =>
        e ? WhitelistedNode.toJSON(e) : undefined
      );
    } else {
      obj.whitelistedNodeList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.feeBalanceList = [];
    message.keysignVoteDataList = [];
    message.observeVoteList = [];
    message.poolBalanceList = [];
    message.pubkeysList = [];
    message.superadminList = [];
    message.transactionDataList = [];
    message.whitelistedNodeList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.feeBalanceList !== undefined && object.feeBalanceList !== null) {
      for (const e of object.feeBalanceList) {
        message.feeBalanceList.push(FeeBalance.fromPartial(e));
      }
    }
    if (
      object.keysignVoteDataList !== undefined &&
      object.keysignVoteDataList !== null
    ) {
      for (const e of object.keysignVoteDataList) {
        message.keysignVoteDataList.push(KeysignVoteData.fromPartial(e));
      }
    }
    if (
      object.observeVoteList !== undefined &&
      object.observeVoteList !== null
    ) {
      for (const e of object.observeVoteList) {
        message.observeVoteList.push(ObserveVote.fromPartial(e));
      }
    }
    if (
      object.poolBalanceList !== undefined &&
      object.poolBalanceList !== null
    ) {
      for (const e of object.poolBalanceList) {
        message.poolBalanceList.push(PoolBalance.fromPartial(e));
      }
    }
    if (object.pubkeysList !== undefined && object.pubkeysList !== null) {
      for (const e of object.pubkeysList) {
        message.pubkeysList.push(Pubkeys.fromPartial(e));
      }
    }
    if (object.superadminList !== undefined && object.superadminList !== null) {
      for (const e of object.superadminList) {
        message.superadminList.push(Superadmin.fromPartial(e));
      }
    }
    if (
      object.transactionDataList !== undefined &&
      object.transactionDataList !== null
    ) {
      for (const e of object.transactionDataList) {
        message.transactionDataList.push(TransactionData.fromPartial(e));
      }
    }
    if (
      object.whitelistedNodeList !== undefined &&
      object.whitelistedNodeList !== null
    ) {
      for (const e of object.whitelistedNodeList) {
        message.whitelistedNodeList.push(WhitelistedNode.fromPartial(e));
      }
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
