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

func (k Keeper) SuperadminAll(c context.Context, req *types.QueryAllSuperadminRequest) (*types.QueryAllSuperadminResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var superadmins []types.Superadmin
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	superadminStore := prefix.NewStore(store, types.KeyPrefix(types.SuperadminKeyPrefix))

	pageRes, err := query.Paginate(superadminStore, req.Pagination, func(key []byte, value []byte) error {
		var superadmin types.Superadmin
		if err := k.cdc.Unmarshal(value, &superadmin); err != nil {
			return err
		}

		superadmins = append(superadmins, superadmin)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSuperadminResponse{Superadmin: superadmins, Pagination: pageRes}, nil
}

func (k Keeper) Superadmin(c context.Context, req *types.QueryGetSuperadminRequest) (*types.QueryGetSuperadminResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSuperadmin(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSuperadminResponse{Superadmin: val}, nil
}
