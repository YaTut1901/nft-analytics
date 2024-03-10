import React from "react";

function Pages(props: { page: number, setPage: React.Dispatch<React.SetStateAction<number>>, length: number }): React.JSX.Element {
  const prevButtonStyle = `bg-slate-100 rounded-lg px-3 ${props.page === 0 ? "text-slate-400 cursor-default" : "hover:bg-slate-200"} transition-colors duration-300 ease-in-out`;  
  const nextButtonStyle = `bg-slate-100 rounded-lg px-3 ${props.length / props.page < props.page + 1 ? "text-slate-400 cursor-default" : "hover:bg-slate-200"} transition-colors duration-300 ease-in-out`;
  
  return (
    <div className="flex gap-1">
      <button className={prevButtonStyle} onClick={() => props.setPage(props.page - 1)} disabled={props.page === 0}>
        {"<"}
      </button>
      <button className={nextButtonStyle} onClick={() => props.setPage(props.page + 1)} disabled={props.length / props.page < props.page + 1}>
        {">"}
      </button>
    </div>
  );
}

export default Pages;