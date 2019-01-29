import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import MyMessage from './MyMessage';
import FriendMessage from './FriendMessage';

class ChatHistory extends Component {
    render() {
        const that = this;
        let elements = this.props.chatHistory.map(function(value) {
            if(value.sender_u === that.props.currentUser.username) {
                return (
                    <div className='msg my-msg' key={value._id}>
                        <MyMessage content={value.content} time_f={moment(value.time).format('D/M/YYYY, h:mm:ss a')} />
                    </div>
                );
            } else {
                return (
                    <div className=' msg friend-msg' key={value._id}>
                        <FriendMessage displayName={value.receiver_d} content={value.content} time_f={moment(value.time).format('D/M/YYYY, h:mm:ss a')} />
                    </div>
                );
            }
        });

        return (
            <div className='main-content'>
                {elements}
            </div>
        );
    }
}

let mapDispatchToProps = (state) => {
    return {
        currentUser: state.currentUser,
        chatWith: state.chatWith,
        chatHistory: state.chatHistory
    }
}

export default connect(mapDispatchToProps, null)(ChatHistory);