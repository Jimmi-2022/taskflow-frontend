import React from 'react';
import Messages from "../../components/Messages/Messages";
import './Home.scss';

const Home = () => {
    return (
        <div>
            <div className="home">
                <Messages/>
            </div>
        </div>
    );
};

export default Home;
