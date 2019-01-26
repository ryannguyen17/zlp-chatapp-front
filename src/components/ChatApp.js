import React, { Component } from 'react';

import AppSider from './AppSider/AppSider';
import ChatMain from './ChatMain/ChatMain';

class ChatApp extends Component {
    render() {
        return (
            <div className='chat-app'>
                <AppSider />
                <ChatMain />
                <div className='clearfix'></div>
            </div>
        );
    }
}

export default ChatApp;