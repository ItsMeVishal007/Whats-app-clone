import { Avatar } from '@material-ui/core';
import React , {useState , useEffect} from 'react';
import './chat.css';

function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className='chat'>

            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className='Chat_headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at ...</p>
                </div>

                <div className="chat_headerRight">
                    
                </div>
            </div>

            <div className='chat_body'>

            </div>
            <div className='chat_footer'>

            </div>
            
        </div>
    )
}

export default Chat
