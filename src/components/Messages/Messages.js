import React, { useState } from 'react'
import './Messages.scss'
// import SearchBar from '../../components/MessagesPage/SearchBar/SearchBar';
import Scrollbars from 'react-custom-scrollbars'
import MessageItem from '../../components/Messages/MessageItem/MessageItem'
import '../Scrollbars/Scrollbars.scss'
import Tabs from "./Tabs/Tabs"
import { generalSections, projectSections } from './messagesData'

const Messages = () => {
    const [selectedMessageId, setSelectedMessageId] = useState(null);
    const [activeTab, setActiveTab] = useState('General');

    const currentSections =
        activeTab === 'General' ? generalSections : projectSections;

    const tabs = [
        { label: 'General' },
        { label: 'Projects' },
    ];

    return (
        <div className="message-list">
            <div className="message-list-header">
                <h2>Messages</h2>
            </div>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            <Scrollbars
                style={{ height: 'calc(100vh - 138px)' }}
                renderThumbVertical={(props) => <div {...props} className="thumb-vertical" />}
            >
                {currentSections.map((section) => (
                    <div key={section.title} className="section">
                        <h3>{section.title}</h3>
                        {section.data.map((msg) => (
                            <MessageItem
                                key={msg.id}
                                {...msg}
                                selectedMessageId={selectedMessageId}
                                setSelectedMessageId={setSelectedMessageId}
                            />
                        ))}
                    </div>
                ))}
            </Scrollbars>
        </div>
    );
};

export default Messages;