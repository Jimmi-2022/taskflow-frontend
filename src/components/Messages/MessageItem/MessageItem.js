import React from 'react';
import './MessageItem.scss';
import { FaPlus } from 'react-icons/fa';

const MessageItem = ({ name, phone, message, time, count, highlight, avatar, isAdd }) => {
    return (
        <div className={`message-item ${highlight ? 'highlight' : ''}`}>
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
    );
};

export default MessageItem;


