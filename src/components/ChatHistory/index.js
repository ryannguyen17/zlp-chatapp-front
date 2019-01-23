import React, { Component } from 'react';

import MyMessage from './MyMessage';
import FriendMessage from './FriendMessage';

class ChatHistory extends Component {
    render() {
        return (
            <div className='main-content'>
                <MyMessage />
                <FriendMessage />
                <FriendMessage />
                <FriendMessage />
                <FriendMessage />
                <MyMessage />
                <MyMessage />
                <MyMessage />
            </div>
        );
    }
}

export default ChatHistory;