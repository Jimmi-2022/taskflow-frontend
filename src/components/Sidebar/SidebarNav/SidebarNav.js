import React from 'react';
import {MdAddTask, MdOutlineDashboardCustomize} from "react-icons/md";
import {TbMessageSearch} from "react-icons/tb";
import {GoProjectSymlink} from "react-icons/go";
import {MdSchedule} from "react-icons/md";
import {LuActivitySquare} from "react-icons/lu";
import {RiTeamLine} from "react-icons/ri";
import {NavLink} from 'react-router-dom';
import {IoHomeOutline} from "react-icons/io5";
import './SidebarNav.scss';

const navItems = [
    { icon: <IoHomeOutline />, label: "Home", to: "/" },
    { icon: <MdOutlineDashboardCustomize />, label: "Dashboard", to: "/dashboard" },
    { icon: <TbMessageSearch />, label: "Messages", to: "/messages" },
    { icon: <GoProjectSymlink />, label: "Projects", to: "/projects" },
    { icon: <MdAddTask />, label: "My Task", to: "/tasks" },
    { icon: <MdSchedule />, label: "Schedule", to: "/schedule" },
    { icon: <LuActivitySquare />, label: "Activity", to: "/activity" },
    { icon: <RiTeamLine />, label: "My Team", to: "/team" },
];

const SidebarNav = () => (
    <nav className="sidebar__nav">
        <ul>
            {navItems.map((item, index) => (
                <li key={index}>
                    {item.icon}
                    <NavLink to={item.to} className="active-link">
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default SidebarNav;

