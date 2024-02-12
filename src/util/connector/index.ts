import { Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import { MetaMask, useMetaMask, 
    Coinbase, useCoinbase, 
    WalletConnect, useWalletConnect } from './Connectors'

export const connectors: [Connector, Web3ReactHooks][] = [
    [MetaMask, useMetaMask],
    [Coinbase, useCoinbase],
    [WalletConnect, useWalletConnect]
]

export const connectorsMap: { [key: string]: Connector } = {
    MetaMask: MetaMask,
    Coinbase: Coinbase,
    WalletConnect: WalletConnect
}