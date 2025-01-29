import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './MessageItem.scss'

const MessageItem = ({ id, name, phone, message, time, count, highlight, avatar, isAdd, selectedMessageId, setSelectedMessageId }) => {
    const handleMessageClick = () => {
        if (setSelectedMessageId) {
            setSelectedMessageId(id);
        }
    };

    return (
        <div
            key={id}
            className={`message-item ${selectedMessageId === id ? 'highlight' : ''}`}
            onClick={handleMessageClick}>
            
            <div className="inner-border">
                {!isAdd && <img src={avatar} alt="avatar" className="avatar" />}
                <div className="content">
                    <div className="name">{name}</div>
                    {phone && <div className="phone">{phone}</div>}
                    <div className="message">{message}</div>
                    <div className="time">{time}</div>
                </div>
                {count > 0 && <div className="badge">{count}</div>}
                {isAdd && <FaPlus className="add-icon" />}
            </div>
        </div>
    );
};

export default MessageItem;


