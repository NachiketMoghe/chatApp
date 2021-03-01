import React from 'react'
import { Avatar } from 'react-chat-engine';
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://wallpapercave.com/wp/wp5047303.jpg" />
            <div className="sidebarInfo">
            <h4>Nilesh Sir Fintech</h4>
            <p>Hello Nachiket</p>
            </div>
        </div>
    )
}

export default SidebarChat
