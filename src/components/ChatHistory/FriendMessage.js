import React, { Component } from 'react';

class FriendMessage extends Component {
    render() {
        return (
            <div>
                <div className='msg-user'>
                    {this.props.displayName}                
                </div>
                <div className='msg-content'>
                    {this.props.content}
                </div>
                <div className='msg-time'>
                    {this.props.time_f}
                </div>
            </div>
        );
    }
}

export default FriendMessage;