import React, { Component } from 'react';

import MyMessage from './MyMessage';
import FriendMessage from './FriendMessage';

const data = {
    user : "thoai nguyen",
    messages: [
        {
            id : 1,
            sender: "thoai nguyen",
            content: "Hoc bai chua",
            time: "01/02/19 12:68 pm"
        }
    ]
}

class ChatHistory extends Component {

    render() {
        return (
            <div className='main-content'>
                {
                    data.messages.map(
                        message => {
                            const { id, sender, content, time } = message;
                            return message.sender === data.user ? 
                                <MyMessage key={id} sender={sender} content={content} time={time} /> :
                                <FriendMessage key={id} sender={sender} content={content} time={time} />
                        }
                    )
                }
            </div>
        );
    }
}

export default ChatHistory;