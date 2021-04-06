import { SearchOutlined } from '@ant-design/icons'
import { IconButton } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import { AttachFile } from '@material-ui/icons'
import React from 'react'
import { Avatar } from 'react-chat-engine'
import "./Chat.css"
function Chat() {
    return (
        <div className="Chat">
            <div className="chat_header">
            <IconButton><Avatar></Avatar></IconButton> 
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>
            <div className="chat_headerRight">
            <IconButton><SearchOutlined /></IconButton> 
            <IconButton><AttachFile /></IconButton> 
            <IconButton><MoreVert /></IconButton> 

            </div>
            </div>
            <div className="chat_body">
                <p className="chat_text">
                    <span className="chat_name">
                        Nilesh Sir</span>Hello Nachiket.
                    <span className="chat_timestamp">
                        {
                        new Date().toLocaleString()
                        }
                    </span>
                    </p>

                <p className="chat_text chat_receiver">
                    <span className="chat_name">
                        You</span>Hi Sir.
                    <span className="chat_timestamp">
                        {
                        new Date().toLocaleString()
                        }
                    </span>
                </p>
            </div>
            <form>
            <div className="chat_search">
                <div className="chat_searchContainer">
                    <input placeholder="Type a message" type="text"></input>
                    <button type="submit">
                    Submit
                    </button>
                </div>
            </div> 
            
            </form>
        </div>
    )
}

export default Chat
