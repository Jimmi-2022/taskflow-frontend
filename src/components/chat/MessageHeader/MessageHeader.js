import React from 'react';
import './MessageHeader.scss';

const MessageHeader = () => {
    return (
        <div className="message-header">
            <div className="message-header__info">
                <div className="message-header__avatar"><img src='/actor-4.png' alt="actor-4"/>
                </div>
                <div className="message-header__text">
                <h2 className="message-header__title">Landing page revamp</h2>
                    <p className="message-header__status">Sergio is Typing...</p>
                </div>
            </div>
            <div className="message-header__actions">
                {/* Add icons or other elements here */}
            </div>
        </div>
    );
};

export default MessageHeader;

