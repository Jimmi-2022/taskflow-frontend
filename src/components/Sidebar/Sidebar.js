import React from 'react';
import './Sidebar.scss'
import { GoHome } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbMessageSearch } from "react-icons/tb";
import { GoProjectSymlink } from "react-icons/go";
import { GoTasklist } from "react-icons/go";
import { MdSchedule } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="sidebar__logo">
                    <img src="/logo192.png" alt="Logo" />
                    <h1>Taskflow</h1>
                </div>
                <nav className="sidebar__nav">
                    <ul>
                        <li><GoHome /><a href="/home">Home</a></li>
                        <li><MdOutlineDashboardCustomize /><a href="/dashboard">Dashboard</a></li>
                        <li><TbMessageSearch /><a href="/messages">Messages</a></li>
                        <li><GoProjectSymlink /><a href="/projects">Projects</a></li>
                        <li><GoTasklist /><a href="/tasks">My Task</a></li>
                        <li><MdSchedule /><a href="/schedule">Schedule</a></li>
                        <li><LuActivitySquare /><a href="/activity">Activity</a></li>
                        <li><RiTeamLine /><a href="/team">My Team</a></li>
                    </ul>
                </nav>
                <div className="sidebar__projects">
                    <h3>Pinned Projects</h3>
                    <ul>
                        <li><a href="/projects/1">Dot.shm</a></li>
                        <li><a href="/projects/2">Pipi.ai</a></li>
                        <li><a href="/projects/3">Taskflow app</a></li>
                        <li><a href="/projects/4">Fininx App</a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__help">
                    <a href="/help">Help</a>
                </div>
                <div className="sidebar__logout">
                    <a href="/logout">Log Out</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
