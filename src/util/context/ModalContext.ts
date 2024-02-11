import React from "react";

type ModalContextType = {
    isModalOpen: boolean;
    handleModalOpen: () => void;
    handleModalClose: () => void;
    modalContent: React.JSX.Element | undefined;
    setModalContent: (content: React.JSX.Element) => void;
};

export const ModalContext: React.Context<ModalContextType> = React.createContext<ModalContextType>({} as ModalContextType);

