package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddWhitelisted = "add_whitelisted"

var _ sdk.Msg = &MsgAddWhitelisted{}

func NewMsgAddWhitelisted(creator string, address string) *MsgAddWhitelisted {
	return &MsgAddWhitelisted{
		Creator: creator,
		Address: address,
	}
}

func (msg *MsgAddWhitelisted) Route() string {
	return RouterKey
}

func (msg *MsgAddWhitelisted) Type() string {
	return TypeMsgAddWhitelisted
}

func (msg *MsgAddWhitelisted) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddWhitelisted) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddWhitelisted) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
