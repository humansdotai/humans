package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// WhitelistedNodeKeyPrefix is the prefix to retrieve all WhitelistedNode
	WhitelistedNodeKeyPrefix = "WhitelistedNode/value/"
)

// WhitelistedNodeKey returns the store key to retrieve a WhitelistedNode from the index fields
func WhitelistedNodeKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
