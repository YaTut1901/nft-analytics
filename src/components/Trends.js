import React from "react";
import { useWeb3React } from '@web3-react/core';

function Trends() {
  const { active, chainId, account } = useWeb3React();

  return (
    <div>
      <div>Connection Status: {active}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
    </div>
  )

}

export default Trends;