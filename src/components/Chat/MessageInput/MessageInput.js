import React, {useState} from 'react';
import './MessageInput.scss';

const MessageInput = ({ onSendMessage })  => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendClick = () => {
        if (inputValue.trim()) {
            const newMessage = {
                type: 'my',
                avatar: "/actor-4.png", // замените на текущего пользователя
                name: "Alex Smith", // замените на имя текущего пользователя
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                message: inputValue
            };
            onSendMessage(newMessage);
            setInputValue('');
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                placeholder="Type a message"
                value={inputValue}
                onChange={handleInputChange}
                className="message-input__field"
            />
            <button onClick={handleSendClick} className="message-input__send">Send</button>
        </div>
    );
};

export default MessageInput;

