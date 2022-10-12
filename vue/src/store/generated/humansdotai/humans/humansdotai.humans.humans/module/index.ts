// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgTransferPoolcoin } from "./types/humans/tx";
import { MsgRequestTransaction } from "./types/humans/tx";
import { MsgApproveTransaction } from "./types/humans/tx";
import { MsgKeysignVote } from "./types/humans/tx";
import { MsgUpdateBalance } from "./types/humans/tx";
import { MsgAddWhitelisted } from "./types/humans/tx";
import { MsgObservationVote } from "./types/humans/tx";
import { MsgSetAdmin } from "./types/humans/tx";


const types = [
  ["/humansdotai.humans.humans.MsgTransferPoolcoin", MsgTransferPoolcoin],
  ["/humansdotai.humans.humans.MsgRequestTransaction", MsgRequestTransaction],
  ["/humansdotai.humans.humans.MsgApproveTransaction", MsgApproveTransaction],
  ["/humansdotai.humans.humans.MsgKeysignVote", MsgKeysignVote],
  ["/humansdotai.humans.humans.MsgUpdateBalance", MsgUpdateBalance],
  ["/humansdotai.humans.humans.MsgAddWhitelisted", MsgAddWhitelisted],
  ["/humansdotai.humans.humans.MsgObservationVote", MsgObservationVote],
  ["/humansdotai.humans.humans.MsgSetAdmin", MsgSetAdmin],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgTransferPoolcoin: (data: MsgTransferPoolcoin): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgTransferPoolcoin", value: MsgTransferPoolcoin.fromPartial( data ) }),
    msgRequestTransaction: (data: MsgRequestTransaction): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgRequestTransaction", value: MsgRequestTransaction.fromPartial( data ) }),
    msgApproveTransaction: (data: MsgApproveTransaction): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgApproveTransaction", value: MsgApproveTransaction.fromPartial( data ) }),
    msgKeysignVote: (data: MsgKeysignVote): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgKeysignVote", value: MsgKeysignVote.fromPartial( data ) }),
    msgUpdateBalance: (data: MsgUpdateBalance): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgUpdateBalance", value: MsgUpdateBalance.fromPartial( data ) }),
    msgAddWhitelisted: (data: MsgAddWhitelisted): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgAddWhitelisted", value: MsgAddWhitelisted.fromPartial( data ) }),
    msgObservationVote: (data: MsgObservationVote): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgObservationVote", value: MsgObservationVote.fromPartial( data ) }),
    msgSetAdmin: (data: MsgSetAdmin): EncodeObject => ({ typeUrl: "/humansdotai.humans.humans.MsgSetAdmin", value: MsgSetAdmin.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
