import React from 'react';
import Messages from "../../components/Messages/Messages";
import './Home.scss';
import Chat from "../../components/chat/Chat";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <div>
            <div className="home">
                <Messages/>
                 <div className='home__section'>
                     <Header/>
                     <div className='home__block'>
                         <Chat/>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Home;
