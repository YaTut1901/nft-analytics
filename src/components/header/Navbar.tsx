import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle: string = "mr-4 text-white font-semibold";
const inactiveStyle: string = "mr-4 font-semibold hover:text-white transition duration-500";

function Navbar(): React.JSX.Element {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-5">
        <li>
          <NavLink
            to="/trends"
            className={({ isActive }) =>
              isActive ? activeStyle 
              : inactiveStyle
            }>
            Trends
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>
            Marketplaces
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;