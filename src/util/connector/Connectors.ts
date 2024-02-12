import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'

const infuraApiKey: string | undefined = process.env.REACT_APP_INFURA_API_KEY;
const infuraUrl: string = `https://mainnet.infura.io/v3/${infuraApiKey}`;

export const [metamask, useMetaMask] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
)

export const [coinbase, useCoinbase] = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: infuraUrl,
        appName: 'nft-analytics',
      },
    })
)