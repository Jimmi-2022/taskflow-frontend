import React from 'react';
import './MessageItems.scss';

const MessageItems = ({ avatar, name, time, message, image }) => {
    return (
        <div className="message-items">
            <img src={avatar} alt={name} className="message-items__avatar" />
            <div className="message-items__content">
                <div className="message-items__header">
                    <h3 className="message-items__name">{name}</h3>
                    <span className="message-items__time">{time}</span>
                </div>
                <p className="message-items__text">{message}</p>
                {image && (
                    <div className="message-items__image">
                        <img src={image} alt="" className="rounded" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageItems;

