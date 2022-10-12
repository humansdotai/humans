package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdTransferPoolcoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer-poolcoin [addr] [pool] [amt]",
		Short: "Broadcast message transfer-poolcoin",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAddr := args[0]
			argPool := args[1]
			argAmt := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgTransferPoolcoin(
				clientCtx.GetFromAddress().String(),
				argAddr,
				argPool,
				argAmt,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
