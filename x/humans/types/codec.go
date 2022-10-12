package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRequestTransaction{}, "humans/RequestTransaction", nil)
	cdc.RegisterConcrete(&MsgObservationVote{}, "humans/ObservationVote", nil)
	cdc.RegisterConcrete(&MsgUpdateBalance{}, "humans/UpdateBalance", nil)
	cdc.RegisterConcrete(&MsgApproveTransaction{}, "humans/ApproveTransaction", nil)
	cdc.RegisterConcrete(&MsgTransferPoolcoin{}, "humans/TransferPoolcoin", nil)
	cdc.RegisterConcrete(&MsgAddWhitelisted{}, "humans/AddWhitelisted", nil)
	cdc.RegisterConcrete(&MsgSetAdmin{}, "humans/SetAdmin", nil)
	cdc.RegisterConcrete(&MsgKeysignVote{}, "humans/KeysignVote", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRequestTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgObservationVote{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateBalance{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApproveTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgTransferPoolcoin{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddWhitelisted{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetAdmin{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgKeysignVote{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
