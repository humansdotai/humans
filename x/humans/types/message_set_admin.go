package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetAdmin = "set_admin"

var _ sdk.Msg = &MsgSetAdmin{}

func NewMsgSetAdmin(creator string) *MsgSetAdmin {
	return &MsgSetAdmin{
		Creator: creator,
	}
}

func (msg *MsgSetAdmin) Route() string {
	return RouterKey
}

func (msg *MsgSetAdmin) Type() string {
	return TypeMsgSetAdmin
}

func (msg *MsgSetAdmin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetAdmin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetAdmin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
