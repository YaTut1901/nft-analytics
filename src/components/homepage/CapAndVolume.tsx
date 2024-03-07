import React, { useState, useEffect, CSSProperties } from "react";
import Provider from "../../util/provider/Provider";
import MarketProvider from "../../util/provider/charts/marketCapVolume/MarketProvider";
import { RawCapVolumeData, RawMarketData } from "../../util/provider/types";
import { Currencies, Periods } from "../../util/provider/charts/marketCapVolume/supportedValues";
import CurrencyDropdown from "./capandvolume/CurrencyDropdown";
import PeriodDropdown from "./capandvolume/PeriodDropdown";
import ChartLoading from "./capandvolume/ChartLoading";
import CapVolumeChart from "../../util/charts/CapVolumeChart";

function CapAndVolume(props: { chartStyle?: CSSProperties }): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(Currencies.USD);
  const [period, setPeriod] = useState(Periods.DAY);
  const [data, setData] = useState([] as RawCapVolumeData);

  useEffect(() => {
    const marketCapProvider: Provider<RawMarketData> = new MarketProvider(period, currency, "marketcap");
    const marketVolumeProvider: Provider<RawMarketData> = new MarketProvider(period, currency, "volume");

    Promise.all([marketCapProvider.provide(), marketVolumeProvider.provide()]).then(([cap, volume]) => {
        const values: RawCapVolumeData = cap.data.map((capData, index) => {
            return {
                timestamp: cap.timestamp[index],
                cap: capData,
                volume: volume.data[index]
            };
        });
        setData(values);
        setLoading(false);
    });
  }, [currency, period]);
    
  return (
    <div className="flex flex-col gap-4 h-full">
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
        <div className="relative h-[90%]">
          <ChartLoading loading={ loading } />
          <CapVolumeChart data={ data } period={ period } currency={ currency } style={props.chartStyle} />
        </div>
    </div>
  );
}

export default CapAndVolume;