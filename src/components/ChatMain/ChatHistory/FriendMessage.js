import React, { Component } from 'react';

class FriendMessage extends Component {
    render() {
        return (
            <div className='msg friend-msg'>
                <div className='msg-user'>
                    {this.props.sender}                
                </div>
                <div className='msg-content'>
                    {this.props.content}
                </div>
                <div className='msg-time'>
                    {this.props.time}
                </div>
            </div>
        );
    }
}

export default FriendMessage;