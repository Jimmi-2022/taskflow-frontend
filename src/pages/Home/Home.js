import React from 'react';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Welcome to Taskflow</h1>
                <p>This is the home page.</p>
            </div>
        </div>
    );
};

export default Home;
