package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/spf13/cobra"
)

func CmdListTransactionData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-transaction-data",
		Short: "list all transaction-data",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllTransactionDataRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.TransactionDataAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowTransactionData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-transaction-data [index]",
		Short: "shows a transaction-data",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetTransactionDataRequest{
				Index: argIndex,
			}

			res, err := queryClient.TransactionData(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
