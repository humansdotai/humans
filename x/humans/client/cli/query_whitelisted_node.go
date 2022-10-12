package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/spf13/cobra"
)

func CmdListWhitelistedNode() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-whitelisted-node",
		Short: "list all whitelisted-node",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllWhitelistedNodeRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.WhitelistedNodeAll(context.Background(), params)
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

func CmdShowWhitelistedNode() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-whitelisted-node [index]",
		Short: "shows a whitelisted-node",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetWhitelistedNodeRequest{
				Index: argIndex,
			}

			res, err := queryClient.WhitelistedNode(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
