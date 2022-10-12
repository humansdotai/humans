package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/humansdotai/humans/x/humans/types"
)

// SetWhitelistedNode set a specific whitelistedNode in the store from its index
func (k Keeper) SetWhitelistedNode(ctx sdk.Context, whitelistedNode types.WhitelistedNode) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistedNodeKeyPrefix))
	b := k.cdc.MustMarshal(&whitelistedNode)
	store.Set(types.WhitelistedNodeKey(
		whitelistedNode.Index,
	), b)
}

// GetWhitelistedNode returns a whitelistedNode from its index
func (k Keeper) GetWhitelistedNode(
	ctx sdk.Context,
	index string,

) (val types.WhitelistedNode, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistedNodeKeyPrefix))

	b := store.Get(types.WhitelistedNodeKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWhitelistedNode removes a whitelistedNode from the store
func (k Keeper) RemoveWhitelistedNode(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistedNodeKeyPrefix))
	store.Delete(types.WhitelistedNodeKey(
		index,
	))
}

// GetAllWhitelistedNode returns all whitelistedNode
func (k Keeper) GetAllWhitelistedNode(ctx sdk.Context) (list []types.WhitelistedNode) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistedNodeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.WhitelistedNode
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
