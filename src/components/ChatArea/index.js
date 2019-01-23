import React, { Component } from 'react';

class ChatArea extends Component {
    render() {
        return(
            <div className='main-bottom'>
                <div className='chat-input'>
                    <form>
                        <textarea rows={1}>
                        </textarea>
                        <button type='button'>Gửi</button>
                    </form>
                </div>
                <div className='chat-upload'>
                    
                </div>
            </div>
        );
    }
}

export default ChatArea;