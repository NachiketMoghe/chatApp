import React from 'react'
import { Avatar } from 'react-chat-engine';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <div className="avatar"><Avatar src="https://wallpapercave.com/wp/wp5047303.jpg" /></div>
            <div className="sidebarInfo">
            <h3>Nilesh Sir Fintech</h3>
            <p>Last Text</p>
            </div>
        </div>
    )
}

export default SidebarChat
