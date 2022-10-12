package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/humansdotai/humans/x/humans/types"
)

func (k msgServer) TransferPoolcoin(goCtx context.Context, msg *types.MsgTransferPoolcoin) (*types.MsgTransferPoolcoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	to, err := sdk.AccAddressFromBech32(msg.Addr)
	if err != nil {
		return &types.MsgTransferPoolcoinResponse{}, sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	amount, err := sdk.ParseCoinsNormalized(msg.Amt)
	if !amount.IsValid() {
		return &types.MsgTransferPoolcoinResponse{}, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "amount is not a valid Coins object")
	}

	pool, _ := sdk.AccAddressFromBech32(msg.Pool)
	err = k.bankKeeper.SendCoins(ctx, pool, to, amount)

	return &types.MsgTransferPoolcoinResponse{}, err
}
