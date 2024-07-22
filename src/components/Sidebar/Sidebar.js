import React from 'react';
import './Sidebar.scss'
import SidebarLogo from '../../components/Sidebar/SidebarLogo/SidebarLogo.js';
import SidebarNav from '../../components/Sidebar/SidebarNav/SidebarNav.js';
import SidebarProjects from '../../components/Sidebar/SidebarProjects/SidebarProjects.js';
import {FiHelpCircle} from "react-icons/fi";
import {TbLogout} from "react-icons/tb";
import {NavLink} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <SidebarLogo />
                <SearchBar />
                <SidebarNav />
                <SidebarProjects />
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__help">
                    <li><FiHelpCircle /><NavLink to="/help" className="active-link">Help</NavLink></li>
                </div>
                <div className="sidebar__logout">
                    <li><TbLogout /><NavLink to="/logout" className="active-link">Log Out</NavLink></li>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
