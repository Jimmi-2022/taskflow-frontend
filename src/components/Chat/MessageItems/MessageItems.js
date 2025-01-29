import React from 'react';
import './MessageItems.scss';
import cn from 'classnames';

const MessageItems = ({ type, avatar, name, time, message, image }) => {
    return (
        <div className={cn('message-items', {'my-message': type === 'my', 'your-message': type === 'your'})}>
            <img src={avatar} alt={name} className="message-items__avatar"/>
            <div className="message-items__content">
                <div className="message-items__header">
                    <h3 className="message-items__name">{name}</h3>
                    <span className="message-items__time">{time}</span>
                </div>
                <p className="message-items__text">{message}</p>
                {image && (
                    <div className="message-items__image">
                        <img src={image} alt="" className="rounded"/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageItems;

