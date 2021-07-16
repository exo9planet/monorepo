/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFulfillInterpreter,
  IFulfillInterpreterInterface,
} from "../IFulfillInterpreter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "callTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "fallbackAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IFulfillInterpreter__factory {
  static readonly abi = _abi;
  static createInterface(): IFulfillInterpreterInterface {
    return new utils.Interface(_abi) as IFulfillInterpreterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFulfillInterpreter {
    return new Contract(address, _abi, signerOrProvider) as IFulfillInterpreter;
  }
}