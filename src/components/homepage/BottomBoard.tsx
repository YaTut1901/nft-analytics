import React from "react";
import { schema } from "../../util/provider/charts/test/Provider";
import { Line } from "react-chartjs-2";

function BottomBoard(): React.JSX.Element {
  const style = {
    height: "35vh",
  };

  return (
    <div className="w-full bg-indigo-900 flex items-center border-t-4 border-indigo-800"
         style={style}>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3"
             style={style}>
          <Line data={schema} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3"
             style={style}>
          <Line data={schema} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3"
             style={style}>
          <Line data={schema} options={{ maintainAspectRatio: false }} />
        </div>
    </div>
  );
}

export default BottomBoard;