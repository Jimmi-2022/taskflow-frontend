import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './pages/Home/HomePage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import MessagesPage from './pages/Messages/MessagesPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import TasksPage from './pages/Tasks/TasksPage';
import SchedulePage from './pages/Schedule/SchedulePage';
import ActivityPage from './pages/Activity/ActivityPage';
import TeamPage from './pages/Team/TeamPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/schedule" element={<SchedulePage />} />
                        <Route path="/activity" element={<ActivityPage />} />
                        <Route path="/team" element={<TeamPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;


