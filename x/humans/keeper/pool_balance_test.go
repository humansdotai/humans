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

func createNPoolBalance(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.PoolBalance {
	items := make([]types.PoolBalance, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetPoolBalance(ctx, items[i])
	}
	return items
}

func TestPoolBalanceGet(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNPoolBalance(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPoolBalance(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPoolBalanceRemove(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNPoolBalance(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePoolBalance(ctx,
			item.Index,
		)
		_, found := keeper.GetPoolBalance(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestPoolBalanceGetAll(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNPoolBalance(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPoolBalance(ctx)),
	)
}
