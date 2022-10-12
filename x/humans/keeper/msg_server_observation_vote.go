package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/humansdotai/humans/x/humans/types"
)

func (k msgServer) ObservationVote(goCtx context.Context, msg *types.MsgObservationVote) (*types.MsgObservationVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if it's a valid request.
	if !k.CheckIfValidRequest(ctx, msg.Creator) {
		return &types.MsgObservationVoteResponse{Code: "501", Msg: "Invalid request!"}, sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid request")
	}

	amt, err := strconv.ParseFloat(msg.Amount, 64)
	if err != nil || amt <= 0 {
		return &types.MsgObservationVoteResponse{Code: "501", Msg: "Invalid amount parameter"}, sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid coins (%s)", err)
	}

	n := k.GetObserveTxStoreCount(ctx)
	index := fmt.Sprintf("%d", n+1)

	// Create a new instance of ObserveVote
	transaction := types.ObserveVote{
		Index:   index,
		Creator: msg.Creator,
		Txhash:  msg.TxHash,
		From:    msg.From,
		To:      msg.To,
		Amount:  msg.Amount,
		ChainId: msg.ChainName,
		Used:    "false",
		Txtime:  ctx.BlockTime().UTC().String(),
	}

	// Add new vote data
	k.SetObserveVote(ctx, transaction)

	// Update Requested Vote Count
	k.SetObserveTxStoreCount(ctx, n+1)

	return &types.MsgObservationVoteResponse{Code: "200", Msg: "Operation succeed"}, nil
}
