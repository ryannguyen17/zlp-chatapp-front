import React, { Component } from 'react';

class MyMessage extends Component {
    render() {
        return (
            <div className='msg my-msg'>
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

export default MyMessage;