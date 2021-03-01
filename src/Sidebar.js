import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton, Avatar} from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@ant-design/icons';
import SidebarChat from "./SidebarChat"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <IconButton ><Avatar src="https://i.pinimg.com/originals/87/5e/65/875e656ce9308343ea72e67d5c79f282.jpg"/></IconButton>
                <div className="siderbar__headerRight">
                   <IconButton ><DonutLargeIcon /></IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start a new chat" type="text"></input>
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar
