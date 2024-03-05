import React, { useState, useEffect } from "react";
import { getData, getEmptyData } from "../../util/charts/marketCapVolume";
import Provider from "../../util/provider/Provider";
import MarketProvider from "../../util/provider/charts/marketCapVolume/MarketProvider";
import { RawMarketData } from "../../util/provider/types";
import { getOptions } from "../../util/charts/marketCapVolume";
import { Currencies, Periods } from "../../util/provider/charts/marketCapVolume/supportedValues";
import { Line } from "react-chartjs-2";
import CurrencyDropdown from "./capandvolume/CurrencyDropdown";
import PeriodDropdown from "./capandvolume/PeriodDropdown";
import ChartLoading from "./capandvolume/ChartLoading";

function CapAndVolume(): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(Currencies.USD);
  const [period, setPeriod] = useState(Periods.DAY);
  const [data, setData] = useState(getEmptyData(period));

  useEffect(() => {
    const marketCapProvider: Provider<RawMarketData> = new MarketProvider(period, currency, "marketcap");
    const marketVolumeProvider: Provider<RawMarketData> = new MarketProvider(period, currency, "volume");

    Promise.all([marketCapProvider.provide(), marketVolumeProvider.provide()]).then(([cap, volume]) => {
        const chartData = getData(cap.timestamp, period, cap.data, volume.data);
        setData(chartData);
        setLoading(false);
    });
  }, [currency, period]);
    
  return (
    <div className="flex flex-col gap-3 h-full">
        <div className="flex justify-between items-center"
             onClick={e => e.stopPropagation()}>
            <div className="text-2xl font-bold text-slate-900">
                Market Cap & Volume
            </div>
            <div className="flex gap-4">
                <CurrencyDropdown setCurrency={ setCurrency }/>
                <PeriodDropdown setPeriod={ setPeriod }/>
            </div>
        </div>
        <div className="relative h-full cursor-zoom-in">
          <ChartLoading loading={ loading } />
          <Line data={ data } options={ getOptions(currency, period) } />
        </div>
    </div>
  );
}

export default CapAndVolume;