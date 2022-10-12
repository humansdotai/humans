package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTransferPoolcoin = "transfer_poolcoin"

var _ sdk.Msg = &MsgTransferPoolcoin{}

func NewMsgTransferPoolcoin(creator string, addr string, pool string, amt string) *MsgTransferPoolcoin {
	return &MsgTransferPoolcoin{
		Creator: creator,
		Addr:    addr,
		Pool:    pool,
		Amt:     amt,
	}
}

func (msg *MsgTransferPoolcoin) Route() string {
	return RouterKey
}

func (msg *MsgTransferPoolcoin) Type() string {
	return TypeMsgTransferPoolcoin
}

func (msg *MsgTransferPoolcoin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTransferPoolcoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTransferPoolcoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
