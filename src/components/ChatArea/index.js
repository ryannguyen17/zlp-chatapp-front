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

        if(this.props.chatWith.isPerson === true) {
            let msg = {
                sender_u: this.props.currentUser.username,
                sender_d: this.props.currentUser.display_name,
                receiver_u: this.props.chatWith.id,
                receiver_d: this.props.chatWith.detail,
                isText: true,
                content: this.state.message
            }
            
            axios.post('http://127.0.0.1:8000/api/send-message', msg);
            this.props.socket.emit('personal-message', msg);
        } else if (this.props.chatWith.isPerson === false) {
            let msg = {
                sender_u: this.props.currentUser.username,
                sender_d: this.props.currentUser.display_name,
                group_id: this.props.chatWith.id,
                group_name: this.props.chatWith.detail.name,
                isText: true,
                content: this.state.message
            }
            axios.post('http://127.0.0.1:8000/api/send-group-message', msg);
            this.props.socket.emit('group-message', msg);
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

    handlePicture = (e) => {
        const that = this;
        let file = e.target.files[0];
        let fr = new FileReader();
        fr.onload = function(loadEvent) {
            console.log(loadEvent.target.result);

            if(that.props.chatWith.isPerson === true) {
                let msg = {
                    sender_u: that.props.currentUser.username,
                    sender_d: that.props.currentUser.display_name,
                    receiver_u: that.props.chatWith.id,
                    receiver_d: that.props.chatWith.detail,
                    isText: false,
                    content: loadEvent.target.result
                }
                axios.post('http://127.0.0.1:8000/api/send-message', msg);
                that.props.socket.emit('personal-message', msg);
            } else if (that.props.chatWith.isPerson === false) {
                let msg = {
                    sender_u: that.props.currentUser.username,
                    sender_d: that.props.currentUser.display_name,
                    group_id: that.props.chatWith.id,
                    group_name: that.props.chatWith.detail.name,
                    isText: false,
                    content: loadEvent.target.result
                }
                axios.post('http://127.0.0.1:8000/api/send-group-message', msg);
                that.props.socket.emit('group-message', msg);
            }
        }

        if(file !== undefined) {
            fr.readAsDataURL(file);
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
                <label className='chat-upload' htmlFor='upload-pic'>
                </label>
                <input type="file" name="photo" id="upload-pic" style={{opacity: '0', position: 'absolute', zIndex: '-1'}} onChange={this.handlePicture} />
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