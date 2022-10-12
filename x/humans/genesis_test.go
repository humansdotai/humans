package humans_test

import (
	"testing"

	keepertest "github.com/humansdotai/humans/testutil/keeper"
	"github.com/humansdotai/humans/testutil/nullify"
	"github.com/humansdotai/humans/x/humans"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		FeeBalanceList: []types.FeeBalance{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		KeysignVoteDataList: []types.KeysignVoteData{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		ObserveVoteList: []types.ObserveVote{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		PoolBalanceList: []types.PoolBalance{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		PubkeysList: []types.Pubkeys{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		SuperadminList: []types.Superadmin{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		TransactionDataList: []types.TransactionData{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		WhitelistedNodeList: []types.WhitelistedNode{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.HumansKeeper(t)
	humans.InitGenesis(ctx, *k, genesisState)
	got := humans.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.FeeBalanceList, got.FeeBalanceList)
	require.ElementsMatch(t, genesisState.KeysignVoteDataList, got.KeysignVoteDataList)
	require.ElementsMatch(t, genesisState.ObserveVoteList, got.ObserveVoteList)
	require.ElementsMatch(t, genesisState.PoolBalanceList, got.PoolBalanceList)
	require.ElementsMatch(t, genesisState.PubkeysList, got.PubkeysList)
	require.ElementsMatch(t, genesisState.SuperadminList, got.SuperadminList)
	require.ElementsMatch(t, genesisState.TransactionDataList, got.TransactionDataList)
	require.ElementsMatch(t, genesisState.WhitelistedNodeList, got.WhitelistedNodeList)
	// this line is used by starport scaffolding # genesis/test/assert
}
