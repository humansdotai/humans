package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/humansdotai/humans/x/humans/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) WhitelistedNodeAll(c context.Context, req *types.QueryAllWhitelistedNodeRequest) (*types.QueryAllWhitelistedNodeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var whitelistedNodes []types.WhitelistedNode
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	whitelistedNodeStore := prefix.NewStore(store, types.KeyPrefix(types.WhitelistedNodeKeyPrefix))

	pageRes, err := query.Paginate(whitelistedNodeStore, req.Pagination, func(key []byte, value []byte) error {
		var whitelistedNode types.WhitelistedNode
		if err := k.cdc.Unmarshal(value, &whitelistedNode); err != nil {
			return err
		}

		whitelistedNodes = append(whitelistedNodes, whitelistedNode)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWhitelistedNodeResponse{WhitelistedNode: whitelistedNodes, Pagination: pageRes}, nil
}

func (k Keeper) WhitelistedNode(c context.Context, req *types.QueryGetWhitelistedNodeRequest) (*types.QueryGetWhitelistedNodeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetWhitelistedNode(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetWhitelistedNodeResponse{WhitelistedNode: val}, nil
}
