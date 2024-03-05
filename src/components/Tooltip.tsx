import React, { useState } from 'react';

function Tooltip( props: { text: string, action?: React.ReactNode, children: React.ReactNode } ): React.JSX.Element {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
      {show && (
        <div className="">
          <div className="absolute bg-gray-800 text-white px-2 py-1 rounded-full z-10 bottom-1/2 left-1/2 transform -translate-x-1/2 cursor-text"
               onClick={ handleClick }>
            <div className="flex gap-2 items-center">
              {props.text}
              {props.action}
            </div>
            <div className="absolute w-3 h-3 bg-gray-800 left-1/2 rotate-45 -translate-y-1/4"></div>
          </div>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Tooltip;