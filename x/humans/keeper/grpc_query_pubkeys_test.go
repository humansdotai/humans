package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/humansdotai/humans/testutil/keeper"
	"github.com/humansdotai/humans/testutil/nullify"
	"github.com/humansdotai/humans/x/humans/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestPubkeysQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPubkeys(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPubkeysRequest
		response *types.QueryGetPubkeysResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetPubkeysRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetPubkeysResponse{Pubkeys: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetPubkeysRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetPubkeysResponse{Pubkeys: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetPubkeysRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Pubkeys(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestPubkeysQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.HumansKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPubkeys(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllPubkeysRequest {
		return &types.QueryAllPubkeysRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PubkeysAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Pubkeys), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Pubkeys),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PubkeysAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Pubkeys), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Pubkeys),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.PubkeysAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Pubkeys),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.PubkeysAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
