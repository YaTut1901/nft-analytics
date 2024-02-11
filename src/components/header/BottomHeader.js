import React from 'react';
import Logo from './Logo'
import Navbar from './Navbar';
import Search from './Search';
import GasFee from './GasFee';
import EthPrice from './EthPrice';
import ConnectWallet from './ConnectWallet';

const groupStyle = "flex justify-between items-center";

function BottomHeader() {
  return (
    <div className='flex justify-between items-center gap-8 px-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg'>
      <div className={groupStyle + " gap-8 hidden xl:flex"}>
        <Logo />
        <Search />
        <Navbar />
      </div>
      <div className={groupStyle + " gap-4 hidden xl:flex"}>
        <GasFee />
        <EthPrice />
        <ConnectWallet />
      </div>
      <div className='xl:hidden w-full flex justify-center'>
        <Logo />
      </div>
    </div>
  );
}

export default BottomHeader;