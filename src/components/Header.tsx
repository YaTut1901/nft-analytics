import React, { useEffect } from 'react';
import BottomHeader from './header/BottomHeader';
import NewsTicker from './header/NewsTicker';
import { connectorsMap } from '../util/connector';

function Header(): React.JSX.Element {

  useEffect(() => {
    const wallet: string | null = localStorage.getItem('wallet')
    if (wallet && connectorsMap[wallet]) {
      connectorsMap[wallet].activate();
    }
  }, []);

  return (
    <div className='flex flex-col sticky top-0 z-50'>
      <div className='hidden xl:flex'>
        <NewsTicker />
      </div>
      <BottomHeader />
    </div>
  );
}

export default Header;