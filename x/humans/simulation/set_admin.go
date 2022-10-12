package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/humansdotai/humans/x/humans/keeper"
	"github.com/humansdotai/humans/x/humans/types"
)

func SimulateMsgSetAdmin(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSetAdmin{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the SetAdmin simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SetAdmin simulation not implemented"), nil, nil
	}
}
