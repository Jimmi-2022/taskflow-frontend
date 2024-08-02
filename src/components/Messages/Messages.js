import React, {useState} from 'react';
import './Messages.scss';
// import SearchBar from '../../components/MessagesPage/SearchBar/SearchBar';
import MessageItem from '../../components/Messages/MessageItem/MessageItem';
import Tabs from "./Tabs/Tabs";
import Scrollbars from 'react-custom-scrollbars';
import '../Scrollbars/Scrollbars.scss'

const Messages = () => {
    const [selectedMessageId, setSelectedMessageId] = useState(null);

    const unreadMessages = [
        { id: 1, name: 'Sergio Rabada', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 2, avatar: '/actor-1.png' },
        { id: 2, name: 'Angela Jonson', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 2, avatar: '/actor-2.png' },
        { id: 3, name: 'Stiffen Roberto', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 1, avatar: '/actor-3.png' },
    ];

    const allMessages = [
        { id: 4, name: 'Alex Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-4.png' },
        { id: 5, name: 'Project Chat', message: 'Landing page revamp', time: '11:30', highlight: true, avatar: '/actor-5.png' },
        { id: 6, name: 'Roberto Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-1.png' },
        { id: 7, name: 'Alex Jonson', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-2.png' },
        { id: 8, name: 'Alex Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-4.png' },
        { id: 9, name: 'Roberto Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-1.png' },
        { id: 10, name: 'Alex Jonson', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-2.png' },
        { id: 11, name: 'Alex Jonson', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-2.png' },
        { id: 12, name: 'Alex Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-4.png' },
        { id: 13, name: 'Roberto Smith', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-1.png' },
        { id: 14, name: 'Alex Jonson', phone: '+1248-879-9849', message: 'You: Hey Smith, How Are you!', time: '11:30', count: 0, avatar: '/actor-2.png' },
    ];

    return (
        <div className="message-list">
            <div className="message-list-header">
                <h2>Messages</h2>
            </div>
            <Tabs/>
            <Scrollbars
                style={{height: 'calc(100vh - 138px)'}}
                renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
            >
                <div className="section">
                    <h3>Unread Messages</h3>
                    {unreadMessages.map((msg) => (
                        <MessageItem key={msg.id} {...msg} selectedMessageId={selectedMessageId} setSelectedMessageId={setSelectedMessageId} />
                    ))}
                </div>
                <div className="section">
                    <h3>All Messages</h3>
                    {allMessages.map((msg) => (
                        <MessageItem key={msg.id} {...msg} selectedMessageId={selectedMessageId} setSelectedMessageId={setSelectedMessageId} />
                    ))}
                </div>
            </Scrollbars>
        </div>
    );
};

export default Messages;