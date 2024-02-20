import React, { useState, useEffect } from "react";
import { getData, getOptions } from "../../util/provider/charts/marketCapVolume/Provider";
import { Currencies, Periods } from "../../util/provider/charts/marketCapVolume/supportedValues";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";
import CurrencyDropdown from "./capandvolume/CurrencyDropdown";
import PeriodDropdown from "./capandvolume/PeriodDropdown";

function CapAndVolume(): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(Currencies.USD);
  const [period, setPeriod] = useState(Periods.DAY);
  const [data, setData] = useState({} as ChartData<"line">);

  useEffect(() => {
    getData(currency, period, true).then((data) => {
        setData(data);
        setLoading(false);
    });
  }, [currency, period]);
    
  return (
    <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-900">
                Market Cap & Volume
            </div>
            <div className="flex gap-4 pr-4">
                <CurrencyDropdown setCurrency={ setCurrency }/>
                <PeriodDropdown setPeriod={ setPeriod }/>
            </div>
        </div>
        { !loading && <Line data={ data } options={ getOptions(currency, period) } /> }
    </div>
  );
}

export default CapAndVolume;