package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	v4 "github.com/humansdotai/humans/x/evm/migrations/v4"
	v5 "github.com/humansdotai/humans/x/evm/migrations/v5"
	"github.com/humansdotai/humans/x/evm/types"
)

// Migrator is a struct for handling in-place store migrations.
type Migrator struct {
	keeper         Keeper
	legacySubspace types.Subspace
}

// NewMigrator returns a new Migrator.
func NewMigrator(keeper Keeper, legacySubspace types.Subspace) Migrator {
	return Migrator{
		keeper:         keeper,
		legacySubspace: legacySubspace,
	}
}

// Migrate3to4 migrates the store from consensus version 3 to 4
func (m Migrator) Migrate3to4(ctx sdk.Context) error {
	return v4.MigrateStore(ctx, m.keeper.storeKey, m.legacySubspace, m.keeper.cdc)
}

// Migrate4to5 migrates the store from consensus version 4 to 5
func (m Migrator) Migrate4to5(ctx sdk.Context) error {
	return v5.MigrateStore(ctx, m.keeper.storeKey, m.keeper.cdc)
}
