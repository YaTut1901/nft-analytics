import { initializeConnector } from '@web3-react/core'
import { MetaMask as MetaMaskConnector } from '@web3-react/metamask'
import { CoinbaseWallet as CoinbaseConnector } from '@web3-react/coinbase-wallet'
import { WalletConnect as WalletConnectConnector } from '@web3-react/walletconnect-v2'

const infuraApiKey: string | undefined = process.env.REACT_APP_INFURA_API_KEY;
const infuraUrl: string = `https://mainnet.infura.io/v3/${infuraApiKey}`;

export const [MetaMask, useMetaMask] = initializeConnector<MetaMaskConnector>(
  (actions) => new MetaMaskConnector({ actions })
)

export const [Coinbase, useCoinbase] = initializeConnector<CoinbaseConnector>(
  (actions) =>
    new CoinbaseConnector({
      actions,
      options: {
        url: infuraUrl,
        appName: 'nft-analytics',
      },
    })
)

export const [WalletConnect, useWalletConnect] = initializeConnector<WalletConnectConnector>(
  (actions) =>
    new WalletConnectConnector({
      actions,
      options: {
        projectId: "78d7707a88024bdd5c74626d0f8f47a0",
        chains: [1],
        showQrModal: true,
      },
    })
)
