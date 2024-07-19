import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import './styles/main.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route exact path="/" component={Home} />
                        {/*<Route path="/dashboard" component={Dashboard} />*/}
                        {/* Добавьте остальные маршруты... */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;


