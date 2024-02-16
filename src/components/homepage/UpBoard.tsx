import React from "react";
import { schema } from "../../util/provider/charts/test/Provider";
import { Line } from "react-chartjs-2";

function UpBoard():React.JSX.Element {
  const style = {
    height: "35vh",
  };

  return (
    <div className="w-full bg-white flex items-center rounded-3xl shadow-lg"
         style={style}>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3"
             style={style}>
          <Line data={schema} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3"
             style={style}>
          <Line data={schema} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3 bg-slate-200 rounded-r-3xl"
             style={style}>
          Trends overview
        </div>
    </div>
  );
}

export default UpBoard;