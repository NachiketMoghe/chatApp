import './App.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import Sidebar from './Sidebar';
import Chat from './Chat';
function App() {
  return (
    <div className="app">
        <div className="app_body">
          <Sidebar />
          <Chat />
        </div>  
    
    </div>


  );
}

export default App;
