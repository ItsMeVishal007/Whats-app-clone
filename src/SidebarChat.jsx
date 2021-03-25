import { Avatar } from "@material-ui/core";
import { Icon, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  function createChat() {
    const chatName = prompt("Enter the new Chat");

    if (chatName) {
      console.log(chatName);
    } else {
      console.log("Sorry there was some error");
    }
  }

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h1>Add new Chat</h1>
    </div>
  );
}

export default SidebarChat;
