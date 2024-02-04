import React, { useContext } from "react";
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../util/Connectors';
import { ModalContext } from "../../util/context/ModalContext";

function ConnectWallet() {
    const { active, activate, deactivate } = useWeb3React();
    const { handleModalOpen, setModalContent } = useContext(ModalContext);

    function handleConnect() {
        handleModalOpen();
        setModalContent(
            "Please select a wallet to connect",
        );
    }

    return (
      <button 
        className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-gray-200 font-bold py-2 px-4 rounded-xl whitespace-nowrap"
        onClick={ () => handleConnect() }>
          { active ? "Disconnect Wallet" 
                   : "Connect Wallet" }
      </button>
    )
}

export default ConnectWallet;