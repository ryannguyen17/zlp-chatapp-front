import React, { Component } from 'react';

class FriendMessage extends Component {
    render() {
        return (
            <div className='msg friend-msg'>
                <div className='msg-user'>
                    me                
                </div>
                <div className='msg-content'>
                    how are you?asdsadsadasdsada sd sad sad sa d sad sa sd asdsadasdasd as dsa d sad sa d sa d s as da sd as da s das d as d as da s d as d
                </div>
                <div className='msg-time'>
                    Tues, 2/5/2019
                </div>
            </div>
        );
    }
}

export default FriendMessage;