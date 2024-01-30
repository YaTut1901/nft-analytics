import React from 'react';

const SmallScreenErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-indigo-900 via-indigo-600 to-violet-500'>
            <div className='flex flex-col justify-center items-center gap-4 text-black font-semibold mx-20 text-center'>
                <span className='text-6xl'>⚠️</span>
                <h2>Sorry, this application contains a lot of charts with data, which are not applicable to small screens. Please use wider screen to see the data</h2>
            </div>
        </div>
    );
};

export default SmallScreenErrorPage;
