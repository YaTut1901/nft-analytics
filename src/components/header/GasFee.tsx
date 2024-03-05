import React, { useState, useEffect } from "react";
import GasFeeProvider from "../../util/provider/ethereum/GasFeeProvider";
import Provider from "../../util/provider/Provider";

function GasFee(): React.JSX.Element {
  const [gasFee, setGasFee] = useState<number>();
  const gasFeeProvider: Provider<number> = new GasFeeProvider();

  useEffect(() => {
    gasFeeProvider.provide().then((data) => {
      setGasFee(data);
    });
  }, []);

  return (
    <div className='flex justify-between items-center gap-1 hover:cursor-pointer'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"><path
          fill="currentColor"
          d="M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-6 0H6V5h6m7.77 2.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11C16.17 7 15.5 7.93 15.5 9a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6c-1.11 0-2 .89-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77" />
      </svg>
      <p className='text-sm whitespace-nowrap'>{gasFee} Gwei</p>
    </div>
  );
}

export default GasFee;