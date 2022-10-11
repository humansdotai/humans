package keeper

import (
	"github.com/humansdotai/humans/x/humans/types"
)

var _ types.QueryServer = Keeper{}
