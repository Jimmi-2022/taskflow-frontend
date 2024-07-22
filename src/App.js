import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Messages from './pages/Messages/Messages';
import Projects from './pages/Projects/Projects';
import Tasks from './pages/Tasks/Tasks';
import Schedule from './pages/Schedule/Schedule';
import Activity from './pages/Activity/Activity';
import Team from './pages/Team/Team';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/activity" element={<Activity />} />
                        <Route path="/team" element={<Team />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;


