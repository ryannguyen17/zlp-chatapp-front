import React, { Component } from 'react';

import MyMessage from './MyMessage';
import FriendMessage from './FriendMessage';

import { connect } from 'react-redux';


class ChatHistory extends Component {

    constructor(props) {
        super(props)
        this.cView = React.createRef();
    }

    componentDidUpdate() {
        this.cView.current.scrollTop = this.cView.current.scrollHeight;
    }

    render() {
        
        const isGroup = this.props.isGroup;
        const groups  = this.props.groups;
        const persons = this.props.persons;
        const chatAcc = this.props.chatAcc;

        let lstMsg = isGroup ? groups[chatAcc].messages : persons[chatAcc].messages;

        return (
            <div className='main-content' ref={this.cView}>
                {
                    lstMsg && lstMsg.map(
                        msg => {
                            const { id, sender, content, time } = msg;
                            return msg.sender === this.props.userName ?
                                <MyMessage key={id} sender={sender} content={content} time={time} /> :
                                <FriendMessage key={id} sender={sender} content={content} time={time} />
                        }
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userAcc: state.info.userAcc,
    userName: state.info.userName,
    chatAcc: state.info.chatAcc,
    chatView: state.info.chatView,
    isGroup: state.info.isGroup,
    groups: state.groups,
    persons: state.persons
});

export default connect(mapStateToProps)(ChatHistory);