package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/humansdotai/humans/testutil/keeper"
	"github.com/humansdotai/humans/testutil/nullify"
	"github.com/humansdotai/humans/x/humans/keeper"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNKeysignVoteData(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.KeysignVoteData {
	items := make([]types.KeysignVoteData, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetKeysignVoteData(ctx, items[i])
	}
	return items
}

func TestKeysignVoteDataGet(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNKeysignVoteData(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetKeysignVoteData(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestKeysignVoteDataRemove(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNKeysignVoteData(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveKeysignVoteData(ctx,
			item.Index,
		)
		_, found := keeper.GetKeysignVoteData(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestKeysignVoteDataGetAll(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNKeysignVoteData(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllKeysignVoteData(ctx)),
	)
}
