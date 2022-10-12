// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package ethPool

import (
	"errors"
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// HumansPoolMetaData contains all meta data concerning the HumansPool contract.
var HumansPoolMetaData = &bind.MetaData{
	ABI: "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"name\":\"SignatureVerified\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokenDeposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokenWithdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"balanceOfToken\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"_e\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"_m\",\"type\":\"bytes\"}],\"name\":\"setPublicKey\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_msg\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"_s\",\"type\":\"bytes\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
}

// HumansPoolABI is the input ABI used to generate the binding from.
// Deprecated: Use HumansPoolMetaData.ABI instead.
var HumansPoolABI = HumansPoolMetaData.ABI

// HumansPool is an auto generated Go binding around an Ethereum contract.
type HumansPool struct {
	HumansPoolCaller     // Read-only binding to the contract
	HumansPoolTransactor // Write-only binding to the contract
	HumansPoolFilterer   // Log filterer for contract events
}

// HumansPoolCaller is an auto generated read-only Go binding around an Ethereum contract.
type HumansPoolCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// HumansPoolTransactor is an auto generated write-only Go binding around an Ethereum contract.
type HumansPoolTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// HumansPoolFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type HumansPoolFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// HumansPoolSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type HumansPoolSession struct {
	Contract     *HumansPool       // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// HumansPoolCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type HumansPoolCallerSession struct {
	Contract *HumansPoolCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts     // Call options to use throughout this session
}

// HumansPoolTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type HumansPoolTransactorSession struct {
	Contract     *HumansPoolTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts     // Transaction auth options to use throughout this session
}

// HumansPoolRaw is an auto generated low-level Go binding around an Ethereum contract.
type HumansPoolRaw struct {
	Contract *HumansPool // Generic contract binding to access the raw methods on
}

// HumansPoolCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type HumansPoolCallerRaw struct {
	Contract *HumansPoolCaller // Generic read-only contract binding to access the raw methods on
}

// HumansPoolTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type HumansPoolTransactorRaw struct {
	Contract *HumansPoolTransactor // Generic write-only contract binding to access the raw methods on
}

