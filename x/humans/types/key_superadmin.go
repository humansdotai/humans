package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SuperadminKeyPrefix is the prefix to retrieve all Superadmin
	SuperadminKeyPrefix = "Superadmin/value/"
)

// SuperadminKey returns the store key to retrieve a Superadmin from the index fields
func SuperadminKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
