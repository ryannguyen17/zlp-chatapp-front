import React, { Component } from 'react';

class MyMessage extends Component {
    render() {
        return (
            <div className='msg my-msg'>
                <div className='msg-user'>
                    me                
                </div>
                <div className='msg-content'>
                    how are you?asdsadsadasdsada sd sad sad sa d sad sa sd 
                </div>
                <div className='msg-time'>
                    Tues, 2/5/2019
                </div>
            </div>
        );
    }
}

export default MyMessage;