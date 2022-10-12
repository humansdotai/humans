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

func createNPubkeys(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Pubkeys {
	items := make([]types.Pubkeys, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetPubkeys(ctx, items[i])
	}
	return items
}

func TestPubkeysGet(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNPubkeys(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPubkeys(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPubkeysRemove(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNPubkeys(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePubkeys(ctx,
			item.Index,
		)
		_, found := keeper.GetPubkeys(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestPubkeysGetAll(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	items := createNPubkeys(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPubkeys(ctx)),
	)
}
