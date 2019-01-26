import React, { Component } from 'react'
import ChatInfo from '../ChatInfo/ChatInfo';
import ChatHistory from '../ChatHistory/ChatHistory';
import ChatArea from '../ChatArea/ChatArea';

class ChatMain extends Component {
    render() {
        return (
            <div className='app-main'>
                <ChatInfo />
                <ChatHistory />
                <ChatArea />
            </div>
        )
    }
}

export default ChatMain;