import React from "react";

function BottomBoard(): React.JSX.Element {
  return (
    <div className="w-full h-1/3 bg-indigo-900 flex items-center border-t-4 border-indigo-800">
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3">
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3">
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
        <div className="flex-grow p-4 flex-shrink-0 flex-basis-0 w-1/3">
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
    </div>
  );
}

export default BottomBoard;