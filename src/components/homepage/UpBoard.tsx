import React from "react";
import CapAndVolume from "./CapAndVolume";
import TrendsOverview from "./TrendsOverview";
import { useContext } from "react";
import { ModalContext } from "../../util/context/ModalContext";

function UpBoard():React.JSX.Element {
  const { handleModalOpen, setModalContent } = useContext(ModalContext);
  
  function handleClick(component: React.JSX.Element | null = null) {
    setModalContent(
      <div className="bg-white p-4 rounded-3xl w-4/5 h-3/5 shadow-lg"
           onClick={(e) => e.stopPropagation()}>
        { component }
      </div>
    );
    handleModalOpen();
  }

  return (
    <div className="w-full h-1/2 bg-white flex items-center rounded-3xl shadow-lg">
        <div className="p-4 w-1/3 h-full"
             onClick={() => handleClick(<CapAndVolume chartStyle={{ cursor: "default" }} />)}>
          <CapAndVolume chartStyle={{ cursor: "zoom-in" }} />
        </div>
        <div className="p-4 w-1/3">
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
        <div className="w-1/3 h-full">
          <TrendsOverview />
        </div>
    </div>
  );
}

export default UpBoard;