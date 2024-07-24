import React from 'react';
import './MessagesPage.scss';
import Chat from "../../components/chat/Chat";
import Header from "../../components/Header/Header";
import Messages from "../../components/Messages/Messages";

const MessagesPage = () => {
    return (
        <div>
            <div className="MessagesPage">
                <Messages/>
                <div className='messages__section'>
                    <Header/>
                    <div className='messages__block'>
                        <Chat/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;
