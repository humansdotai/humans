package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/humansdotai/humans/x/humans/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) SetAdmin(goCtx context.Context, msg *types.MsgSetAdmin) (*types.MsgSetAdminResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if super admin already exists
	_, bFound := k.GetSuperadmin(ctx, "super")
	if bFound {
		return &types.MsgSetAdminResponse{Code: "301", Msg: "Already exists!"}, status.Error(codes.AlreadyExists, "Already exists.")
	}

	// Create a new instance of Superadmin
	admin := types.Superadmin{
		Index:   "super",
		Address: msg.Creator,
	}

	// set super admin
	k.SetSuperadmin(ctx, admin)

	// Emits event
	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.EventTypeSuperAdminSet),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Creator),
		),
		sdk.NewEvent(
			types.EventTypeSuperAdminSet,
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Creator),
		),
	})

	return &types.MsgSetAdminResponse{Code: "200", Msg: "Successfully set"}, nil
}
