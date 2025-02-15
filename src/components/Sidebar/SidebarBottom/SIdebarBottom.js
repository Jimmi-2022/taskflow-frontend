import React from "react";
import "./SidebarBottom.scss";
import { FiHelpCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const SidebarBottom = () => (
  <div className="sidebar__bottom">
    <div className="sidebar__help">
      <li>
        <FiHelpCircle />
        <NavLink to="/help" className="active-link">
          Help
        </NavLink>
      </li>
    </div>
    <div className="sidebar__logout">
      <li>
        <TbLogout />
        <NavLink to="/logout" className="active-link">
          Log Out
        </NavLink>
      </li>
    </div>
  </div>
);

export default SidebarBottom;
