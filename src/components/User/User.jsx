import React from "react";
import "./User.css";
import * as api from "../../api";
import { useState } from "react";
import CallsList from "./CallsList"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [chats, setchats] = useState(null);
  
  const user = JSON.parse(localStorage.getItem("Profile-Spam-Jam"));
  const navigate = useNavigate()

  useEffect(() => {
    !user && navigate("/") 
    api.getChats(setchats);
  })

  return (
    <div className="main-bar">
      <p>
        Your virtual number is +1 2343 4343. Make your call forward to this
        number.
      </p>
      <h1>Your Calls</h1>
      {chats ? (
        <>
          <div style={{marginBottom: "0.5rem"}} className="main-bar-header">
            <p className="results">{chats?.length} calls</p>
          </div>
          <CallsList CallsList={chats} />
        </>
      ) : (
        <h4 style={{ paddingLeft: "0.25rem" }}>Loading...</h4>
      )}
    </div>
  );
};

export default User;
