import React from "react";
import moment from "moment";
import "./Call.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../Popup/Popup";

const Call = (call) => {
  const [showPopup, setShowPopup] = useState(false);

  const callDetails = call.call;
  var conversation = callDetails.chat.replace(/\n/g, "");

  const lastSecondIndex = conversation.length - 2;
  let stringArray = conversation.split("");
  stringArray[lastSecondIndex] = "";

  conversation = stringArray.join("");

  const handleLinkClick = () => {
    setShowPopup(!showPopup);
  };

  const conversationObject = JSON.parse(conversation);
  return (
    <div className="call-container">
      <div className="detail-container">
        <h4>caller: </h4>
        <p>{callDetails.caller}</p>
      </div>
      <div className="detail-container">
        <h4>called: </h4>
        <p>{moment(callDetails.called_at).fromNow()}</p>
      </div>
      {conversation.length === 0 ? (
        <></>
      ) : (
        <>
          <Link to="#popup" className="reason-link" onClick={handleLinkClick}>
            {conversationObject[0].content}
          </Link>
          {showPopup && (
            <Popup
              onClose={handleLinkClick}
              conversationObject={conversationObject}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Call;
