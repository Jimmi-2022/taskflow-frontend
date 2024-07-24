import React from 'react';
import './MessageInput.scss';

const MessageInput = () => {
    return (
        <div className="message-input">
            <input
                type="text"
                placeholder="Type a message"
                className="message-input__field"
            />
            <button className="message-input__send">Send</button>
        </div>
    );
};

export default MessageInput;

