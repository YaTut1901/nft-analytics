import React from "react";

function CapVolumeSwitch(props: { setTrendsBy: React.Dispatch<React.SetStateAction<"cap" | "volume">>, trendsBy: "cap" | "volume", colorsReversed?: boolean }): React.JSX.Element {
  const mainColor = props.colorsReversed ? "bg-white" : "bg-slate-200";
  const secondaryColor = props.colorsReversed ? "bg-slate-200" : "bg-white";
  return (
    <div className={`flex gap-3 p-1 ${secondaryColor} rounded-lg`}>
      <button className={`${props.trendsBy === "cap" ? mainColor : secondaryColor} rounded-lg cursor-pointer p-1 transition-colors duration-400`}
           onClick={() => props.setTrendsBy("cap")}>
        Cap
      </button>
      <button className={`${props.trendsBy === "volume" ? mainColor : secondaryColor} rounded-lg cursor-pointer p-1 transition-colors duration-400`}
           onClick={() => props.setTrendsBy("volume")}>
        Volume
      </button>
    </div>
  );
}

export default CapVolumeSwitch;