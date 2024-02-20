import React from "react";
import CapAndVolume from "./CapAndVolume";

function UpBoard():React.JSX.Element {

  return (
    <div className="w-full bg-white flex items-center rounded-3xl shadow-lg">
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3">
          <CapAndVolume />
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3">
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3 bg-slate-200 rounded-r-3xl">
          Trends overview
        </div>
    </div>
  );
}

export default UpBoard;