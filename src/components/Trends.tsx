import React from "react";
import { useWeb3React } from '@web3-react/core';

function Trends(): React.JSX.Element {
  const { isActive, chainId, account } = useWeb3React();

  return (
    <div>
      <div>Connection Status: {isActive}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
    </div>
  )
}

export default Trends;