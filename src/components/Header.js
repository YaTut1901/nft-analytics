import React from 'react';
import BottomHeader from './header/BottomHeader';
import NewsTicker from './header/NewsTicker';

function Header() {
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