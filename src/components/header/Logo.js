import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to='/' className="flex justify-between items-center py-4">
      <img
        className="h-8 w-8 mr-2"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <span className="font-semibold text-xl tracking-tight">Workflow</span>
    </Link>
  );
}

export default Logo;