import React, { useEffect } from 'react';
import BottomHeader from './header/BottomHeader';
import NewsTicker from './header/NewsTicker';
import { useWeb3React } from '@web3-react/core';
import connectors from '../util/connector/Connectors';

function Header() {
  const { activate } = useWeb3React();

  useEffect(() => {
    if (localStorage.getItem('wallet')) {
      activate(connectors[localStorage.getItem('wallet')]);
    }
  }, []);

  return (
    <div className='flex flex-col sticky top-0'>
      <div className='hidden xl:flex'>
        <NewsTicker />
      </div>
      <BottomHeader />
    </div>
  );
}

export default Header;