import React, { useContext } from "react";
import { useWeb3React } from '@web3-react/core';
import connectors from '../../util/Connectors';
import { ModalContext } from "../../util/context/ModalContext";
import metamask from '../../assets/metamask.svg';

function ConnectWallet() {
    const { active, activate, deactivate, library } = useWeb3React();
    const { handleModalOpen, handleModalClose, setModalContent } = useContext(ModalContext);

    function activateAndClose( connector ) {
      console.log(library);
      activate(connector);
      setTimeout(() => handleModalClose(), 1000)
    }

    function handleConnect() {
        handleModalOpen();
        setModalContent(
          <div className="flex flex-col">
            <h1 className="w-full flex justify-center font-extrabold text-2xl mb-4">Connect Your Wallet</h1>
            <button 
              className="w-full flex justify-center items-center font-bold text-xl hover:bg-slate-200 rounded-lg"
              onClick={ () => activateAndClose(connectors[0]) }
            >
              <img src={ metamask }
                   className="w-20 h-20 mr-2" />
              MetaMask
            </button>
          </div>
        );
    }

    function handleDisconnect() {
        deactivate();
    }

    return (
      <button 
        className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-gray-200 font-bold py-2 px-4 rounded-xl whitespace-nowrap"
        onClick={ () => active ? handleDisconnect() 
                               : handleConnect() }>
          { active ? "Disconnect Wallet" 
                   : "Connect Wallet" }
      </button>
    )
}

export default ConnectWallet;