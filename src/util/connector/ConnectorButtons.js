import React, { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import connectors from '../../util/connector/Connectors';
import { metamask, coinbase, walletConnect } from '../../assets/assets';
import { ModalContext } from '../context/ModalContext';

const buttonStyle = "group overflow-hidden w-full flex justify-center px-6 items-center font-bold text-xl hover:bg-slate-200 hover:shadow-none bg-slate-100 border-[1px] rounded-lg shadow-lg p-2 gap-4";
const iconStyle = "w-10 h-10 transition-all duration-300";
const labelStyle = "transition-all duration-300";

export function MetamaskButton() {
    const { activate } = useWeb3React();
    const { handleModalClose } = useContext(ModalContext);
    const pxToTranslateMetaMask = "100";

    function processMetamask() {
        if (window.ethereum && window.ethereum.isMetaMask) {
            document.getElementById('metamaskButtonIcon')
                .classList.add(`translate-x-[-${pxToTranslateMetaMask}px]`, 'animate-pulse');
            document.getElementById('metamaskButtonLabel')
                .classList.add(`translate-x-[${pxToTranslateMetaMask}px]`);
            activate(connectors.MetaMask).then(() => {
                localStorage.setItem('wallet', 'MetaMask');
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
                className={iconStyle + ` group-hover:translate-x-[-${pxToTranslateMetaMask}px]`}
                id='metamaskButtonIcon' />
            <div className={labelStyle + ` group-hover:translate-x-[${pxToTranslateMetaMask}px]`}
                id='metamaskButtonLabel'>
                MetaMask
            </div>
        </button>
    );
};

export function WalletConnectButton() {
    const { activate } = useWeb3React();
    const { handleModalClose } = useContext(ModalContext);
    const pxToTranslateWalletConnect = "75";

    function processWalletConnect() {
        document.getElementById('walletConnectButtonIcon')
            .classList.add(`translate-x-[-${pxToTranslateWalletConnect}px]`, 'animate-pulse');
        document.getElementById('walletConnectButtonLabel')
            .classList.add(`translate-x-[${pxToTranslateWalletConnect}px]`);
        activate(connectors.WalletConnect).then(() => {
            localStorage.setItem('wallet', 'WalletConnect');
            handleModalClose();
        });
    }

    return (
        <button
            className={buttonStyle}
            id='walletConnectButton'
            onClick={() => processWalletConnect()}
        >
            <img src={walletConnect}
                className={iconStyle + ` group-hover:translate-x-[-${pxToTranslateWalletConnect}px]`}
                id='walletConnectButtonIcon' />
            <div className={labelStyle + ` group-hover:translate-x-[${pxToTranslateWalletConnect}px]`}
                id='walletConnectButtonLabel'>
                WalletConnect
            </div>
        </button>
    );
};

export function CoinbaseButton() {
    const { activate } = useWeb3React();
    const { handleModalClose } = useContext(ModalContext);
    const pxToTranslateCoinbase = "100";

    function processCoinbase() {
        document.getElementById('coinbaseButtonIcon')
            .classList.add(`translate-x-[-${pxToTranslateCoinbase}px]`, 'animate-pulse');
        document.getElementById('coinbaseButtonLabel')
            .classList.add(`translate-x-[${pxToTranslateCoinbase}px]`);
        activate(connectors.Coinbase).then(() => {
            localStorage.setItem('wallet', 'Coinbase');
            handleModalClose();
        });
    }

    return (
        <button
            className={buttonStyle}
            id='coinbaseButton'
            onClick={() => processCoinbase()}
        >
            <img src={coinbase}
                className={iconStyle + ` group-hover:translate-x-[-${pxToTranslateCoinbase}px]`}
                id='coinbaseButtonIcon' />
            <div className={labelStyle + ` group-hover:translate-x-[${pxToTranslateCoinbase}px]`}
                id='coinbaseButtonLabel'>
                Coinbase
            </div>
        </button>
    );
};
