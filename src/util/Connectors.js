import { InjectedConnector } from "@web3-react/injected-connector";

const Injected = new InjectedConnector({
  supportedChainIds: [1],
  forceApprovalPrompt: true
});

const connectors = [
  Injected
];

export default connectors;