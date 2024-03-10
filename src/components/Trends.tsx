import React, { useState, useEffect } from "react";
import { TopCollections } from "../util/provider/types";
import TrendsByCapProvider from "../util/provider/ethereum/trends/TrendsByCapProvider";
import TrendsByVolumeProvider from "../util/provider/ethereum/trends/TrendsByVolumeProvider";
import CapVolumeSwitch from "../components/homepage/trends/CapVolumeSwitch";
import Trend from "../components/homepage/trends/Trend";
import Pages from "../components/trends/Pages";
import ChartLoading from "./homepage/capandvolume/ChartLoading";

function formatTrends(trends: TopCollections): React.JSX.Element {
  return <ul className="w-full h-full flex flex-col gap-3">
    {trends.map(trend => {
      return <Trend trend={trend} />
    })}
  </ul>
}

function Trends(): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [trendsBy, setTrendsBy] = useState<"cap" | "volume">("cap"); 
  const [trends, setTrends] = useState({} as TopCollections);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const provider = trendsBy === "cap" ? new TrendsByCapProvider() 
                                        : new TrendsByVolumeProvider();

    provider.provide().then(trends => {
      setTrends(trends);
      setLoading(false);
    });
  }, [trendsBy]);

  return (
    <div className="p-4 flex justify-between gap-4 items-center">
      <div className="bg-white shadow-lg rounded-lg w-1/2 border">
        <div className="w-full border-b">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-slate-900">
              Top Collections
            </h1>
            <CapVolumeSwitch setTrendsBy={setTrendsBy} trendsBy={trendsBy} colorsReversed/>
          </div>
        </div>
        <div className="p-4 flex flex-col border-b">
          { loading && <ChartLoading loading={loading} /> }
          { !loading && formatTrends(trends.slice(0 + (page * 5), 5 + (page * 5))) }
        </div>
        <div className="p-4 flex">
          <Pages page={page} setPage={setPage} length={trends.length} />
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg w-1/2">

      </div>
    </div>
  )
}

export default Trends;