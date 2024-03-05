import React from "react";
import { Line } from "react-chartjs-2";

function MidBoard(): React.JSX.Element {
  const style = {
    height: "25vh",
    width: "calc(33.3% - 2rem)"
  };

  return (
    <div className="w-full flex gap-4 items-center"
         style={{ height: "25vh" }}>
        <div className="flex-grow p-4 h-full flex-shrink-0 flex-basis-0 bg-white rounded-l-3xl rounded-r-md shadow-lg"
             style={style}>
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
        <div className="flex-grow p-4 h-full flex-shrink-0 flex-basis-0 bg-white shadow-lg rounded-md"
             style={style}>
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
        <div className="flex-grow p-4 h-full flex-shrink-0 flex-basis-0 bg-white shadow-lg rounded-r-3xl rounded-l-md"
             style={style}>
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
    </div>
  );
}

export default MidBoard;