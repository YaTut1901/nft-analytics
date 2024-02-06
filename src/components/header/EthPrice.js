import React, { useEffect, useState } from "react";
import getETHPrice from "../../util/provider/ethereum/ETHPriceProvider";

function EthPrice() {
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    getETHPrice().then((data) => {
      setEthPrice(data);
    });
  }, []);

  return (
    <div className='flex justify-between items-center gap-1 hover:cursor-pointer'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5">
          <path
            d="M21.168 8A10.003 10.003 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9" />
          <path
            d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6c5.186 0 9.45-3.947 9.951-9" />
          <path
            d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20M7 12l5 7l5-7M7 12l5-7m-5 7l5 1m0-8l5 7m-5-7v8m5-1l-5 1" />
        </g>
      </svg>
      <p className='text-sm'>${ethPrice}</p>
    </div>
  );
}

export default EthPrice;