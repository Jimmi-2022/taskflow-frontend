import React, {useState} from 'react';
import MessageHeader from './MessageHeader/MessageHeader';
import MessageItems from './MessageItems/MessageItems';
import MessageInput from './MessageInput/MessageInput';
import './Chat.scss';
import BadgeLine from './BadgeLine/BadgeLine';
import Scrollbars from "react-custom-scrollbars";

const initialMessages  = [
    {
        type: 'your',
        avatar: "/actor-1.png",
        name: "Sergio Rabada",
        time: "8:16 PM",
        message: "Made a design concept for the first three blocks - https://link",
        image: "path/to/image1.jpg"
    },
    {
        type: 'my',
        avatar: "/actor-2.png",
        name: "Alex Smith",
        time: "8:20 PM",
        message: "Hello Roberto. Thank you for the beautiful web design ahead schedule. I will review and send feedback within two days"
    },
    {
        type: 'your',
        avatar: "/actor-3.png",
        name: "Sergio Rabada",
        time: "8:22 PM",
        message: "Okay. I will wait for your feedback"
    },
    {
        type: 'my',
        avatar: "/actor-4.png",
        name: "Alex Smith",
        time: "8:24 PM",
        message: "Okay. I will call"
    }
];

const Chat = () => {
    const [messages, setMessages] = useState(initialMessages);

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <Scrollbars
            className="chat"
            style={{height: 'calc(100vh - 138px)'}}
            renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
        >
            <MessageHeader />
            <BadgeLine text="Today" />
            <div className="chat__messages">
                {messages.map((message, index) => (
                    <MessageItems
                        key={index}
                        avatar={message.avatar}
                        name={message.name}
                        time={message.time}
                        message={message.message}
                        image={message.image}
                        type={message.type}
                    />
                ))}
            </div>
            <MessageInput onSendMessage={handleSendMessage}/>
        </Scrollbars>
    );
};

export default Chat;
