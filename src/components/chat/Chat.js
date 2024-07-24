import React from 'react';
import MessageHeader from './MessageHeader/MessageHeader';
import MessageItems from './MessageItems/MessageItems';
import MessageInput from './MessageInput/MessageInput';
import './Chat.scss';

const messages = [
    {
        avatar: "/actor-1.png",
        name: "Sergio Rabada",
        time: "8:16 PM",
        message: "Made a design concept for the first three blocks - https://link",
        image: "path/to/image1.jpg"
    },
    {
        avatar: "/actor-2.png",
        name: "Alex Smith",
        time: "8:20 PM",
        message: "Hello Roberto. Thank you for the beautiful web design ahead schedule. I will review and send feedback within two days"
    },
    {
        avatar: "/actor-3.png",
        name: "Sergio Rabada",
        time: "8:22 PM",
        message: "Okay. I will wait for your feedback"
    },
    {
        avatar: "/actor-4.png",
        name: "Alex Smith",
        time: "8:24 PM",
        message: "",
        image: "path/to/audio.jpg"
    }
];

const Chat = () => {
    return (
        <div className="chat">
            <MessageHeader />
            <div className="chat__messages">
                {messages.map((message, index) => (
                    <MessageItems
                        key={index}
                        avatar={message.avatar}
                        name={message.name}
                        time={message.time}
                        message={message.message}
                        image={message.image}
                    />
                ))}
            </div>
            <MessageInput />
        </div>
    );
};

export default Chat;
