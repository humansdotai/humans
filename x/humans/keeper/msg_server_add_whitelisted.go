package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/humansdotai/humans/x/humans/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) AddWhitelisted(goCtx context.Context, msg *types.MsgAddWhitelisted) (*types.MsgAddWhitelistedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if super admin already exists
	admin, bFound := k.GetSuperadmin(ctx, "super")
	if !bFound {
		return &types.MsgAddWhitelistedResponse{Code: "301", Msg: "Super admin wasn't set!"}, status.Error(codes.NotFound, "Super admin wasn't set!")
	}

	if msg.Creator != admin.Address {
		return &types.MsgAddWhitelistedResponse{Code: "301", Msg: "Only super admin can call this function!"}, status.Error(codes.PermissionDenied, "Only super admin can call this function!")
	}

	nodes := k.GetAllWhitelistedNode(ctx)

	if len(nodes) >= types.TOTAL_TSS_SINGER {
		return &types.MsgAddWhitelistedResponse{Code: "301", Msg: "Full of TSS nodes!"}, status.Error(codes.OutOfRange, "Full of TSS nodes!")
	}

	// Create a new instance of Superadmin
	node := types.WhitelistedNode{
		Index:      fmt.Sprintf("%d", len(nodes)+1),
		Nodeaddr:   msg.Address,
		Walletaddr: msg.Address,
		Pubkey:     msg.Address,
	}

	// set super admin
	k.SetWhitelistedNode(ctx, node)

	// Emits event
	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.EventTypeWhitelistAdded),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Creator),
		),
		sdk.NewEvent(
			types.EventTypeWhitelistAdded,
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Creator),
		),
	})

	return &types.MsgAddWhitelistedResponse{Code: "200", Msg: "Successfully added"}, nil
}
