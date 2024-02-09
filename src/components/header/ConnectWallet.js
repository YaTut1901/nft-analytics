import React, { useContext } from "react";
import { useWeb3React } from '@web3-react/core';
import { ModalContext } from "../../util/context/ModalContext";
import { MetamaskButton, WalletConnectButton, CoinbaseButton } from "../../util/connector/ConnectorButtons";

function ConnectWallet() {
  const { active, deactivate } = useWeb3React();
  const { handleModalOpen, setModalContent } = useContext(ModalContext);

  function handleConnect() {
    handleModalOpen();
    setModalContent(
      <div className="flex flex-col gap-6">
        <h1 className="w-full flex justify-center font-extrabold text-2xl">Connect Your Wallet</h1>
        <MetamaskButton />
        <WalletConnectButton />
        <CoinbaseButton />
      </div>
    );
  }

  function handleDisconnect() {
    localStorage.removeItem('wallet');
    deactivate();
  }

  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-gray-200 font-bold py-2 px-4 rounded-xl whitespace-nowrap"
      onClick={() => active ? handleDisconnect()
        : handleConnect()}>
      {active ? "Disconnect Wallet"
        : "Connect Wallet"}
    </button>
  )
}

export default ConnectWallet;