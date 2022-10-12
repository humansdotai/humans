package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/spf13/cobra"
)

func CmdListKeysignVoteData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-keysign-vote-data",
		Short: "list all keysign-vote-data",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllKeysignVoteDataRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.KeysignVoteDataAll(context.Background(), params)
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

func CmdShowKeysignVoteData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-keysign-vote-data [index]",
		Short: "shows a keysign-vote-data",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetKeysignVoteDataRequest{
				Index: argIndex,
			}

			res, err := queryClient.KeysignVoteData(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
