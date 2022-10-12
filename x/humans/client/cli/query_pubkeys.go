package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/spf13/cobra"
)

func CmdListPubkeys() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-pubkeys",
		Short: "list all pubkeys",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPubkeysRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PubkeysAll(context.Background(), params)
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

func CmdShowPubkeys() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-pubkeys [index]",
		Short: "shows a pubkeys",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetPubkeysRequest{
				Index: argIndex,
			}

			res, err := queryClient.Pubkeys(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
