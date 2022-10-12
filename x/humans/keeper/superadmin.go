package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/humansdotai/humans/x/humans/types"
)

// SetSuperadmin set a specific superadmin in the store from its index
func (k Keeper) SetSuperadmin(ctx sdk.Context, superadmin types.Superadmin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SuperadminKeyPrefix))
	b := k.cdc.MustMarshal(&superadmin)
	store.Set(types.SuperadminKey(
		superadmin.Index,
	), b)
}

// GetSuperadmin returns a superadmin from its index
func (k Keeper) GetSuperadmin(
	ctx sdk.Context,
	index string,

) (val types.Superadmin, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SuperadminKeyPrefix))

	b := store.Get(types.SuperadminKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSuperadmin removes a superadmin from the store
func (k Keeper) RemoveSuperadmin(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SuperadminKeyPrefix))
	store.Delete(types.SuperadminKey(
		index,
	))
}

// GetAllSuperadmin returns all superadmin
func (k Keeper) GetAllSuperadmin(ctx sdk.Context) (list []types.Superadmin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SuperadminKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Superadmin
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
