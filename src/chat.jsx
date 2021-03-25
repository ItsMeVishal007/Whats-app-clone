import { Avatar, Input } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { SearchOutlined, MoreVert , AttachFile } from "@material-ui/icons";
import { Icon, IconButton } from "@material-ui/core";
import "./chat.css";
import  InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input , setInput] = useState('')
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  function sendMessage(e){
   e.preventDefault();
   console.log("you typed >>>>>" , input);

   setInput('');
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="Chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at 2:30 pm</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
          <p className={`chat_message ${true && 'chat_reciever'}`}>
              <span className="chat_name">Hey Man</span>
              <span className='chat_timestamp'>3:00</span>
          </p>
      </div>
      <div className="chat_footer">
          <InsertEmoticonIcon />
              <form>
                  <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
                  <button type='submit' onClick={sendMessage}>Send a message</button>
              </form>
          <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
