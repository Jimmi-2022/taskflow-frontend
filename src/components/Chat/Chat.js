import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import BadgeLine from './BadgeLine/BadgeLine'
import './Chat.scss'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageInput from './MessageInput/MessageInput'
import MessageItems from './MessageItems/MessageItems'

const Chat = ({ selectedChat }) => {
    const [messages, setMessages] = useState([]);

    const chatKey = selectedChat ? `chat_${selectedChat.id}` : null;

    useEffect(() => {
        if (!chatKey) return;

        try {
            const savedMessages = localStorage.getItem(chatKey);
            setMessages(savedMessages ? JSON.parse(savedMessages) : []);
        } catch (error) {
            console.error('Error loading messages:', error);
            setMessages([]); 
        }
    }, [chatKey]); 

    useEffect(() => {
        if (!chatKey || messages.length === 0) return;
        localStorage.setItem(chatKey, JSON.stringify(messages));
    }, [messages, chatKey]); 

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
