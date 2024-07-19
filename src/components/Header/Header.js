import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img src="/logo192.png" alt="Taskflow Logo" />
                    <h1>Taskflow</h1>
                </div>
                <nav className="header__nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/messages">Messages</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/tasks">Tasks</a></li>
                        <li><a href="/schedule">Schedule</a></li>
                        <li><a href="/activity">Activity</a></li>
                        <li><a href="/team">Team</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
