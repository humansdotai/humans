package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/humansdotai/humans/x/humans/types"
)

// SetPubkeys set a specific pubkeys in the store from its index
func (k Keeper) SetPubkeys(ctx sdk.Context, pubkeys types.Pubkeys) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PubkeysKeyPrefix))
	b := k.cdc.MustMarshal(&pubkeys)
	store.Set(types.PubkeysKey(
		pubkeys.Index,
	), b)
}

// GetPubkeys returns a pubkeys from its index
func (k Keeper) GetPubkeys(
	ctx sdk.Context,
	index string,

) (val types.Pubkeys, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PubkeysKeyPrefix))

	b := store.Get(types.PubkeysKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePubkeys removes a pubkeys from the store
func (k Keeper) RemovePubkeys(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PubkeysKeyPrefix))
	store.Delete(types.PubkeysKey(
		index,
	))
}

// GetAllPubkeys returns all pubkeys
func (k Keeper) GetAllPubkeys(ctx sdk.Context) (list []types.Pubkeys) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PubkeysKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pubkeys
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
