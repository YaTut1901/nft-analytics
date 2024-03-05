import React from "react";
import { Link } from "react-router-dom";
import { TopCollectionsByCapCollection, TopCollectionsByVolumeCollection } from "../../../util/provider/types";
import Tooltip from "../../Tooltip";
import { FiExternalLink } from "react-icons/fi";

function Trend(props: { trend: TopCollectionsByCapCollection | TopCollectionsByVolumeCollection }): React.JSX.Element {
    function tooltipAction() {
        return (
            <button onClick={() => window.open(`https://etherscan.io/address/${props.trend.collection_address}`)}>
              <FiExternalLink className="w-4 h-4 text-white"/>
            </button>
        );
    }
    
    return (
        <li className="p-4 flex gap-2 justify-between items-center bg-white rounded-2xl w-full shadow-2xl">
          <Link to={`/explore/${props.trend.collection_address}`} className="w-full h-full flex gap-3 items-center">
            <div className="flex gap-3 items-center w-4/5">
                <div className="flex gap-3 justify-between items-center">
                    <div className="text-2xl font-bold text-slate-900">
                        {props.trend.rank}
                    </div>
                    <div className="w-12 h-12">
                        <img src={props.trend.collection_image} alt="collection" className="w-12 h-12 rounded-full"/>
                    </div>
                </div>
                <div className="w-3/4 relative">
                    <div className="text-lg font-bold text-slate-900">
                        {props.trend.collection_title}
                    </div>
                    <Tooltip text={props.trend.collection_address} 
                             action={tooltipAction()}>
                        <div className="text-sm text-slate-700 overflow-hidden whitespace-nowrap text-ellipsis w-full cursor-default">
                            {props.trend.collection_address} 
                        </div>
                    </Tooltip>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5">
                <div className="text-lg font-bold text-slate-900">
                    {props.trend.floor_price_usd}$
                </div>
                <div className={`text-sm ${Number(props.trend.floor_price_24hr_percent_change) > 0 ? "text-[#10B981] before:content-['↗']" : "text-[#F43F5E] before:content-['↘']"}`}>
                    {props.trend.floor_price_24hr_percent_change}%
                </div>
            </div>
          </Link>
        </li>
    );
}

export default Trend;