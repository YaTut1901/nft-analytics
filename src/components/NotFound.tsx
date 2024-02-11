import React from 'react';

function NotFound(): React.JSX.Element {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-indigo-900 via-indigo-600 to-violet-500'>
      <div className='flex flex-col justify-center items-center gap-4 text-black font-semibold mx-20 text-center'>
        <span className='text-6xl'>?</span>
        <h2 className='text-xl'>
          Hmmm... It looks like there is nothing here yet
        </h2>
      </div>
    </div>
  );
}

export default NotFound;