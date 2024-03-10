import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TrendsByCapProvider from "../../util/provider/ethereum/trends/TrendsByCapProvider";
import TrendsByVolumeProvider from "../../util/provider/ethereum/trends/TrendsByVolumeProvider";
import Trend from "./trends/Trend";
import CapVolumeSwitch from "./trends/CapVolumeSwitch";
import { TopCollections } from "../../util/provider/types";
import ChartLoading from "./capandvolume/ChartLoading";

function formatTrends(trends: TopCollections): React.JSX.Element {
  return <ul className="w-full h-full flex flex-col justify-between">
    {trends.map(trend => {
      return <Trend trend={trend} />
    })}
  </ul>
}

function TrendsOverview(): React.JSX.Element {
  const padding = 16;
  const gap = 12;
  const header = 40;
  const trendHeight = 80;
  const [height, setHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [trendsBy, setTrendsBy] = useState<"cap" | "volume">("cap"); 
  const [trends, setTrends] = useState({} as TopCollections);

  useEffect(() => {
    const provider = trendsBy === "cap" ? new TrendsByCapProvider() 
                                        : new TrendsByVolumeProvider();

    provider.provide().then(trends => {
      setTrends(trends);
      setLoading(false);
    });
  }, [trendsBy]);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setHeight(containerRef.current.clientHeight);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative p-4 flex flex-col items-center gap-3 bg-slate-200 rounded-r-3xl h-full"
         ref={ containerRef }>
      <div className="flex justify-between items-center w-full">
        <Link className="text-2xl font-bold text-slate-900"
              to={`/trends`}>
          Top Collections
        </Link>
        <CapVolumeSwitch setTrendsBy={setTrendsBy} trendsBy={trendsBy}/>
      </div>
      { loading && <ChartLoading loading={loading} /> }
      { !loading && formatTrends(trends.slice(0, (height - (padding * 2 + gap + header)) / trendHeight)) }
    </div>
  );
}

export default TrendsOverview;