import React from "react";

function CapVolumeSwitch(props: { setTrendsBy: React.Dispatch<React.SetStateAction<"cap" | "volume">>, trendsBy: "cap" | "volume" }): React.JSX.Element {
  return (
    <div className="flex gap-3 p-1 bg-white rounded-lg">
      <button className={`${props.trendsBy === "cap" ? "bg-slate-200" : "bg-white"} rounded-lg cursor-pointer p-1 transition-colors duration-400`}
           onClick={() => props.setTrendsBy("cap")}>
        Cap
      </button>
      <button className={`${props.trendsBy === "volume" ? "bg-slate-200" : "bg-white"} rounded-lg cursor-pointer p-1 transition-colors duration-400`}
           onClick={() => props.setTrendsBy("volume")}>
        Volume
      </button>
    </div>
  );
}

export default CapVolumeSwitch;