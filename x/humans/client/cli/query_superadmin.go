package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/humansdotai/humans/x/humans/types"
	"github.com/spf13/cobra"
)

func CmdListSuperadmin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-superadmin",
		Short: "list all superadmin",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSuperadminRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SuperadminAll(context.Background(), params)
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

func CmdShowSuperadmin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-superadmin [index]",
		Short: "shows a superadmin",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetSuperadminRequest{
				Index: argIndex,
			}

			res, err := queryClient.Superadmin(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
