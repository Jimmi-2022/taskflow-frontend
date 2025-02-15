import React, { useState } from "react";
import "./Messages.scss";
// import SearchBar from '../../components/MessagesPage/SearchBar/SearchBar';
import Scrollbars from "react-custom-scrollbars";
import MessageItem from "../../components/Messages/MessageItem/MessageItem";
import Chat from "../Chat/Chat";
import Header from "../Header/Header";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import "../Scrollbars/Scrollbars.scss";
import { generalSections, projectSections } from "./MessagesData";
import Tabs from "./Tabs/Tabs";

const Messages = () => {
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [activeTab, setActiveTab] = useState("General");
  const [selectedChat, setSelectedChat] = useState(null);

  const currentSections =
    activeTab === "General" ? generalSections : projectSections;

  const tabs = [{ label: "General" }, { label: "Projects" }];

  const handleSelectMessage = (message) => {
    setSelectedMessageId(message.id);
    setSelectedChat(message); //
  };

  return (
    <div className="MessagesPage">
      <div className="messages-page">
        <div className="message-list">
          <div className="message-list-header">
            <h2>Messages</h2>
          </div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          <Scrollbars
            style={{ height: "calc(100vh - 195px)" }}
            renderThumbVertical={(props) => (
              <div {...props} className="thumb-vertical" />
            )}
          >
            {currentSections.map((section) => (
              <div key={section.title} className="section">
                <h3>{section.title}</h3>
                {section.data.map((msg) => (
                  <MessageItem
                    key={msg.id}
                    {...msg}
                    selectedMessageId={selectedMessageId}
                    setSelectedMessageId={() => handleSelectMessage(msg)}
                  />
                ))}
              </div>
            ))}
          </Scrollbars>
        </div>
      </div>
      <div className="messages__section">
        <Header />
        <div className="messages__block">
          {selectedChat ? (
            <Chat selectedChat={selectedChat} />
          ) : (
            <div className="chat">
              <p>Select a message to start chatting</p>
            </div>
          )}
          <ProfileSidebar />
        </div>
      </div>
    </div>
  );
};

export default Messages;
