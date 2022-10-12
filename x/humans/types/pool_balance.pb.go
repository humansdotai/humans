// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: humans/pool_balance.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type PoolBalance struct {
	Index     string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	ChainName string `protobuf:"bytes,2,opt,name=chainName,proto3" json:"chainName,omitempty"`
	Balance   string `protobuf:"bytes,3,opt,name=balance,proto3" json:"balance,omitempty"`
	Decimal   string `protobuf:"bytes,4,opt,name=decimal,proto3" json:"decimal,omitempty"`
}

func (m *PoolBalance) Reset()         { *m = PoolBalance{} }
func (m *PoolBalance) String() string { return proto.CompactTextString(m) }
func (*PoolBalance) ProtoMessage()    {}
func (*PoolBalance) Descriptor() ([]byte, []int) {
	return fileDescriptor_3e7c042335b0931e, []int{0}
}
func (m *PoolBalance) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *PoolBalance) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_PoolBalance.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *PoolBalance) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PoolBalance.Merge(m, src)
}
func (m *PoolBalance) XXX_Size() int {
	return m.Size()
}
func (m *PoolBalance) XXX_DiscardUnknown() {
	xxx_messageInfo_PoolBalance.DiscardUnknown(m)
}

var xxx_messageInfo_PoolBalance proto.InternalMessageInfo

func (m *PoolBalance) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *PoolBalance) GetChainName() string {
	if m != nil {
		return m.ChainName
	}
	return ""
}

func (m *PoolBalance) GetBalance() string {
	if m != nil {
		return m.Balance
	}
	return ""
}

func (m *PoolBalance) GetDecimal() string {
	if m != nil {
		return m.Decimal
	}
	return ""
}

func init() {
	proto.RegisterType((*PoolBalance)(nil), "humansdotai.humans.humans.PoolBalance")
}

func init() { proto.RegisterFile("humans/pool_balance.proto", fileDescriptor_3e7c042335b0931e) }

var fileDescriptor_3e7c042335b0931e = []byte{
	// 196 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xcc, 0x28, 0xcd, 0x4d,
	0xcc, 0x2b, 0xd6, 0x2f, 0xc8, 0xcf, 0xcf, 0x89, 0x4f, 0x4a, 0xcc, 0x49, 0xcc, 0x4b, 0x4e, 0xd5,
	0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x82, 0x4a, 0xa5, 0xe4, 0x97, 0x24, 0x66, 0xea, 0x41, 0xd8,
	0x50, 0x4a, 0xa9, 0x94, 0x8b, 0x3b, 0x20, 0x3f, 0x3f, 0xc7, 0x09, 0xa2, 0x5e, 0x48, 0x84, 0x8b,
	0x35, 0x33, 0x2f, 0x25, 0xb5, 0x42, 0x82, 0x51, 0x81, 0x51, 0x83, 0x33, 0x08, 0xc2, 0x11, 0x92,
	0xe1, 0xe2, 0x4c, 0xce, 0x48, 0xcc, 0xcc, 0xf3, 0x4b, 0xcc, 0x4d, 0x95, 0x60, 0x02, 0xcb, 0x20,
	0x04, 0x84, 0x24, 0xb8, 0xd8, 0xa1, 0xd6, 0x49, 0x30, 0x83, 0xe5, 0x60, 0x5c, 0x90, 0x4c, 0x4a,
	0x6a, 0x72, 0x66, 0x6e, 0x62, 0x8e, 0x04, 0x0b, 0x44, 0x06, 0xca, 0x75, 0x72, 0x3b, 0xf1, 0x48,
	0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0,
	0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0x9d, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd,
	0xe4, 0xfc, 0x5c, 0x7d, 0x24, 0x67, 0x43, 0xd9, 0xfa, 0x15, 0x30, 0x46, 0x49, 0x65, 0x41, 0x6a,
	0x71, 0x12, 0x1b, 0xd8, 0x83, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x46, 0xed, 0x14, 0x7a,
	0xfd, 0x00, 0x00, 0x00,
}

func (m *PoolBalance) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PoolBalance) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *PoolBalance) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Decimal) > 0 {
		i -= len(m.Decimal)
		copy(dAtA[i:], m.Decimal)
		i = encodeVarintPoolBalance(dAtA, i, uint64(len(m.Decimal)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Balance) > 0 {
		i -= len(m.Balance)
		copy(dAtA[i:], m.Balance)
		i = encodeVarintPoolBalance(dAtA, i, uint64(len(m.Balance)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ChainName) > 0 {
		i -= len(m.ChainName)
		copy(dAtA[i:], m.ChainName)
		i = encodeVarintPoolBalance(dAtA, i, uint64(len(m.ChainName)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintPoolBalance(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPoolBalance(dAtA []byte, offset int, v uint64) int {
	offset -= sovPoolBalance(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *PoolBalance) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovPoolBalance(uint64(l))
	}
	l = len(m.ChainName)
	if l > 0 {
		n += 1 + l + sovPoolBalance(uint64(l))
	}
	l = len(m.Balance)
	if l > 0 {
		n += 1 + l + sovPoolBalance(uint64(l))
	}
	l = len(m.Decimal)
	if l > 0 {
		n += 1 + l + sovPoolBalance(uint64(l))
	}
	return n
}

func sovPoolBalance(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPoolBalance(x uint64) (n int) {
	return sovPoolBalance(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *PoolBalance) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPoolBalance
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: PoolBalance: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: PoolBalance: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPoolBalance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPoolBalance
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPoolBalance
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChainName", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPoolBalance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPoolBalance
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPoolBalance
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ChainName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Balance", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPoolBalance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPoolBalance
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPoolBalance
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Balance = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Decimal", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPoolBalance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPoolBalance
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPoolBalance
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Decimal = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPoolBalance(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPoolBalance
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPoolBalance(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPoolBalance
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPoolBalance
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPoolBalance
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPoolBalance
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPoolBalance
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPoolBalance
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPoolBalance        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPoolBalance          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPoolBalance = fmt.Errorf("proto: unexpected end of group")
)
