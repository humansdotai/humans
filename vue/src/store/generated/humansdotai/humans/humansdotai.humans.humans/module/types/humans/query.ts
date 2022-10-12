/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../humans/params";
import { FeeBalance } from "../humans/fee_balance";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { KeysignVoteData } from "../humans/keysign_vote_data";
import { ObserveVote } from "../humans/observe_vote";
import { PoolBalance } from "../humans/pool_balance";
import { Pubkeys } from "../humans/pubkeys";
import { Superadmin } from "../humans/superadmin";
import { TransactionData } from "../humans/transaction_data";
import { WhitelistedNode } from "../humans/whitelisted_node";

export const protobufPackage = "humansdotai.humans.humans";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetFeeBalanceRequest {
  index: string;
}

export interface QueryGetFeeBalanceResponse {
  feeBalance: FeeBalance | undefined;
}

export interface QueryAllFeeBalanceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFeeBalanceResponse {
  feeBalance: FeeBalance[];
  pagination: PageResponse | undefined;
}

export interface QueryGetKeysignVoteDataRequest {
  index: string;
}

export interface QueryGetKeysignVoteDataResponse {
  keysignVoteData: KeysignVoteData | undefined;
}

export interface QueryAllKeysignVoteDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllKeysignVoteDataResponse {
  keysignVoteData: KeysignVoteData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetObserveVoteRequest {
  index: string;
}

export interface QueryGetObserveVoteResponse {
  observeVote: ObserveVote | undefined;
}

export interface QueryAllObserveVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllObserveVoteResponse {
  observeVote: ObserveVote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPoolBalanceRequest {
  index: string;
}

export interface QueryGetPoolBalanceResponse {
  poolBalance: PoolBalance | undefined;
}

export interface QueryAllPoolBalanceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPoolBalanceResponse {
  poolBalance: PoolBalance[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPubkeysRequest {
  index: string;
}

export interface QueryGetPubkeysResponse {
  pubkeys: Pubkeys | undefined;
}

export interface QueryAllPubkeysRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPubkeysResponse {
  pubkeys: Pubkeys[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSuperadminRequest {
  index: string;
}

export interface QueryGetSuperadminResponse {
  superadmin: Superadmin | undefined;
}

export interface QueryAllSuperadminRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSuperadminResponse {
  superadmin: Superadmin[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTransactionDataRequest {
  index: string;
}

export interface QueryGetTransactionDataResponse {
  transactionData: TransactionData | undefined;
}

export interface QueryAllTransactionDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTransactionDataResponse {
  transactionData: TransactionData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWhitelistedNodeRequest {
  index: string;
}

export interface QueryGetWhitelistedNodeResponse {
  whitelistedNode: WhitelistedNode | undefined;
}

export interface QueryAllWhitelistedNodeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhitelistedNodeResponse {
  whitelistedNode: WhitelistedNode[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetFeeBalanceRequest: object = { index: "" };

export const QueryGetFeeBalanceRequest = {
  encode(
    message: QueryGetFeeBalanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFeeBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFeeBalanceRequest,
    } as QueryGetFeeBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeeBalanceRequest {
    const message = {
      ...baseQueryGetFeeBalanceRequest,
    } as QueryGetFeeBalanceRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetFeeBalanceRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFeeBalanceRequest>
  ): QueryGetFeeBalanceRequest {
    const message = {
      ...baseQueryGetFeeBalanceRequest,
    } as QueryGetFeeBalanceRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetFeeBalanceResponse: object = {};

export const QueryGetFeeBalanceResponse = {
  encode(
    message: QueryGetFeeBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.feeBalance !== undefined) {
      FeeBalance.encode(message.feeBalance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetFeeBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFeeBalanceResponse,
    } as QueryGetFeeBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeBalance = FeeBalance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeeBalanceResponse {
    const message = {
      ...baseQueryGetFeeBalanceResponse,
    } as QueryGetFeeBalanceResponse;
    if (object.feeBalance !== undefined && object.feeBalance !== null) {
      message.feeBalance = FeeBalance.fromJSON(object.feeBalance);
    } else {
      message.feeBalance = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFeeBalanceResponse): unknown {
    const obj: any = {};
    message.feeBalance !== undefined &&
      (obj.feeBalance = message.feeBalance
        ? FeeBalance.toJSON(message.feeBalance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFeeBalanceResponse>
  ): QueryGetFeeBalanceResponse {
    const message = {
      ...baseQueryGetFeeBalanceResponse,
    } as QueryGetFeeBalanceResponse;
    if (object.feeBalance !== undefined && object.feeBalance !== null) {
      message.feeBalance = FeeBalance.fromPartial(object.feeBalance);
    } else {
      message.feeBalance = undefined;
    }
    return message;
  },
};

const baseQueryAllFeeBalanceRequest: object = {};

export const QueryAllFeeBalanceRequest = {
  encode(
    message: QueryAllFeeBalanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFeeBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFeeBalanceRequest,
    } as QueryAllFeeBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFeeBalanceRequest {
    const message = {
      ...baseQueryAllFeeBalanceRequest,
    } as QueryAllFeeBalanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFeeBalanceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFeeBalanceRequest>
  ): QueryAllFeeBalanceRequest {
    const message = {
      ...baseQueryAllFeeBalanceRequest,
    } as QueryAllFeeBalanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFeeBalanceResponse: object = {};

export const QueryAllFeeBalanceResponse = {
  encode(
    message: QueryAllFeeBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.feeBalance) {
      FeeBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllFeeBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFeeBalanceResponse,
    } as QueryAllFeeBalanceResponse;
    message.feeBalance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeBalance.push(FeeBalance.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFeeBalanceResponse {
    const message = {
      ...baseQueryAllFeeBalanceResponse,
    } as QueryAllFeeBalanceResponse;
    message.feeBalance = [];
    if (object.feeBalance !== undefined && object.feeBalance !== null) {
      for (const e of object.feeBalance) {
        message.feeBalance.push(FeeBalance.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFeeBalanceResponse): unknown {
    const obj: any = {};
    if (message.feeBalance) {
      obj.feeBalance = message.feeBalance.map((e) =>
        e ? FeeBalance.toJSON(e) : undefined
      );
    } else {
      obj.feeBalance = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFeeBalanceResponse>
  ): QueryAllFeeBalanceResponse {
    const message = {
      ...baseQueryAllFeeBalanceResponse,
    } as QueryAllFeeBalanceResponse;
    message.feeBalance = [];
    if (object.feeBalance !== undefined && object.feeBalance !== null) {
      for (const e of object.feeBalance) {
        message.feeBalance.push(FeeBalance.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetKeysignVoteDataRequest: object = { index: "" };

export const QueryGetKeysignVoteDataRequest = {
  encode(
    message: QueryGetKeysignVoteDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetKeysignVoteDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetKeysignVoteDataRequest,
    } as QueryGetKeysignVoteDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKeysignVoteDataRequest {
    const message = {
      ...baseQueryGetKeysignVoteDataRequest,
    } as QueryGetKeysignVoteDataRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetKeysignVoteDataRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetKeysignVoteDataRequest>
  ): QueryGetKeysignVoteDataRequest {
    const message = {
      ...baseQueryGetKeysignVoteDataRequest,
    } as QueryGetKeysignVoteDataRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetKeysignVoteDataResponse: object = {};

export const QueryGetKeysignVoteDataResponse = {
  encode(
    message: QueryGetKeysignVoteDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.keysignVoteData !== undefined) {
      KeysignVoteData.encode(
        message.keysignVoteData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetKeysignVoteDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetKeysignVoteDataResponse,
    } as QueryGetKeysignVoteDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keysignVoteData = KeysignVoteData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKeysignVoteDataResponse {
    const message = {
      ...baseQueryGetKeysignVoteDataResponse,
    } as QueryGetKeysignVoteDataResponse;
    if (
      object.keysignVoteData !== undefined &&
      object.keysignVoteData !== null
    ) {
      message.keysignVoteData = KeysignVoteData.fromJSON(
        object.keysignVoteData
      );
    } else {
      message.keysignVoteData = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetKeysignVoteDataResponse): unknown {
    const obj: any = {};
    message.keysignVoteData !== undefined &&
      (obj.keysignVoteData = message.keysignVoteData
        ? KeysignVoteData.toJSON(message.keysignVoteData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetKeysignVoteDataResponse>
  ): QueryGetKeysignVoteDataResponse {
    const message = {
      ...baseQueryGetKeysignVoteDataResponse,
    } as QueryGetKeysignVoteDataResponse;
    if (
      object.keysignVoteData !== undefined &&
      object.keysignVoteData !== null
    ) {
      message.keysignVoteData = KeysignVoteData.fromPartial(
        object.keysignVoteData
      );
    } else {
      message.keysignVoteData = undefined;
    }
    return message;
  },
};

const baseQueryAllKeysignVoteDataRequest: object = {};

export const QueryAllKeysignVoteDataRequest = {
  encode(
    message: QueryAllKeysignVoteDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllKeysignVoteDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllKeysignVoteDataRequest,
    } as QueryAllKeysignVoteDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKeysignVoteDataRequest {
    const message = {
      ...baseQueryAllKeysignVoteDataRequest,
    } as QueryAllKeysignVoteDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKeysignVoteDataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllKeysignVoteDataRequest>
  ): QueryAllKeysignVoteDataRequest {
    const message = {
      ...baseQueryAllKeysignVoteDataRequest,
    } as QueryAllKeysignVoteDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllKeysignVoteDataResponse: object = {};

export const QueryAllKeysignVoteDataResponse = {
  encode(
    message: QueryAllKeysignVoteDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.keysignVoteData) {
      KeysignVoteData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllKeysignVoteDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllKeysignVoteDataResponse,
    } as QueryAllKeysignVoteDataResponse;
    message.keysignVoteData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keysignVoteData.push(
            KeysignVoteData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKeysignVoteDataResponse {
    const message = {
      ...baseQueryAllKeysignVoteDataResponse,
    } as QueryAllKeysignVoteDataResponse;
    message.keysignVoteData = [];
    if (
      object.keysignVoteData !== undefined &&
      object.keysignVoteData !== null
    ) {
      for (const e of object.keysignVoteData) {
        message.keysignVoteData.push(KeysignVoteData.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKeysignVoteDataResponse): unknown {
    const obj: any = {};
    if (message.keysignVoteData) {
      obj.keysignVoteData = message.keysignVoteData.map((e) =>
        e ? KeysignVoteData.toJSON(e) : undefined
      );
    } else {
      obj.keysignVoteData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllKeysignVoteDataResponse>
  ): QueryAllKeysignVoteDataResponse {
    const message = {
      ...baseQueryAllKeysignVoteDataResponse,
    } as QueryAllKeysignVoteDataResponse;
    message.keysignVoteData = [];
    if (
      object.keysignVoteData !== undefined &&
      object.keysignVoteData !== null
    ) {
      for (const e of object.keysignVoteData) {
        message.keysignVoteData.push(KeysignVoteData.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetObserveVoteRequest: object = { index: "" };

export const QueryGetObserveVoteRequest = {
  encode(
    message: QueryGetObserveVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetObserveVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetObserveVoteRequest,
    } as QueryGetObserveVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetObserveVoteRequest {
    const message = {
      ...baseQueryGetObserveVoteRequest,
    } as QueryGetObserveVoteRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetObserveVoteRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetObserveVoteRequest>
  ): QueryGetObserveVoteRequest {
    const message = {
      ...baseQueryGetObserveVoteRequest,
    } as QueryGetObserveVoteRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetObserveVoteResponse: object = {};

export const QueryGetObserveVoteResponse = {
  encode(
    message: QueryGetObserveVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.observeVote !== undefined) {
      ObserveVote.encode(
        message.observeVote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetObserveVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetObserveVoteResponse,
    } as QueryGetObserveVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.observeVote = ObserveVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetObserveVoteResponse {
    const message = {
      ...baseQueryGetObserveVoteResponse,
    } as QueryGetObserveVoteResponse;
    if (object.observeVote !== undefined && object.observeVote !== null) {
      message.observeVote = ObserveVote.fromJSON(object.observeVote);
    } else {
      message.observeVote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetObserveVoteResponse): unknown {
    const obj: any = {};
    message.observeVote !== undefined &&
      (obj.observeVote = message.observeVote
        ? ObserveVote.toJSON(message.observeVote)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetObserveVoteResponse>
  ): QueryGetObserveVoteResponse {
    const message = {
      ...baseQueryGetObserveVoteResponse,
    } as QueryGetObserveVoteResponse;
    if (object.observeVote !== undefined && object.observeVote !== null) {
      message.observeVote = ObserveVote.fromPartial(object.observeVote);
    } else {
      message.observeVote = undefined;
    }
    return message;
  },
};

const baseQueryAllObserveVoteRequest: object = {};

export const QueryAllObserveVoteRequest = {
  encode(
    message: QueryAllObserveVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllObserveVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllObserveVoteRequest,
    } as QueryAllObserveVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllObserveVoteRequest {
    const message = {
      ...baseQueryAllObserveVoteRequest,
    } as QueryAllObserveVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllObserveVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllObserveVoteRequest>
  ): QueryAllObserveVoteRequest {
    const message = {
      ...baseQueryAllObserveVoteRequest,
    } as QueryAllObserveVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllObserveVoteResponse: object = {};

export const QueryAllObserveVoteResponse = {
  encode(
    message: QueryAllObserveVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.observeVote) {
      ObserveVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllObserveVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllObserveVoteResponse,
    } as QueryAllObserveVoteResponse;
    message.observeVote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.observeVote.push(ObserveVote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllObserveVoteResponse {
    const message = {
      ...baseQueryAllObserveVoteResponse,
    } as QueryAllObserveVoteResponse;
    message.observeVote = [];
    if (object.observeVote !== undefined && object.observeVote !== null) {
      for (const e of object.observeVote) {
        message.observeVote.push(ObserveVote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllObserveVoteResponse): unknown {
    const obj: any = {};
    if (message.observeVote) {
      obj.observeVote = message.observeVote.map((e) =>
        e ? ObserveVote.toJSON(e) : undefined
      );
    } else {
      obj.observeVote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllObserveVoteResponse>
  ): QueryAllObserveVoteResponse {
    const message = {
      ...baseQueryAllObserveVoteResponse,
    } as QueryAllObserveVoteResponse;
    message.observeVote = [];
    if (object.observeVote !== undefined && object.observeVote !== null) {
      for (const e of object.observeVote) {
        message.observeVote.push(ObserveVote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPoolBalanceRequest: object = { index: "" };

export const QueryGetPoolBalanceRequest = {
  encode(
    message: QueryGetPoolBalanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPoolBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPoolBalanceRequest,
    } as QueryGetPoolBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolBalanceRequest {
    const message = {
      ...baseQueryGetPoolBalanceRequest,
    } as QueryGetPoolBalanceRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetPoolBalanceRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPoolBalanceRequest>
  ): QueryGetPoolBalanceRequest {
    const message = {
      ...baseQueryGetPoolBalanceRequest,
    } as QueryGetPoolBalanceRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetPoolBalanceResponse: object = {};

export const QueryGetPoolBalanceResponse = {
  encode(
    message: QueryGetPoolBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.poolBalance !== undefined) {
      PoolBalance.encode(
        message.poolBalance,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPoolBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPoolBalanceResponse,
    } as QueryGetPoolBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolBalance = PoolBalance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolBalanceResponse {
    const message = {
      ...baseQueryGetPoolBalanceResponse,
    } as QueryGetPoolBalanceResponse;
    if (object.poolBalance !== undefined && object.poolBalance !== null) {
      message.poolBalance = PoolBalance.fromJSON(object.poolBalance);
    } else {
      message.poolBalance = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPoolBalanceResponse): unknown {
    const obj: any = {};
    message.poolBalance !== undefined &&
      (obj.poolBalance = message.poolBalance
        ? PoolBalance.toJSON(message.poolBalance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPoolBalanceResponse>
  ): QueryGetPoolBalanceResponse {
    const message = {
      ...baseQueryGetPoolBalanceResponse,
    } as QueryGetPoolBalanceResponse;
    if (object.poolBalance !== undefined && object.poolBalance !== null) {
      message.poolBalance = PoolBalance.fromPartial(object.poolBalance);
    } else {
      message.poolBalance = undefined;
    }
    return message;
  },
};

const baseQueryAllPoolBalanceRequest: object = {};

export const QueryAllPoolBalanceRequest = {
  encode(
    message: QueryAllPoolBalanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPoolBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolBalanceRequest,
    } as QueryAllPoolBalanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolBalanceRequest {
    const message = {
      ...baseQueryAllPoolBalanceRequest,
    } as QueryAllPoolBalanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPoolBalanceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolBalanceRequest>
  ): QueryAllPoolBalanceRequest {
    const message = {
      ...baseQueryAllPoolBalanceRequest,
    } as QueryAllPoolBalanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPoolBalanceResponse: object = {};

export const QueryAllPoolBalanceResponse = {
  encode(
    message: QueryAllPoolBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.poolBalance) {
      PoolBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPoolBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolBalanceResponse,
    } as QueryAllPoolBalanceResponse;
    message.poolBalance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolBalance.push(PoolBalance.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolBalanceResponse {
    const message = {
      ...baseQueryAllPoolBalanceResponse,
    } as QueryAllPoolBalanceResponse;
    message.poolBalance = [];
    if (object.poolBalance !== undefined && object.poolBalance !== null) {
      for (const e of object.poolBalance) {
        message.poolBalance.push(PoolBalance.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPoolBalanceResponse): unknown {
    const obj: any = {};
    if (message.poolBalance) {
      obj.poolBalance = message.poolBalance.map((e) =>
        e ? PoolBalance.toJSON(e) : undefined
      );
    } else {
      obj.poolBalance = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolBalanceResponse>
  ): QueryAllPoolBalanceResponse {
    const message = {
      ...baseQueryAllPoolBalanceResponse,
    } as QueryAllPoolBalanceResponse;
    message.poolBalance = [];
    if (object.poolBalance !== undefined && object.poolBalance !== null) {
      for (const e of object.poolBalance) {
        message.poolBalance.push(PoolBalance.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPubkeysRequest: object = { index: "" };

export const QueryGetPubkeysRequest = {
  encode(
    message: QueryGetPubkeysRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPubkeysRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPubkeysRequest } as QueryGetPubkeysRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPubkeysRequest {
    const message = { ...baseQueryGetPubkeysRequest } as QueryGetPubkeysRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetPubkeysRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPubkeysRequest>
  ): QueryGetPubkeysRequest {
    const message = { ...baseQueryGetPubkeysRequest } as QueryGetPubkeysRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetPubkeysResponse: object = {};

export const QueryGetPubkeysResponse = {
  encode(
    message: QueryGetPubkeysResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pubkeys !== undefined) {
      Pubkeys.encode(message.pubkeys, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPubkeysResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPubkeysResponse,
    } as QueryGetPubkeysResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkeys = Pubkeys.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPubkeysResponse {
    const message = {
      ...baseQueryGetPubkeysResponse,
    } as QueryGetPubkeysResponse;
    if (object.pubkeys !== undefined && object.pubkeys !== null) {
      message.pubkeys = Pubkeys.fromJSON(object.pubkeys);
    } else {
      message.pubkeys = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPubkeysResponse): unknown {
    const obj: any = {};
    message.pubkeys !== undefined &&
      (obj.pubkeys = message.pubkeys
        ? Pubkeys.toJSON(message.pubkeys)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPubkeysResponse>
  ): QueryGetPubkeysResponse {
    const message = {
      ...baseQueryGetPubkeysResponse,
    } as QueryGetPubkeysResponse;
    if (object.pubkeys !== undefined && object.pubkeys !== null) {
      message.pubkeys = Pubkeys.fromPartial(object.pubkeys);
    } else {
      message.pubkeys = undefined;
    }
    return message;
  },
};

const baseQueryAllPubkeysRequest: object = {};

export const QueryAllPubkeysRequest = {
  encode(
    message: QueryAllPubkeysRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPubkeysRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPubkeysRequest } as QueryAllPubkeysRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPubkeysRequest {
    const message = { ...baseQueryAllPubkeysRequest } as QueryAllPubkeysRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPubkeysRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPubkeysRequest>
  ): QueryAllPubkeysRequest {
    const message = { ...baseQueryAllPubkeysRequest } as QueryAllPubkeysRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPubkeysResponse: object = {};

export const QueryAllPubkeysResponse = {
  encode(
    message: QueryAllPubkeysResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.pubkeys) {
      Pubkeys.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPubkeysResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPubkeysResponse,
    } as QueryAllPubkeysResponse;
    message.pubkeys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkeys.push(Pubkeys.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPubkeysResponse {
    const message = {
      ...baseQueryAllPubkeysResponse,
    } as QueryAllPubkeysResponse;
    message.pubkeys = [];
    if (object.pubkeys !== undefined && object.pubkeys !== null) {
      for (const e of object.pubkeys) {
        message.pubkeys.push(Pubkeys.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPubkeysResponse): unknown {
    const obj: any = {};
    if (message.pubkeys) {
      obj.pubkeys = message.pubkeys.map((e) =>
        e ? Pubkeys.toJSON(e) : undefined
      );
    } else {
      obj.pubkeys = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPubkeysResponse>
  ): QueryAllPubkeysResponse {
    const message = {
      ...baseQueryAllPubkeysResponse,
    } as QueryAllPubkeysResponse;
    message.pubkeys = [];
    if (object.pubkeys !== undefined && object.pubkeys !== null) {
      for (const e of object.pubkeys) {
        message.pubkeys.push(Pubkeys.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSuperadminRequest: object = { index: "" };

export const QueryGetSuperadminRequest = {
  encode(
    message: QueryGetSuperadminRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSuperadminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSuperadminRequest,
    } as QueryGetSuperadminRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSuperadminRequest {
    const message = {
      ...baseQueryGetSuperadminRequest,
    } as QueryGetSuperadminRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetSuperadminRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSuperadminRequest>
  ): QueryGetSuperadminRequest {
    const message = {
      ...baseQueryGetSuperadminRequest,
    } as QueryGetSuperadminRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetSuperadminResponse: object = {};

export const QueryGetSuperadminResponse = {
  encode(
    message: QueryGetSuperadminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.superadmin !== undefined) {
      Superadmin.encode(message.superadmin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSuperadminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSuperadminResponse,
    } as QueryGetSuperadminResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superadmin = Superadmin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSuperadminResponse {
    const message = {
      ...baseQueryGetSuperadminResponse,
    } as QueryGetSuperadminResponse;
    if (object.superadmin !== undefined && object.superadmin !== null) {
      message.superadmin = Superadmin.fromJSON(object.superadmin);
    } else {
      message.superadmin = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSuperadminResponse): unknown {
    const obj: any = {};
    message.superadmin !== undefined &&
      (obj.superadmin = message.superadmin
        ? Superadmin.toJSON(message.superadmin)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSuperadminResponse>
  ): QueryGetSuperadminResponse {
    const message = {
      ...baseQueryGetSuperadminResponse,
    } as QueryGetSuperadminResponse;
    if (object.superadmin !== undefined && object.superadmin !== null) {
      message.superadmin = Superadmin.fromPartial(object.superadmin);
    } else {
      message.superadmin = undefined;
    }
    return message;
  },
};

const baseQueryAllSuperadminRequest: object = {};

export const QueryAllSuperadminRequest = {
  encode(
    message: QueryAllSuperadminRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSuperadminRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSuperadminRequest,
    } as QueryAllSuperadminRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSuperadminRequest {
    const message = {
      ...baseQueryAllSuperadminRequest,
    } as QueryAllSuperadminRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSuperadminRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSuperadminRequest>
  ): QueryAllSuperadminRequest {
    const message = {
      ...baseQueryAllSuperadminRequest,
    } as QueryAllSuperadminRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSuperadminResponse: object = {};

export const QueryAllSuperadminResponse = {
  encode(
    message: QueryAllSuperadminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.superadmin) {
      Superadmin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSuperadminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSuperadminResponse,
    } as QueryAllSuperadminResponse;
    message.superadmin = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.superadmin.push(Superadmin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSuperadminResponse {
    const message = {
      ...baseQueryAllSuperadminResponse,
    } as QueryAllSuperadminResponse;
    message.superadmin = [];
    if (object.superadmin !== undefined && object.superadmin !== null) {
      for (const e of object.superadmin) {
        message.superadmin.push(Superadmin.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSuperadminResponse): unknown {
    const obj: any = {};
    if (message.superadmin) {
      obj.superadmin = message.superadmin.map((e) =>
        e ? Superadmin.toJSON(e) : undefined
      );
    } else {
      obj.superadmin = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSuperadminResponse>
  ): QueryAllSuperadminResponse {
    const message = {
      ...baseQueryAllSuperadminResponse,
    } as QueryAllSuperadminResponse;
    message.superadmin = [];
    if (object.superadmin !== undefined && object.superadmin !== null) {
      for (const e of object.superadmin) {
        message.superadmin.push(Superadmin.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTransactionDataRequest: object = { index: "" };

export const QueryGetTransactionDataRequest = {
  encode(
    message: QueryGetTransactionDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTransactionDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTransactionDataRequest,
    } as QueryGetTransactionDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransactionDataRequest {
    const message = {
      ...baseQueryGetTransactionDataRequest,
    } as QueryGetTransactionDataRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetTransactionDataRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTransactionDataRequest>
  ): QueryGetTransactionDataRequest {
    const message = {
      ...baseQueryGetTransactionDataRequest,
    } as QueryGetTransactionDataRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetTransactionDataResponse: object = {};

export const QueryGetTransactionDataResponse = {
  encode(
    message: QueryGetTransactionDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.transactionData !== undefined) {
      TransactionData.encode(
        message.transactionData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTransactionDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTransactionDataResponse,
    } as QueryGetTransactionDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionData = TransactionData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransactionDataResponse {
    const message = {
      ...baseQueryGetTransactionDataResponse,
    } as QueryGetTransactionDataResponse;
    if (
      object.transactionData !== undefined &&
      object.transactionData !== null
    ) {
      message.transactionData = TransactionData.fromJSON(
        object.transactionData
      );
    } else {
      message.transactionData = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTransactionDataResponse): unknown {
    const obj: any = {};
    message.transactionData !== undefined &&
      (obj.transactionData = message.transactionData
        ? TransactionData.toJSON(message.transactionData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTransactionDataResponse>
  ): QueryGetTransactionDataResponse {
    const message = {
      ...baseQueryGetTransactionDataResponse,
    } as QueryGetTransactionDataResponse;
    if (
      object.transactionData !== undefined &&
      object.transactionData !== null
    ) {
      message.transactionData = TransactionData.fromPartial(
        object.transactionData
      );
    } else {
      message.transactionData = undefined;
    }
    return message;
  },
};

const baseQueryAllTransactionDataRequest: object = {};

export const QueryAllTransactionDataRequest = {
  encode(
    message: QueryAllTransactionDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTransactionDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransactionDataRequest,
    } as QueryAllTransactionDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransactionDataRequest {
    const message = {
      ...baseQueryAllTransactionDataRequest,
    } as QueryAllTransactionDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTransactionDataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransactionDataRequest>
  ): QueryAllTransactionDataRequest {
    const message = {
      ...baseQueryAllTransactionDataRequest,
    } as QueryAllTransactionDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTransactionDataResponse: object = {};

export const QueryAllTransactionDataResponse = {
  encode(
    message: QueryAllTransactionDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.transactionData) {
      TransactionData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTransactionDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransactionDataResponse,
    } as QueryAllTransactionDataResponse;
    message.transactionData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionData.push(
            TransactionData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransactionDataResponse {
    const message = {
      ...baseQueryAllTransactionDataResponse,
    } as QueryAllTransactionDataResponse;
    message.transactionData = [];
    if (
      object.transactionData !== undefined &&
      object.transactionData !== null
    ) {
      for (const e of object.transactionData) {
        message.transactionData.push(TransactionData.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTransactionDataResponse): unknown {
    const obj: any = {};
    if (message.transactionData) {
      obj.transactionData = message.transactionData.map((e) =>
        e ? TransactionData.toJSON(e) : undefined
      );
    } else {
      obj.transactionData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransactionDataResponse>
  ): QueryAllTransactionDataResponse {
    const message = {
      ...baseQueryAllTransactionDataResponse,
    } as QueryAllTransactionDataResponse;
    message.transactionData = [];
    if (
      object.transactionData !== undefined &&
      object.transactionData !== null
    ) {
      for (const e of object.transactionData) {
        message.transactionData.push(TransactionData.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetWhitelistedNodeRequest: object = { index: "" };

export const QueryGetWhitelistedNodeRequest = {
  encode(
    message: QueryGetWhitelistedNodeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWhitelistedNodeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWhitelistedNodeRequest,
    } as QueryGetWhitelistedNodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistedNodeRequest {
    const message = {
      ...baseQueryGetWhitelistedNodeRequest,
    } as QueryGetWhitelistedNodeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetWhitelistedNodeRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhitelistedNodeRequest>
  ): QueryGetWhitelistedNodeRequest {
    const message = {
      ...baseQueryGetWhitelistedNodeRequest,
    } as QueryGetWhitelistedNodeRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetWhitelistedNodeResponse: object = {};

export const QueryGetWhitelistedNodeResponse = {
  encode(
    message: QueryGetWhitelistedNodeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whitelistedNode !== undefined) {
      WhitelistedNode.encode(
        message.whitelistedNode,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWhitelistedNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWhitelistedNodeResponse,
    } as QueryGetWhitelistedNodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedNode = WhitelistedNode.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistedNodeResponse {
    const message = {
      ...baseQueryGetWhitelistedNodeResponse,
    } as QueryGetWhitelistedNodeResponse;
    if (
      object.whitelistedNode !== undefined &&
      object.whitelistedNode !== null
    ) {
      message.whitelistedNode = WhitelistedNode.fromJSON(
        object.whitelistedNode
      );
    } else {
      message.whitelistedNode = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhitelistedNodeResponse): unknown {
    const obj: any = {};
    message.whitelistedNode !== undefined &&
      (obj.whitelistedNode = message.whitelistedNode
        ? WhitelistedNode.toJSON(message.whitelistedNode)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhitelistedNodeResponse>
  ): QueryGetWhitelistedNodeResponse {
    const message = {
      ...baseQueryGetWhitelistedNodeResponse,
    } as QueryGetWhitelistedNodeResponse;
    if (
      object.whitelistedNode !== undefined &&
      object.whitelistedNode !== null
    ) {
      message.whitelistedNode = WhitelistedNode.fromPartial(
        object.whitelistedNode
      );
    } else {
      message.whitelistedNode = undefined;
    }
    return message;
  },
};

const baseQueryAllWhitelistedNodeRequest: object = {};

export const QueryAllWhitelistedNodeRequest = {
  encode(
    message: QueryAllWhitelistedNodeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistedNodeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistedNodeRequest,
    } as QueryAllWhitelistedNodeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistedNodeRequest {
    const message = {
      ...baseQueryAllWhitelistedNodeRequest,
    } as QueryAllWhitelistedNodeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhitelistedNodeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhitelistedNodeRequest>
  ): QueryAllWhitelistedNodeRequest {
    const message = {
      ...baseQueryAllWhitelistedNodeRequest,
    } as QueryAllWhitelistedNodeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWhitelistedNodeResponse: object = {};

export const QueryAllWhitelistedNodeResponse = {
  encode(
    message: QueryAllWhitelistedNodeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whitelistedNode) {
      WhitelistedNode.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistedNodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistedNodeResponse,
    } as QueryAllWhitelistedNodeResponse;
    message.whitelistedNode = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedNode.push(
            WhitelistedNode.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistedNodeResponse {
    const message = {
      ...baseQueryAllWhitelistedNodeResponse,
    } as QueryAllWhitelistedNodeResponse;
    message.whitelistedNode = [];
    if (
      object.whitelistedNode !== undefined &&
      object.whitelistedNode !== null
    ) {
      for (const e of object.whitelistedNode) {
        message.whitelistedNode.push(WhitelistedNode.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhitelistedNodeResponse): unknown {
    const obj: any = {};
    if (message.whitelistedNode) {
      obj.whitelistedNode = message.whitelistedNode.map((e) =>
        e ? WhitelistedNode.toJSON(e) : undefined
      );
    } else {
      obj.whitelistedNode = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhitelistedNodeResponse>
  ): QueryAllWhitelistedNodeResponse {
    const message = {
      ...baseQueryAllWhitelistedNodeResponse,
    } as QueryAllWhitelistedNodeResponse;
    message.whitelistedNode = [];
    if (
      object.whitelistedNode !== undefined &&
      object.whitelistedNode !== null
    ) {
      for (const e of object.whitelistedNode) {
        message.whitelistedNode.push(WhitelistedNode.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a FeeBalance by index. */
  FeeBalance(
    request: QueryGetFeeBalanceRequest
  ): Promise<QueryGetFeeBalanceResponse>;
  /** Queries a list of FeeBalance items. */
  FeeBalanceAll(
    request: QueryAllFeeBalanceRequest
  ): Promise<QueryAllFeeBalanceResponse>;
  /** Queries a KeysignVoteData by index. */
  KeysignVoteData(
    request: QueryGetKeysignVoteDataRequest
  ): Promise<QueryGetKeysignVoteDataResponse>;
  /** Queries a list of KeysignVoteData items. */
  KeysignVoteDataAll(
    request: QueryAllKeysignVoteDataRequest
  ): Promise<QueryAllKeysignVoteDataResponse>;
  /** Queries a ObserveVote by index. */
  ObserveVote(
    request: QueryGetObserveVoteRequest
  ): Promise<QueryGetObserveVoteResponse>;
  /** Queries a list of ObserveVote items. */
  ObserveVoteAll(
    request: QueryAllObserveVoteRequest
  ): Promise<QueryAllObserveVoteResponse>;
  /** Queries a PoolBalance by index. */
  PoolBalance(
    request: QueryGetPoolBalanceRequest
  ): Promise<QueryGetPoolBalanceResponse>;
  /** Queries a list of PoolBalance items. */
  PoolBalanceAll(
    request: QueryAllPoolBalanceRequest
  ): Promise<QueryAllPoolBalanceResponse>;
  /** Queries a Pubkeys by index. */
  Pubkeys(request: QueryGetPubkeysRequest): Promise<QueryGetPubkeysResponse>;
  /** Queries a list of Pubkeys items. */
  PubkeysAll(request: QueryAllPubkeysRequest): Promise<QueryAllPubkeysResponse>;
  /** Queries a Superadmin by index. */
  Superadmin(
    request: QueryGetSuperadminRequest
  ): Promise<QueryGetSuperadminResponse>;
  /** Queries a list of Superadmin items. */
  SuperadminAll(
    request: QueryAllSuperadminRequest
  ): Promise<QueryAllSuperadminResponse>;
  /** Queries a TransactionData by index. */
  TransactionData(
    request: QueryGetTransactionDataRequest
  ): Promise<QueryGetTransactionDataResponse>;
  /** Queries a list of TransactionData items. */
  TransactionDataAll(
    request: QueryAllTransactionDataRequest
  ): Promise<QueryAllTransactionDataResponse>;
  /** Queries a WhitelistedNode by index. */
  WhitelistedNode(
    request: QueryGetWhitelistedNodeRequest
  ): Promise<QueryGetWhitelistedNodeResponse>;
  /** Queries a list of WhitelistedNode items. */
  WhitelistedNodeAll(
    request: QueryAllWhitelistedNodeRequest
  ): Promise<QueryAllWhitelistedNodeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  FeeBalance(
    request: QueryGetFeeBalanceRequest
  ): Promise<QueryGetFeeBalanceResponse> {
    const data = QueryGetFeeBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "FeeBalance",
      data
    );
    return promise.then((data) =>
      QueryGetFeeBalanceResponse.decode(new Reader(data))
    );
  }

  FeeBalanceAll(
    request: QueryAllFeeBalanceRequest
  ): Promise<QueryAllFeeBalanceResponse> {
    const data = QueryAllFeeBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "FeeBalanceAll",
      data
    );
    return promise.then((data) =>
      QueryAllFeeBalanceResponse.decode(new Reader(data))
    );
  }

  KeysignVoteData(
    request: QueryGetKeysignVoteDataRequest
  ): Promise<QueryGetKeysignVoteDataResponse> {
    const data = QueryGetKeysignVoteDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "KeysignVoteData",
      data
    );
    return promise.then((data) =>
      QueryGetKeysignVoteDataResponse.decode(new Reader(data))
    );
  }

  KeysignVoteDataAll(
    request: QueryAllKeysignVoteDataRequest
  ): Promise<QueryAllKeysignVoteDataResponse> {
    const data = QueryAllKeysignVoteDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "KeysignVoteDataAll",
      data
    );
    return promise.then((data) =>
      QueryAllKeysignVoteDataResponse.decode(new Reader(data))
    );
  }

  ObserveVote(
    request: QueryGetObserveVoteRequest
  ): Promise<QueryGetObserveVoteResponse> {
    const data = QueryGetObserveVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "ObserveVote",
      data
    );
    return promise.then((data) =>
      QueryGetObserveVoteResponse.decode(new Reader(data))
    );
  }

  ObserveVoteAll(
    request: QueryAllObserveVoteRequest
  ): Promise<QueryAllObserveVoteResponse> {
    const data = QueryAllObserveVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "ObserveVoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllObserveVoteResponse.decode(new Reader(data))
    );
  }

  PoolBalance(
    request: QueryGetPoolBalanceRequest
  ): Promise<QueryGetPoolBalanceResponse> {
    const data = QueryGetPoolBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "PoolBalance",
      data
    );
    return promise.then((data) =>
      QueryGetPoolBalanceResponse.decode(new Reader(data))
    );
  }

  PoolBalanceAll(
    request: QueryAllPoolBalanceRequest
  ): Promise<QueryAllPoolBalanceResponse> {
    const data = QueryAllPoolBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "PoolBalanceAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolBalanceResponse.decode(new Reader(data))
    );
  }

  Pubkeys(request: QueryGetPubkeysRequest): Promise<QueryGetPubkeysResponse> {
    const data = QueryGetPubkeysRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "Pubkeys",
      data
    );
    return promise.then((data) =>
      QueryGetPubkeysResponse.decode(new Reader(data))
    );
  }

  PubkeysAll(
    request: QueryAllPubkeysRequest
  ): Promise<QueryAllPubkeysResponse> {
    const data = QueryAllPubkeysRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "PubkeysAll",
      data
    );
    return promise.then((data) =>
      QueryAllPubkeysResponse.decode(new Reader(data))
    );
  }

  Superadmin(
    request: QueryGetSuperadminRequest
  ): Promise<QueryGetSuperadminResponse> {
    const data = QueryGetSuperadminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "Superadmin",
      data
    );
    return promise.then((data) =>
      QueryGetSuperadminResponse.decode(new Reader(data))
    );
  }

  SuperadminAll(
    request: QueryAllSuperadminRequest
  ): Promise<QueryAllSuperadminResponse> {
    const data = QueryAllSuperadminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "SuperadminAll",
      data
    );
    return promise.then((data) =>
      QueryAllSuperadminResponse.decode(new Reader(data))
    );
  }

  TransactionData(
    request: QueryGetTransactionDataRequest
  ): Promise<QueryGetTransactionDataResponse> {
    const data = QueryGetTransactionDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "TransactionData",
      data
    );
    return promise.then((data) =>
      QueryGetTransactionDataResponse.decode(new Reader(data))
    );
  }

  TransactionDataAll(
    request: QueryAllTransactionDataRequest
  ): Promise<QueryAllTransactionDataResponse> {
    const data = QueryAllTransactionDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "TransactionDataAll",
      data
    );
    return promise.then((data) =>
      QueryAllTransactionDataResponse.decode(new Reader(data))
    );
  }

  WhitelistedNode(
    request: QueryGetWhitelistedNodeRequest
  ): Promise<QueryGetWhitelistedNodeResponse> {
    const data = QueryGetWhitelistedNodeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "WhitelistedNode",
      data
    );
    return promise.then((data) =>
      QueryGetWhitelistedNodeResponse.decode(new Reader(data))
    );
  }

  WhitelistedNodeAll(
    request: QueryAllWhitelistedNodeRequest
  ): Promise<QueryAllWhitelistedNodeResponse> {
    const data = QueryAllWhitelistedNodeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "humansdotai.humans.humans.Query",
      "WhitelistedNodeAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhitelistedNodeResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
