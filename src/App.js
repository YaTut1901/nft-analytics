import React, { useState, useEffect } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Trends from './components/Trends';
import Explore from './components/Explore';
import Marketplace from './components/Marketplace';
import SmallScreenErrorPage from './components/SmallScreenErrorPage';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { ModalContext } from './util/context/ModalContext';
import Modal from './components/Modal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/trends",
        element: <Trends />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/marketplace",
        element: <Marketplace />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ]
  }
]);

function getLibrary(provider, connector) {
  return new Web3(provider);
}

function Wrapper() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ModalContext.Provider value={{
        isModalOpen,
        handleModalOpen,
        handleModalClose,
        modalContent,
        setModalContent
      }}>
        <div className="flex flex-col min-h-screen bg-gradient-to-tr from-indigo-900 via-indigo-600 to-violet-500">
          <Header />
          {screenWidth > 1280 ? <Outlet />
            : <SmallScreenErrorPage />}
          <Footer />
          {isModalOpen && modalContent
            && <Modal />}
        </div>
      </ModalContext.Provider>
    </Web3ReactProvider>
  )
};

export default router;