// NewHumansPool creates a new instance of HumansPool, bound to a specific deployed contract.
func NewHumansPool(address common.Address, backend bind.ContractBackend) (*HumansPool, error) {
	contract, err := bindHumansPool(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &HumansPool{HumansPoolCaller: HumansPoolCaller{contract: contract}, HumansPoolTransactor: HumansPoolTransactor{contract: contract}, HumansPoolFilterer: HumansPoolFilterer{contract: contract}}, nil
}

// NewHumansPoolCaller creates a new read-only instance of HumansPool, bound to a specific deployed contract.
func NewHumansPoolCaller(address common.Address, caller bind.ContractCaller) (*HumansPoolCaller, error) {
	contract, err := bindHumansPool(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &HumansPoolCaller{contract: contract}, nil
}

// NewHumansPoolTransactor creates a new write-only instance of HumansPool, bound to a specific deployed contract.
func NewHumansPoolTransactor(address common.Address, transactor bind.ContractTransactor) (*HumansPoolTransactor, error) {
	contract, err := bindHumansPool(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &HumansPoolTransactor{contract: contract}, nil
}

// NewHumansPoolFilterer creates a new log filterer instance of HumansPool, bound to a specific deployed contract.
func NewHumansPoolFilterer(address common.Address, filterer bind.ContractFilterer) (*HumansPoolFilterer, error) {
	contract, err := bindHumansPool(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &HumansPoolFilterer{contract: contract}, nil
}

// bindHumansPool binds a generic wrapper to an already deployed contract.
func bindHumansPool(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(HumansPoolABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_HumansPool *HumansPoolRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _HumansPool.Contract.HumansPoolCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_HumansPool *HumansPoolRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _HumansPool.Contract.HumansPoolTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_HumansPool *HumansPoolRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _HumansPool.Contract.HumansPoolTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_HumansPool *HumansPoolCallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _HumansPool.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_HumansPool *HumansPoolTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _HumansPool.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_HumansPool *HumansPoolTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _HumansPool.Contract.contract.Transact(opts, method, params...)
}

// BalanceOfToken is a free data retrieval call binding the contract method 0xf59e38b7.
//
// Solidity: function balanceOfToken(address _token, address addr) view returns(uint256)
func (_HumansPool *HumansPoolCaller) BalanceOfToken(opts *bind.CallOpts, _token common.Address, addr common.Address) (*big.Int, error) {
	var out []interface{}
	err := _HumansPool.contract.Call(opts, &out, "balanceOfToken", _token, addr)

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// BalanceOfToken is a free data retrieval call binding the contract method 0xf59e38b7.
//
// Solidity: function balanceOfToken(address _token, address addr) view returns(uint256)
func (_HumansPool *HumansPoolSession) BalanceOfToken(_token common.Address, addr common.Address) (*big.Int, error) {
	return _HumansPool.Contract.BalanceOfToken(&_HumansPool.CallOpts, _token, addr)
}

// BalanceOfToken is a free data retrieval call binding the contract method 0xf59e38b7.
//
// Solidity: function balanceOfToken(address _token, address addr) view returns(uint256)
func (_HumansPool *HumansPoolCallerSession) BalanceOfToken(_token common.Address, addr common.Address) (*big.Int, error) {
	return _HumansPool.Contract.BalanceOfToken(&_HumansPool.CallOpts, _token, addr)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_HumansPool *HumansPoolCaller) Owner(opts *bind.CallOpts) (common.Address, error) {
	var out []interface{}
	err := _HumansPool.contract.Call(opts, &out, "owner")

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_HumansPool *HumansPoolSession) Owner() (common.Address, error) {
	return _HumansPool.Contract.Owner(&_HumansPool.CallOpts)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_HumansPool *HumansPoolCallerSession) Owner() (common.Address, error) {
	return _HumansPool.Contract.Owner(&_HumansPool.CallOpts)
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_HumansPool *HumansPoolTransactor) RenounceOwnership(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _HumansPool.contract.Transact(opts, "renounceOwnership")
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_HumansPool *HumansPoolSession) RenounceOwnership() (*types.Transaction, error) {
	return _HumansPool.Contract.RenounceOwnership(&_HumansPool.TransactOpts)
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_HumansPool *HumansPoolTransactorSession) RenounceOwnership() (*types.Transaction, error) {
	return _HumansPool.Contract.RenounceOwnership(&_HumansPool.TransactOpts)
}

// SetPublicKey is a paid mutator transaction binding the contract method 0xfd240caf.
//
// Solidity: function setPublicKey(bytes _e, bytes _m) returns()
func (_HumansPool *HumansPoolTransactor) SetPublicKey(opts *bind.TransactOpts, _e []byte, _m []byte) (*types.Transaction, error) {
	return _HumansPool.contract.Transact(opts, "setPublicKey", _e, _m)
}

// SetPublicKey is a paid mutator transaction binding the contract method 0xfd240caf.
//
// Solidity: function setPublicKey(bytes _e, bytes _m) returns()
func (_HumansPool *HumansPoolSession) SetPublicKey(_e []byte, _m []byte) (*types.Transaction, error) {
	return _HumansPool.Contract.SetPublicKey(&_HumansPool.TransactOpts, _e, _m)
}

// SetPublicKey is a paid mutator transaction binding the contract method 0xfd240caf.
//
// Solidity: function setPublicKey(bytes _e, bytes _m) returns()
func (_HumansPool *HumansPoolTransactorSession) SetPublicKey(_e []byte, _m []byte) (*types.Transaction, error) {
	return _HumansPool.Contract.SetPublicKey(&_HumansPool.TransactOpts, _e, _m)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_HumansPool *HumansPoolTransactor) TransferOwnership(opts *bind.TransactOpts, newOwner common.Address) (*types.Transaction, error) {
	return _HumansPool.contract.Transact(opts, "transferOwnership", newOwner)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_HumansPool *HumansPoolSession) TransferOwnership(newOwner common.Address) (*types.Transaction, error) {
	return _HumansPool.Contract.TransferOwnership(&_HumansPool.TransactOpts, newOwner)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_HumansPool *HumansPoolTransactorSession) TransferOwnership(newOwner common.Address) (*types.Transaction, error) {
	return _HumansPool.Contract.TransferOwnership(&_HumansPool.TransactOpts, newOwner)
}

// Withdraw is a paid mutator transaction binding the contract method 0x5c5d9cee.
//
// Solidity: function withdraw(address _token, address _user, uint256 _amount, bytes _msg, bytes _s) returns()
func (_HumansPool *HumansPoolTransactor) Withdraw(opts *bind.TransactOpts, _token common.Address, _user common.Address, _amount *big.Int, _msg []byte, _s []byte) (*types.Transaction, error) {
	return _HumansPool.contract.Transact(opts, "withdraw", _token, _user, _amount, _msg, _s)
}

// Withdraw is a paid mutator transaction binding the contract method 0x5c5d9cee.
//
// Solidity: function withdraw(address _token, address _user, uint256 _amount, bytes _msg, bytes _s) returns()
func (_HumansPool *HumansPoolSession) Withdraw(_token common.Address, _user common.Address, _amount *big.Int, _msg []byte, _s []byte) (*types.Transaction, error) {
	return _HumansPool.Contract.Withdraw(&_HumansPool.TransactOpts, _token, _user, _amount, _msg, _s)
}

// Withdraw is a paid mutator transaction binding the contract method 0x5c5d9cee.
//
// Solidity: function withdraw(address _token, address _user, uint256 _amount, bytes _msg, bytes _s) returns()
func (_HumansPool *HumansPoolTransactorSession) Withdraw(_token common.Address, _user common.Address, _amount *big.Int, _msg []byte, _s []byte) (*types.Transaction, error) {
	return _HumansPool.Contract.Withdraw(&_HumansPool.TransactOpts, _token, _user, _amount, _msg, _s)
}

// HumansPoolOwnershipTransferredIterator is returned from FilterOwnershipTransferred and is used to iterate over the raw logs and unpacked data for OwnershipTransferred events raised by the HumansPool contract.
type HumansPoolOwnershipTransferredIterator struct {
	Event *HumansPoolOwnershipTransferred // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *HumansPoolOwnershipTransferredIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(HumansPoolOwnershipTransferred)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(HumansPoolOwnershipTransferred)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *HumansPoolOwnershipTransferredIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *HumansPoolOwnershipTransferredIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// HumansPoolOwnershipTransferred represents a OwnershipTransferred event raised by the HumansPool contract.
type HumansPoolOwnershipTransferred struct {
	PreviousOwner common.Address
	NewOwner      common.Address
	Raw           types.Log // Blockchain specific contextual infos
}

// FilterOwnershipTransferred is a free log retrieval operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_HumansPool *HumansPoolFilterer) FilterOwnershipTransferred(opts *bind.FilterOpts, previousOwner []common.Address, newOwner []common.Address) (*HumansPoolOwnershipTransferredIterator, error) {

	var previousOwnerRule []interface{}
	for _, previousOwnerItem := range previousOwner {
		previousOwnerRule = append(previousOwnerRule, previousOwnerItem)
	}
	var newOwnerRule []interface{}
	for _, newOwnerItem := range newOwner {
		newOwnerRule = append(newOwnerRule, newOwnerItem)
	}

	logs, sub, err := _HumansPool.contract.FilterLogs(opts, "OwnershipTransferred", previousOwnerRule, newOwnerRule)
	if err != nil {
		return nil, err
	}
	return &HumansPoolOwnershipTransferredIterator{contract: _HumansPool.contract, event: "OwnershipTransferred", logs: logs, sub: sub}, nil
}

// WatchOwnershipTransferred is a free log subscription operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_HumansPool *HumansPoolFilterer) WatchOwnershipTransferred(opts *bind.WatchOpts, sink chan<- *HumansPoolOwnershipTransferred, previousOwner []common.Address, newOwner []common.Address) (event.Subscription, error) {

	var previousOwnerRule []interface{}
	for _, previousOwnerItem := range previousOwner {
		previousOwnerRule = append(previousOwnerRule, previousOwnerItem)
	}
	var newOwnerRule []interface{}
	for _, newOwnerItem := range newOwner {
		newOwnerRule = append(newOwnerRule, newOwnerItem)
	}

	logs, sub, err := _HumansPool.contract.WatchLogs(opts, "OwnershipTransferred", previousOwnerRule, newOwnerRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(HumansPoolOwnershipTransferred)
				if err := _HumansPool.contract.UnpackLog(event, "OwnershipTransferred", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseOwnershipTransferred is a log parse operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_HumansPool *HumansPoolFilterer) ParseOwnershipTransferred(log types.Log) (*HumansPoolOwnershipTransferred, error) {
	event := new(HumansPoolOwnershipTransferred)
	if err := _HumansPool.contract.UnpackLog(event, "OwnershipTransferred", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// HumansPoolSignatureVerifiedIterator is returned from FilterSignatureVerified and is used to iterate over the raw logs and unpacked data for SignatureVerified events raised by the HumansPool contract.
type HumansPoolSignatureVerifiedIterator struct {
	Event *HumansPoolSignatureVerified // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *HumansPoolSignatureVerifiedIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(HumansPoolSignatureVerified)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(HumansPoolSignatureVerified)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *HumansPoolSignatureVerifiedIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *HumansPoolSignatureVerifiedIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// HumansPoolSignatureVerified represents a SignatureVerified event raised by the HumansPool contract.
type HumansPoolSignatureVerified struct {
	Result *big.Int
	Raw    types.Log // Blockchain specific contextual infos
}

// FilterSignatureVerified is a free log retrieval operation binding the contract event 0xc5173095034e9dff162273543bb0ebce2026391d3c1a94d8734accad13b16282.
//
// Solidity: event SignatureVerified(uint256 result)
func (_HumansPool *HumansPoolFilterer) FilterSignatureVerified(opts *bind.FilterOpts) (*HumansPoolSignatureVerifiedIterator, error) {

	logs, sub, err := _HumansPool.contract.FilterLogs(opts, "SignatureVerified")
	if err != nil {
		return nil, err
	}
	return &HumansPoolSignatureVerifiedIterator{contract: _HumansPool.contract, event: "SignatureVerified", logs: logs, sub: sub}, nil
}

// WatchSignatureVerified is a free log subscription operation binding the contract event 0xc5173095034e9dff162273543bb0ebce2026391d3c1a94d8734accad13b16282.
//
// Solidity: event SignatureVerified(uint256 result)
func (_HumansPool *HumansPoolFilterer) WatchSignatureVerified(opts *bind.WatchOpts, sink chan<- *HumansPoolSignatureVerified) (event.Subscription, error) {

	logs, sub, err := _HumansPool.contract.WatchLogs(opts, "SignatureVerified")
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(HumansPoolSignatureVerified)
				if err := _HumansPool.contract.UnpackLog(event, "SignatureVerified", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseSignatureVerified is a log parse operation binding the contract event 0xc5173095034e9dff162273543bb0ebce2026391d3c1a94d8734accad13b16282.
//
// Solidity: event SignatureVerified(uint256 result)
func (_HumansPool *HumansPoolFilterer) ParseSignatureVerified(log types.Log) (*HumansPoolSignatureVerified, error) {
	event := new(HumansPoolSignatureVerified)
	if err := _HumansPool.contract.UnpackLog(event, "SignatureVerified", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// HumansPoolTokenDepositIterator is returned from FilterTokenDeposit and is used to iterate over the raw logs and unpacked data for TokenDeposit events raised by the HumansPool contract.
type HumansPoolTokenDepositIterator struct {
	Event *HumansPoolTokenDeposit // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *HumansPoolTokenDepositIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(HumansPoolTokenDeposit)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(HumansPoolTokenDeposit)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *HumansPoolTokenDepositIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *HumansPoolTokenDepositIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// HumansPoolTokenDeposit represents a TokenDeposit event raised by the HumansPool contract.
type HumansPoolTokenDeposit struct {
	Owner  common.Address
	Token  common.Address
	Amount *big.Int
	Raw    types.Log // Blockchain specific contextual infos
}

// FilterTokenDeposit is a free log retrieval operation binding the contract event 0x98c09d9949722bae4bd0d988d4050091c3ae7ec6d51d3c6bbfe4233593944e9e.
//
// Solidity: event TokenDeposit(address indexed owner, address indexed token, uint256 amount)
func (_HumansPool *HumansPoolFilterer) FilterTokenDeposit(opts *bind.FilterOpts, owner []common.Address, token []common.Address) (*HumansPoolTokenDepositIterator, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var tokenRule []interface{}
	for _, tokenItem := range token {
		tokenRule = append(tokenRule, tokenItem)
	}

	logs, sub, err := _HumansPool.contract.FilterLogs(opts, "TokenDeposit", ownerRule, tokenRule)
	if err != nil {
		return nil, err
	}
	return &HumansPoolTokenDepositIterator{contract: _HumansPool.contract, event: "TokenDeposit", logs: logs, sub: sub}, nil
}

// WatchTokenDeposit is a free log subscription operation binding the contract event 0x98c09d9949722bae4bd0d988d4050091c3ae7ec6d51d3c6bbfe4233593944e9e.
//
// Solidity: event TokenDeposit(address indexed owner, address indexed token, uint256 amount)
func (_HumansPool *HumansPoolFilterer) WatchTokenDeposit(opts *bind.WatchOpts, sink chan<- *HumansPoolTokenDeposit, owner []common.Address, token []common.Address) (event.Subscription, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var tokenRule []interface{}
	for _, tokenItem := range token {
		tokenRule = append(tokenRule, tokenItem)
	}

	logs, sub, err := _HumansPool.contract.WatchLogs(opts, "TokenDeposit", ownerRule, tokenRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(HumansPoolTokenDeposit)
				if err := _HumansPool.contract.UnpackLog(event, "TokenDeposit", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseTokenDeposit is a log parse operation binding the contract event 0x98c09d9949722bae4bd0d988d4050091c3ae7ec6d51d3c6bbfe4233593944e9e.
//
// Solidity: event TokenDeposit(address indexed owner, address indexed token, uint256 amount)
func (_HumansPool *HumansPoolFilterer) ParseTokenDeposit(log types.Log) (*HumansPoolTokenDeposit, error) {
	event := new(HumansPoolTokenDeposit)
	if err := _HumansPool.contract.UnpackLog(event, "TokenDeposit", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// HumansPoolTokenWithdrawIterator is returned from FilterTokenWithdraw and is used to iterate over the raw logs and unpacked data for TokenWithdraw events raised by the HumansPool contract.
type HumansPoolTokenWithdrawIterator struct {
	Event *HumansPoolTokenWithdraw // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *HumansPoolTokenWithdrawIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(HumansPoolTokenWithdraw)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(HumansPoolTokenWithdraw)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *HumansPoolTokenWithdrawIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *HumansPoolTokenWithdrawIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// HumansPoolTokenWithdraw represents a TokenWithdraw event raised by the HumansPool contract.
type HumansPoolTokenWithdraw struct {
	Owner  common.Address
	Token  common.Address
	Amount *big.Int
	Raw    types.Log // Blockchain specific contextual infos
}

// FilterTokenWithdraw is a free log retrieval operation binding the contract event 0x7b2929a0129e91c002be982e70bea0ff69b1dda1722507dc5b60490b134a985b.
//
// Solidity: event TokenWithdraw(address indexed owner, address indexed token, uint256 amount)
func (_HumansPool *HumansPoolFilterer) FilterTokenWithdraw(opts *bind.FilterOpts, owner []common.Address, token []common.Address) (*HumansPoolTokenWithdrawIterator, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var tokenRule []interface{}
	for _, tokenItem := range token {
		tokenRule = append(tokenRule, tokenItem)
	}

	logs, sub, err := _HumansPool.contract.FilterLogs(opts, "TokenWithdraw", ownerRule, tokenRule)
	if err != nil {
		return nil, err
	}
	return &HumansPoolTokenWithdrawIterator{contract: _HumansPool.contract, event: "TokenWithdraw", logs: logs, sub: sub}, nil
}

// WatchTokenWithdraw is a free log subscription operation binding the contract event 0x7b2929a0129e91c002be982e70bea0ff69b1dda1722507dc5b60490b134a985b.
//
// Solidity: event TokenWithdraw(address indexed owner, address indexed token, uint256 amount)
func (_HumansPool *HumansPoolFilterer) WatchTokenWithdraw(opts *bind.WatchOpts, sink chan<- *HumansPoolTokenWithdraw, owner []common.Address, token []common.Address) (event.Subscription, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var tokenRule []interface{}
	for _, tokenItem := range token {
		tokenRule = append(tokenRule, tokenItem)
	}

	logs, sub, err := _HumansPool.contract.WatchLogs(opts, "TokenWithdraw", ownerRule, tokenRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(HumansPoolTokenWithdraw)
				if err := _HumansPool.contract.UnpackLog(event, "TokenWithdraw", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseTokenWithdraw is a log parse operation binding the contract event 0x7b2929a0129e91c002be982e70bea0ff69b1dda1722507dc5b60490b134a985b.
//
// Solidity: event TokenWithdraw(address indexed owner, address indexed token, uint256 amount)
func (_HumansPool *HumansPoolFilterer) ParseTokenWithdraw(log types.Log) (*HumansPoolTokenWithdraw, error) {
	event := new(HumansPoolTokenWithdraw)
	if err := _HumansPool.contract.UnpackLog(event, "TokenWithdraw", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}
