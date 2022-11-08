package keeper_test

import (
	"testing"

	testkeeper "github.com/humansdotai/humans/testutil/keeper"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HumansKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
