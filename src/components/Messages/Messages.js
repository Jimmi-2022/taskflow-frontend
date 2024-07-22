import React from 'react';
import './Messages.scss';
// import SearchBar from '../../components/Messages/SearchBar/SearchBar';
import MessageItem from '../../components/Messages/MessageItem/MessageItem';
import Tabs from "./Tabs/Tabs";

const Messages = () => {
    const unreadMessages = [
        { name: 'Sergio Rabada', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 2, avatar: '/breadpit.png' },
        { name: 'Angela Jonson', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 2, avatar: '/breadpit.png' },
        { name: 'Stiffen Roberto', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 1, avatar: '/breadpit.png' },
    ];

    const allMessages = [
        { name: 'Alex Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/breadpit.png' },
        { name: 'Project Chat', message: 'Landing page revamp', time: '11:30', highlight: true, avatar: '/breadpit.png' },
        { name: 'Roberto Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/breadpit.png' },
        { name: 'Alex Jonson', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/breadpit.png', isAdd: true },
    ];

    return (
        <div className="message-list">
            <div className="header">
                <h2>Messages</h2>
                {/*<SearchBar />*/}
            </div>
            <Tabs />
            <div className="section">
                <h3>Unread Messages</h3>
                {unreadMessages.map((msg, index) => (
                    <MessageItem key={index} {...msg} />
                ))}
            </div>
            <div className="section">
                <h3>All Messages</h3>
                {allMessages.map((msg, index) => (
                    <MessageItem key={index} {...msg} />
                ))}
            </div>
        </div>
    );
};

export default Messages;