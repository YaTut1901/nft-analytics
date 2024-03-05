import React, { useState, useEffect } from "react";
import TrendsByVolumeProvider from "../util/provider/ethereum/trends/TrendsByVolumeProvider";
import Provider from "../util/provider/Provider";
import { TopCollectionsByVolumeCollection } from "../util/provider/types";

function Trends(): React.JSX.Element {
  const [trends, setTrends] = useState({});
  const provider: Provider<Array<TopCollectionsByVolumeCollection>> = new TrendsByVolumeProvider();

  useEffect(() => {
    provider.provide().then((data) => {
      setTrends(data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1>Trends</h1>
      <pre>{JSON.stringify(trends, null, 2)}</pre>
    </div>
  )
}

export default Trends;