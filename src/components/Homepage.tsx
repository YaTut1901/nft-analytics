import React from 'react';
import UpBoard from './homepage/UpBoard';
import MidBoard from './homepage/MidBoard';
import BottomBoard from './homepage/BottomBoard';
import trendsBanner from '../assets/trendsBanner.jpeg';

function Homepage(): React.JSX.Element {
    return (
        <div className="relative h-[150vh] flex flex-col">
          <div className="relative h-[700px]">
            <img src={trendsBanner} alt="trendsBanner" className="absolute object-cover w-full h-full object-[0,20%]" />
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-indigo-400/90 to-indigo-400 backdrop-blur-md"></div>
          </div>
          <div className="bg-indigo-400 flex-grow"></div>
          <div className="absolute flex flex-col w-full h-full top-0">
            <div className="flex flex-col gap-2 items-center text-5xl whitespace-nowrap text-slate-900 font-semibold p-20">
              <div>Navigating Tomorrow’s Digital Masterpieces</div>
              <div className="text-3xl">Discover the latest trends in the digital art world</div>
            </div>
            <div className='flex flex-col h-full justify-between gap-4'>
              <div className="flex flex-col h-2/3 gap-4 px-5">
                <UpBoard />
                <MidBoard />
              </div>
              <BottomBoard />
            </div>
          </div>
        </div>
    );
}

export default Homepage;