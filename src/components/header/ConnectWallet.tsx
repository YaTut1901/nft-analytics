import React, { useContext } from "react";
import { useWeb3React } from '@web3-react/core';
import { ModalContext } from "../../util/context/ModalContext";
import ConnectorButton from "../../util/connector/ConnectorButton";
import SupportedConnectors from "../../util/connector/supportedConnectors";

function ConnectWallet(): React.JSX.Element {
  const { isActive, connector } = useWeb3React();
  const { handleModalOpen, setModalContent } = useContext(ModalContext);

  function handleConnect() {
    handleModalOpen();
    setModalContent(
      <div className="flex flex-col gap-6">
        <h1 className="w-full flex justify-center font-extrabold text-2xl">Connect Your Wallet</h1>
        <ConnectorButton name={SupportedConnectors.MetaMask} />
        <ConnectorButton name={SupportedConnectors.Coinbase} />
        <ConnectorButton name={SupportedConnectors.WalletConnect} />
      </div>
    );
  }

  function handleDisconnect() {
    connector.activate({}, false)
    localStorage.removeItem('wallet');
    window.location.reload();
  }

  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-gray-200 font-bold py-2 px-4 rounded-xl whitespace-nowrap"
      onClick={() => isActive ? handleDisconnect()
        : handleConnect()}>
      {isActive ? "Disconnect Wallet"
        : "Connect Wallet"}
    </button>
  )
}

export default ConnectWallet;