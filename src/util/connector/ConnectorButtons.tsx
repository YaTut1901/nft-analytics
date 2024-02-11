import { useContext } from 'react';
import { metamask as metaMaskConnector } from './Connectors';
import { metamask } from '../../assets';
import { ModalContext } from '../context/ModalContext';

const buttonStyle = "group overflow-hidden w-full flex justify-center px-6 items-center font-bold text-xl hover:bg-slate-200 hover:shadow-none bg-slate-100 border-[1px] rounded-lg shadow-lg p-2 gap-4";
const iconStyle = "w-10 h-10 transition-all duration-300";
const labelStyle = "transition-all duration-300";

export function MetamaskButton(): React.JSX.Element {
    const { handleModalClose } = useContext(ModalContext);

    function processMetamask() {
        if (window.ethereum && window.ethereum.isMetaMask) {
            document.getElementById('metamaskButtonIcon')?.classList.add(`translate-x-[-100px]`, 'animate-pulse');
            document.getElementById('metamaskButtonLabel')?.classList.add(`translate-x-[100px]`);
            metaMaskConnector.activate().then(() => {
                localStorage.setItem('wallet', 'metamask');
                handleModalClose();
            });
        } else {
            window.location.replace("https://metamask.io/download");
        }
    }

    return ( 
        <button
            className={buttonStyle}
            id='metamaskButton'
            onClick={() => processMetamask()}
        >
            <img src={metamask}
                className={iconStyle + ` group-hover:translate-x-[-100px]`}
                id='metamaskButtonIcon' />
            <div className={labelStyle + ` group-hover:translate-x-[100px]`}
                id='metamaskButtonLabel'>
                MetaMask
            </div>
        </button>
    );
};