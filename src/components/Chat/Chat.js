import React, { useEffect, useState } from 'react'
import Scrollbars from "react-custom-scrollbars"
import BadgeLine from './BadgeLine/BadgeLine'
import './Chat.scss'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageInput from './MessageInput/MessageInput'
import MessageItems from './MessageItems/MessageItems'

const Chat = ({ selectedChat }) => {
    // Инициализация `messages` как пустого массива
    const [messages, setMessages] = useState([]);

    // Обновление `messages` при изменении `selectedChat`
    useEffect(() => {
        if (selectedChat) {
            setMessages([
                {
                    type: 'your',
                    avatar: selectedChat.avatar || '/default-avatar.png',
                    name: selectedChat.name,
                    time: selectedChat.time,
                    message: selectedChat.message,
                },
            ]);
        }
    }, [selectedChat]);

    const handleSendMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    if (!selectedChat) {
        return (
            <div className="chat-placeholder">
                <p>Select a message to view the chat</p>
            </div>
        );
    }

    return (
        <div className="chat">
            <MessageHeader selectedChat={selectedChat} />
            <BadgeLine text="Today" />
            <Scrollbars
                className="chat"
                style={{ height: 'calc(100vh - 380px)' }}
                renderThumbVertical={(props) => <div {...props} className="thumb-vertical" />}
            >
                <div className="chat__messages">
                    {messages.map((message, index) => (
                        <MessageItems
                            key={index}
                            avatar={message.avatar}
                            name={message.name}
                            time={message.time}
                            message={message.message}
                            type={message.type}
                        />
                    ))}
                </div>
            </Scrollbars>
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default Chat;
