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

func createNWhitelistedNode(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.WhitelistedNode {
	items := make([]types.WhitelistedNode, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetWhitelistedNode(ctx, items[i])
	}
	return items
}

func TestWhitelistedNodeGet(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNWhitelistedNode(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetWhitelistedNode(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestWhitelistedNodeRemove(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNWhitelistedNode(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWhitelistedNode(ctx,
			item.Index,
		)
		_, found := keeper.GetWhitelistedNode(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestWhitelistedNodeGetAll(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNWhitelistedNode(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWhitelistedNode(ctx)),
	)
}
