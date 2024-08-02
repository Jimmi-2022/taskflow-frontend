import React from 'react';
import './MessagesPage.scss';
import Chat from "../../components/chat/Chat";
import Header from "../../components/Header/Header";
import Messages from "../../components/Messages/Messages";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";

const MessagesPage = () => {
    return (
        <div>
            <div className="MessagesPage">
                <Messages/>
                <div className='messages__section'>
                    <Header/>
                    <div className='messages__block'>
                        <Chat/>
                        <ProfileSidebar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;
