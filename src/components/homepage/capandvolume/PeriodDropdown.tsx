import React from "react";
import { Period, Periods } from "../../../util/provider/charts/marketCapVolume/supportedValues";

function PeriodDropdown(props: { setPeriod: React.Dispatch<React.SetStateAction<Period>> }): React.JSX.Element {
    return (
        <select onChange={(e) => props.setPeriod(Periods[e.target.value])} 
                className="bg-slate-100 rounded-md w-16 h-8 p-1">
            <option value="DAY">24H</option>
            <option value="WEEK">7D</option>
            <option value="MONTH">30D</option>
        </select>
    )
}

export default PeriodDropdown;