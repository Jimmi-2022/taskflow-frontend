import React from 'react';
import './Sidebar.scss'
import SidebarLogo from '../../components/Sidebar/SidebarLogo/SidebarLogo.js';
import SidebarNav from '../../components/Sidebar/SidebarNav/SidebarNav.js';
import SidebarProjects from '../../components/Sidebar/SidebarProjects/SidebarProjects.js';
// import SearchBar from "./SearchBar/SearchBar";
import SidebarBottom from "./SidebarBottom/SIdebarBottom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <SidebarLogo />
                {/*<SearchBar />*/}
                <SidebarNav />
                <SidebarProjects />
            </div>
            <SidebarBottom/>
        </div>
    );
};

export default Sidebar;
