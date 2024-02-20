import React from "react";
import { Currency, Currencies } from "../../../util/provider/charts/marketCapVolume/supportedValues";

function CurrencyDropdown( props: { setCurrency: React.Dispatch<React.SetStateAction<Currency>> } ): React.JSX.Element {
    return (
        <select onChange={(e) => props.setCurrency(Currencies[e.target.value])} 
                className="bg-slate-100 rounded-md w-16 h-8 p-1">
            <option value={Currencies.USD.ticker}>USD</option>
            <option value={Currencies.ETH.ticker}>ETH</option>
        </select>
    )
}

export default CurrencyDropdown;