package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PubkeysKeyPrefix is the prefix to retrieve all Pubkeys
	PubkeysKeyPrefix = "Pubkeys/value/"
)

// PubkeysKey returns the store key to retrieve a Pubkeys from the index fields
func PubkeysKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
