/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface HumansFeeBalance {
  index?: string;
  chainName?: string;
  balance?: string;
  decimal?: string;
}

export interface HumansKeysignVoteData {
  index?: string;
  txHash?: string;
  pubKey?: string;
  voter?: string;
  txTime?: string;
}

export interface HumansMsgAddWhitelistedResponse {
  code?: string;
  msg?: string;
}

export interface HumansMsgApproveTransactionResponse {
  code?: string;
  msg?: string;
}

export interface HumansMsgKeysignVoteResponse {
  code?: string;
  msg?: string;
}

export interface HumansMsgObservationVoteResponse {
  code?: string;
  msg?: string;
}

export interface HumansMsgRequestTransactionResponse {
  code?: string;
  msg?: string;
}

export interface HumansMsgSetAdminResponse {
  code?: string;
  msg?: string;
}

export interface HumansMsgTransferPoolcoinResponse {
  code?: string;
  msg?: string;
}

export interface HumansMsgUpdateBalanceResponse {
  code?: string;
  msg?: string;
}

export interface HumansObserveVote {
  index?: string;
  creator?: string;
  txhash?: string;
  from?: string;
  to?: string;
  amount?: string;
  txtime?: string;
  chainId?: string;
  used?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type HumansParams = object;

export interface HumansPoolBalance {
  index?: string;
  chainName?: string;
  balance?: string;
  decimal?: string;
}

export interface HumansPubkeys {
  index?: string;
  moniker?: string;
  pubkey?: string;
  issigner?: string;
  timeat?: string;
}

export interface HumansQueryAllFeeBalanceResponse {
  feeBalance?: HumansFeeBalance[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryAllKeysignVoteDataResponse {
  keysignVoteData?: HumansKeysignVoteData[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryAllObserveVoteResponse {
  observeVote?: HumansObserveVote[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryAllPoolBalanceResponse {
  poolBalance?: HumansPoolBalance[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryAllPubkeysResponse {
  pubkeys?: HumansPubkeys[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryAllSuperadminResponse {
  superadmin?: HumansSuperadmin[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryAllTransactionDataResponse {
  transactionData?: HumansTransactionData[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryAllWhitelistedNodeResponse {
  whitelistedNode?: HumansWhitelistedNode[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface HumansQueryGetFeeBalanceResponse {
  feeBalance?: HumansFeeBalance;
}

export interface HumansQueryGetKeysignVoteDataResponse {
  keysignVoteData?: HumansKeysignVoteData;
}

export interface HumansQueryGetObserveVoteResponse {
  observeVote?: HumansObserveVote;
}

export interface HumansQueryGetPoolBalanceResponse {
  poolBalance?: HumansPoolBalance;
}

export interface HumansQueryGetPubkeysResponse {
  pubkeys?: HumansPubkeys;
}

export interface HumansQueryGetSuperadminResponse {
  superadmin?: HumansSuperadmin;
}

export interface HumansQueryGetTransactionDataResponse {
  transactionData?: HumansTransactionData;
}

export interface HumansQueryGetWhitelistedNodeResponse {
  whitelistedNode?: HumansWhitelistedNode;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface HumansQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: HumansParams;
}

export interface HumansSuperadmin {
  index?: string;
  address?: string;
}

export interface HumansTransactionData {
  index?: string;
  originChain?: string;
  originAddress?: string;
  targetChain?: string;
  targetAddress?: string;
  amount?: string;
  time?: string;
  creator?: string;
  status?: string;
  confirmedBlockHash?: string;
  signedKey?: string;
  fee?: string;
}

export interface HumansWhitelistedNode {
  index?: string;
  nodeaddr?: string;
  walletaddr?: string;
  pubkey?: string;
  fee?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title humans/fee_balance.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryFeeBalanceAll
   * @summary Queries a list of FeeBalance items.
   * @request GET:/humansdotai/humans/humans/fee_balance
   */
  queryFeeBalanceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllFeeBalanceResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/fee_balance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFeeBalance
   * @summary Queries a FeeBalance by index.
   * @request GET:/humansdotai/humans/humans/fee_balance/{index}
   */
  queryFeeBalance = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetFeeBalanceResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/fee_balance/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKeysignVoteDataAll
   * @summary Queries a list of KeysignVoteData items.
   * @request GET:/humansdotai/humans/humans/keysign_vote_data
   */
  queryKeysignVoteDataAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllKeysignVoteDataResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/keysign_vote_data`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKeysignVoteData
   * @summary Queries a KeysignVoteData by index.
   * @request GET:/humansdotai/humans/humans/keysign_vote_data/{index}
   */
  queryKeysignVoteData = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetKeysignVoteDataResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/keysign_vote_data/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryObserveVoteAll
   * @summary Queries a list of ObserveVote items.
   * @request GET:/humansdotai/humans/humans/observe_vote
   */
  queryObserveVoteAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllObserveVoteResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/observe_vote`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryObserveVote
   * @summary Queries a ObserveVote by index.
   * @request GET:/humansdotai/humans/humans/observe_vote/{index}
   */
  queryObserveVote = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetObserveVoteResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/observe_vote/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/humansdotai/humans/humans/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<HumansQueryParamsResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolBalanceAll
   * @summary Queries a list of PoolBalance items.
   * @request GET:/humansdotai/humans/humans/pool_balance
   */
  queryPoolBalanceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllPoolBalanceResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/pool_balance`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPoolBalance
   * @summary Queries a PoolBalance by index.
   * @request GET:/humansdotai/humans/humans/pool_balance/{index}
   */
  queryPoolBalance = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetPoolBalanceResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/pool_balance/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPubkeysAll
   * @summary Queries a list of Pubkeys items.
   * @request GET:/humansdotai/humans/humans/pubkeys
   */
  queryPubkeysAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllPubkeysResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/pubkeys`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPubkeys
   * @summary Queries a Pubkeys by index.
   * @request GET:/humansdotai/humans/humans/pubkeys/{index}
   */
  queryPubkeys = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetPubkeysResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/pubkeys/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySuperadminAll
   * @summary Queries a list of Superadmin items.
   * @request GET:/humansdotai/humans/humans/superadmin
   */
  querySuperadminAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllSuperadminResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/superadmin`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySuperadmin
   * @summary Queries a Superadmin by index.
   * @request GET:/humansdotai/humans/humans/superadmin/{index}
   */
  querySuperadmin = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetSuperadminResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/superadmin/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTransactionDataAll
   * @summary Queries a list of TransactionData items.
   * @request GET:/humansdotai/humans/humans/transaction_data
   */
  queryTransactionDataAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllTransactionDataResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/transaction_data`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTransactionData
   * @summary Queries a TransactionData by index.
   * @request GET:/humansdotai/humans/humans/transaction_data/{index}
   */
  queryTransactionData = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetTransactionDataResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/transaction_data/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWhitelistedNodeAll
   * @summary Queries a list of WhitelistedNode items.
   * @request GET:/humansdotai/humans/humans/whitelisted_node
   */
  queryWhitelistedNodeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HumansQueryAllWhitelistedNodeResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/whitelisted_node`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWhitelistedNode
   * @summary Queries a WhitelistedNode by index.
   * @request GET:/humansdotai/humans/humans/whitelisted_node/{index}
   */
  queryWhitelistedNode = (index: string, params: RequestParams = {}) =>
    this.request<HumansQueryGetWhitelistedNodeResponse, RpcStatus>({
      path: `/humansdotai/humans/humans/whitelisted_node/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
