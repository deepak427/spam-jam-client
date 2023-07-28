// src/Popup.js

import React from "react";
import "./Popup.css";

const Popup = ({ onClose, conversationObject }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {conversationObject.map((message) => (
          <div key={message.content[0,5]}>
            <h3>{message.role}:</h3>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup;
