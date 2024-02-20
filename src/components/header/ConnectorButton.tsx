import { useContext, useState, useEffect } from 'react';
import { connectorsMap as connectors } from '../../util/connector';
import { connectors as connectorsLogo } from '../../assets';
import { ModalContext } from '../../util/context/ModalContext';
import SupportedConnectors from '../../util/connector/supportedConnectors';

const buttonClasses = "overflow-hidden w-full flex justify-center px-6 items-center font-bold text-xl hover:bg-slate-200 hover:shadow-none bg-slate-100 border-[1px] rounded-lg shadow-lg p-2 gap-4";
const transitionProperties = "all 300ms";

function ConnectorButton(props: { name: SupportedConnectors }): React.JSX.Element {
    const { handleModalClose } = useContext(ModalContext);
    const [pxToTranslate, setPxToTranslate] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setPxToTranslate(calculatePxToTranslate(props.name));
    }, []);

    async function processWallet() {
        setIsActive(true);

        try {
            await connectors[props.name].activate();
            localStorage.setItem('wallet', props.name);
        } catch (error) {
            console.error(error);
        }

        handleModalClose();
    }

    const iconStyles: React.CSSProperties = {
        width: '40px',
        height: '40px',
        position: 'relative',
        right: isActive || isHovered ? `${pxToTranslate}px` : '0px',
        transition: transitionProperties,
        animation: isActive ? 'spin-slow 3s linear infinite' : 'none'
    }

    const labelStyles: React.CSSProperties = {
        position: 'relative',
        left: isActive || isHovered ? `${pxToTranslate}px` : '0px',
        transition: transitionProperties
    }

    return ( 
        <button
            className={buttonClasses}
            id={`${props.name}WalletButton`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => processWallet()}
        >
            <img src={connectorsLogo[props.name]}
                style={iconStyles}
                id={`${props.name}WalletButtonIcon`} />
            <div style={labelStyles}
                id={`${props.name}WalletButtonLabel`}>
                {props.name}
            </div>
        </button>
    );
}

function calculatePxToTranslate(name: string): number {
    const buttonW = document.getElementById(`${name}WalletButton`)?.offsetWidth ?? 0;
    const iconW = document.getElementById(`${name}WalletButtonIcon`)?.offsetWidth ?? 0;
    const labelW = document.getElementById(`${name}WalletButtonLabel`)?.offsetWidth ?? 0;
    const totalW = iconW + labelW + 16;
    const res = (buttonW - 24 * 2 - totalW) / 2;
    return res
}

export default ConnectorButton;