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

        </div>
    )
}

export default Chat
