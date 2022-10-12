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

func createNSuperadmin(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Superadmin {
	items := make([]types.Superadmin, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetSuperadmin(ctx, items[i])
	}
	return items
}

func TestSuperadminGet(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNSuperadmin(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSuperadmin(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSuperadminRemove(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNSuperadmin(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSuperadmin(ctx,
			item.Index,
		)
		_, found := keeper.GetSuperadmin(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestSuperadminGetAll(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNSuperadmin(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSuperadmin(ctx)),
	)
}
