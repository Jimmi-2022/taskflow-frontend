import cn from "classnames";
import React, { useState } from "react";
import "./MessageItems.scss";

const MessageItems = ({
  type,
  avatar,
  name,
  time,
  message,
  image,
  id,
  onEditMessage,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  console.log("Received props:", { id, message, onEditMessage });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditMessage(id, editedMessage); // Передаем новое сообщение в Chat.js
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedMessage(message);
    setIsEditing(false);
  };

  return (
    <div
      className={cn("message-items", {
        "my-message": type === "my",
        "your-message": type === "your",
      })}
    >
      <img src={avatar} alt={name} className="message-items__avatar" />
      <div className="message-items__content">
        <div className="message-items__header">
          <h3 className="message-items__name">{name}</h3>
          <span className="message-items__time">{time}</span>
        </div>

        {isEditing ? (
          <div className="message-items__edit">
            <input
              type="text"
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              className="message-items__input"
            />
            <button
              className="message-items__btn save"
              onClick={handleSaveClick}
            >
              💾
            </button>
            <button
              className="message-items__btn cancel"
              onClick={handleCancelClick}
            >
              ❌
            </button>
          </div>
        ) : (
          <p className="message-items__text">{message}</p>
        )}

        {image && (
          <div className="message-items__image">
            <img src={image} alt="" className="rounded" />
          </div>
        )}
      </div>

      {!isEditing && type === "my" && (
        <button className="message-items__edit-btn" onClick={handleEditClick}>
          ✏️
        </button>
      )}
    </div>
  );
};

export default MessageItems;
