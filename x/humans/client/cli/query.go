package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/humansdotai/humans/x/humans/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group humans queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListFeeBalance())
	cmd.AddCommand(CmdShowFeeBalance())
	cmd.AddCommand(CmdListKeysignVoteData())
	cmd.AddCommand(CmdShowKeysignVoteData())
	cmd.AddCommand(CmdListObserveVote())
	cmd.AddCommand(CmdShowObserveVote())
	cmd.AddCommand(CmdListPoolBalance())
	cmd.AddCommand(CmdShowPoolBalance())
	cmd.AddCommand(CmdListPubkeys())
	cmd.AddCommand(CmdShowPubkeys())
	cmd.AddCommand(CmdListSuperadmin())
	cmd.AddCommand(CmdShowSuperadmin())
	cmd.AddCommand(CmdListTransactionData())
	cmd.AddCommand(CmdShowTransactionData())
	cmd.AddCommand(CmdListWhitelistedNode())
	cmd.AddCommand(CmdShowWhitelistedNode())
	// this line is used by starport scaffolding # 1

	return cmd
}
