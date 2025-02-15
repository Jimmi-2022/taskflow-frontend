import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdAddTask,
  MdOutlineDashboardCustomize,
  MdSchedule,
} from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { TbMessageSearch } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./SidebarNav.scss";

const navItems = [
  { icon: <IoHomeOutline />, label: "Home", to: "/" },
  {
    icon: <MdOutlineDashboardCustomize />,
    label: "Dashboard",
    to: "/dashboard",
  },
  { icon: <TbMessageSearch />, label: "Messages", to: "/messages" },
  { icon: <GoProjectSymlink />, label: "Projects", to: "/projects" },
  { icon: <MdAddTask />, label: "My Task", to: "/tasks" },
  { icon: <MdSchedule />, label: "Schedule", to: "/schedule" },
  // { icon: <LuActivitySquare />, label: "Activity", to: "/activity" },
  { icon: <RiTeamLine />, label: "My TeamPage", to: "/team" },
];

const SidebarNav = () => (
  <nav className="sidebar__nav">
    <ul>
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink to={item.to} className="active-link">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default SidebarNav;
