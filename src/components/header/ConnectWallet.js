import React from "react";
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../util/Connectors';

function ConnectWallet() {
    const { active, activate, deactivate } = useWeb3React();
    return (
        <button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-gray-200 font-bold py-2 px-4 rounded-xl whitespace-nowrap"
          onClick={() => { active ? deactivate( connectors.Injected ) 
                                  : activate( connectors.Injected ) }}>
            { active ? "Disconnect Wallet" 
                    : "Connect Wallet" }
        </button>
    )
}

export default ConnectWallet;