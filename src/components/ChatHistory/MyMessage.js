import React, { Component } from 'react';

class MyMessage extends Component {
    render() {
        return (
            <div>
                <div className='msg-user'>
                    me                
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

export default MyMessage;