import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import BadgeLine from "./BadgeLine/BadgeLine";
import "./Chat.scss";
import MessageHeader from "./MessageHeader/MessageHeader";
import MessageInput from "./MessageInput/MessageInput";
import MessageItems from "./MessageItems/MessageItems";

const Chat = ({ selectedChat }) => {
  // ✅ Генерируем уникальный ключ для хранения сообщений конкретного чата
  const chatKey = selectedChat ? `chat_${selectedChat.id}` : null;
  const [messages, setMessages] = useState([]);

  // ✅ Загружаем сообщения из localStorage при загрузке чата
  useEffect(() => {
    if (!chatKey) {
      setMessages([]); // Очищаем сообщения при смене чата
      return;
    }

    try {
      const savedMessages = localStorage.getItem(chatKey);
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
        console.log(
          `✅ Загружены сообщения для ${chatKey}:`,
          JSON.parse(savedMessages),
        );
      } else {
        setMessages([]); // Новый чат без сообщений
      }
    } catch (error) {
      console.error("❌ Ошибка загрузки сообщений:", error);
      setMessages([]); // Если произошла ошибка, сбрасываем сообщения
    }
  }, [chatKey]); // ✅ Следим за изменением `chatKey`, а не `selectedChat`

  // ✅ Сохраняем сообщения в localStorage при их изменении
  useEffect(() => {
    if (!chatKey) return; // Если нет ключа, не выполняем сохранение
    localStorage.setItem(chatKey, JSON.stringify(messages));
    console.log(`💾 Сохранены сообщения для ${chatKey}:`, messages);
  }, [messages, chatKey]);

  // ✅ Функция для отправки новых сообщений
  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => {
      const updatedMessages = [
        ...prevMessages,
        { ...newMessage, id: Date.now() },
      ];
      return updatedMessages;
    });
  };

  // ✅ Функция для редактирования сообщений
  const handleEditMessage = (id, newText) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, message: newText } : msg,
      ),
    );
  };

  // ✅ Если чат не выбран, показываем заглушку
  if (!selectedChat) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-5">
        <p className="text-lg font-bold text-gray-600">
          Select a chat to start messaging
        </p>
      </div>
    );
  }

  return (
    <div className="chat">
      <MessageHeader selectedChat={selectedChat} />
      <BadgeLine text="Today" />
      <Scrollbars
        className="chat"
        style={{ height: "calc(100vh - 380px)" }}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
      >
        <div className="chat__messages">
          {messages.length === 0 ? (
            <div className="empty-container">
              <div className="empty-chat">
                <img
                  src="/no-messages.png"
                  alt="No messages"
                  className="empty-chat__image"
                />
                <p className="empty-chat__text">No messages here yet...</p>
                <p className="empty-chat__subtext">
                  Send a message or click on the greeting below
                </p>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <MessageItems
                key={message.id || index} // ✅ Используем index, если message.id не существует
                id={message.id || index} // ✅ Гарантируем, что id всегда будет уникальным
                avatar={message.avatar}
                name={message.name}
                time={message.time}
                message={message.message}
                type={message.type}
                image={message.image}
                onEditMessage={handleEditMessage} // ✅ Передаём функцию редактирования
              />
            ))
          )}
        </div>
      </Scrollbars>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
