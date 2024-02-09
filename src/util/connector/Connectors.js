import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const INFURA_KEY = process.env.INFURA_KEY;

const Injected = new InjectedConnector({
  supportedChainIds: [1],
  forceApprovalPrompt: true
});

const MetaMask = new InjectedConnector({
  supportedChainIds: [1],
  forceApprovalPrompt: true
});

const Coinbase = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  appName: "nft-analytics",
  supportedChainIds: [1],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const connectors = {
  Injected: Injected,
  MetaMask: MetaMask,
  Coinbase: Coinbase,
  WalletConnect: WalletConnect
};

export default connectors;