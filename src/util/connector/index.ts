import { Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import { metamask, useMetaMask } from './Connectors'

export const connectors: [Connector, Web3ReactHooks][] = [
    [metamask, useMetaMask]
]

export const connectorsMap: { [key: string]: Connector } = {
    metamask: metamask
}