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

func (k Keeper) PubkeysAll(c context.Context, req *types.QueryAllPubkeysRequest) (*types.QueryAllPubkeysResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var pubkeyss []types.Pubkeys
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	pubkeysStore := prefix.NewStore(store, types.KeyPrefix(types.PubkeysKeyPrefix))

	pageRes, err := query.Paginate(pubkeysStore, req.Pagination, func(key []byte, value []byte) error {
		var pubkeys types.Pubkeys
		if err := k.cdc.Unmarshal(value, &pubkeys); err != nil {
			return err
		}

		pubkeyss = append(pubkeyss, pubkeys)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPubkeysResponse{Pubkeys: pubkeyss, Pagination: pageRes}, nil
}

func (k Keeper) Pubkeys(c context.Context, req *types.QueryGetPubkeysRequest) (*types.QueryGetPubkeysResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPubkeys(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetPubkeysResponse{Pubkeys: val}, nil
}
