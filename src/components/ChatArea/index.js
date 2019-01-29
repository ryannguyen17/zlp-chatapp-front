import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ChatArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.props.chatWith.isPerson) {
            let msg = {
                sender_u: this.props.currentUser.username,
                sender_d: this.props.currentUser.display_name,
                receiver_u: this.props.chatWith.id,
                receiver_d: this.props.chatWith.detail,
                isText: true,
                content: this.state.message
            }
            
            axios.post('http://127.0.0.1:8000/api/send-message', msg)
                .then(function(res) {

                });
        }

        this.setState({
            message: ''
        });
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            this.handleSubmit(e);
        }
    }

    render() {
        return(
            <div className='main-bottom'>
                <div className='chat-input'>
                    <form onSubmit={this.handleSubmit}>
                        <textarea rows={1} value={this.state.message} onChange={this.handleChange} onKeyDown={this.handleKeyDown}>
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

let mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        chatWith: state.chatWith
    }
}

export default connect(mapStateToProps, null)(ChatArea);