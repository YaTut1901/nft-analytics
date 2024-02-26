import React, { CSSProperties } from "react";
import CapAndVolume from "./CapAndVolume";
import { useContext } from "react";
import { ModalContext } from "../../util/context/ModalContext";

function UpBoard():React.JSX.Element {
  const { handleModalOpen, setModalContent } = useContext(ModalContext);

  const style: CSSProperties = {
    minHeight: "35vh"
  }
  
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
    <div className="w-full bg-white flex items-center rounded-3xl shadow-lg"
         style={style}>
        <div className="p-4 w-1/3 h-full cursor-zoom-in"
             onClick={() => handleClick(<CapAndVolume />)}>
          <CapAndVolume />
        </div>
        <div className="p-4 w-1/3">
          {/* <Line data={schema} options={{ maintainAspectRatio: false }} /> */}
        </div>
        <div className="p-4 w-1/3 bg-slate-200 rounded-r-3xl h-full">
          Trends overview
        </div>
    </div>
  );
}

export default UpBoard;