import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../../actions/actions';
import  moment  from 'moment';
class ChatArea extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.sendMessage = this.sendMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    sendMessage(e) {
        e.preventDefault();
        const content = this.myRef.current.value.trim();
        if (content === '') return;
        const object = {
            p_sender: this.props.info.userAcc,
            p_content: content,
            p_receiver: this.props.info.chatAcc,
            p_isgroup: this.props.info.isGroup,
            p_time: moment().format('MM/DD/YYYY hh:mm A')
        };
        this.props.addMsg(object);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            this.sendMessage(e);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className='main-bottom'>
                <div className='chat-input'>
                    <form onSubmit={this.sendMessage}>
                        <textarea rows={1} ref={this.myRef} onKeyPress={this.handleKeyPress}>
                        </textarea>
                        <button type='submit'>Gửi</button>
                    </form>
                </div>
                <div className='chat-upload'>

                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => ({
    info : state.info
});

const mapDispatchToProps = (dispatch) => ({
    addMsg: msg => dispatch(addMessage(msg))
})


export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);