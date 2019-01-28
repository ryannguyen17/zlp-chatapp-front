import React, { Component } from 'react'
import ChatInfo from './ChatInfo/ChatInfo';
import ChatHistory from './ChatHistory/ChatHistory';
import ChatArea from './ChatArea/ChatArea';
import { connect } from 'react-redux';

class ChatMain extends Component {

    render() {
        return (
            <div className='app-main'
                style={!this.props.ready ? { display: 'none' } : {}}>
                <ChatInfo />
                <ChatHistory />
                <ChatArea />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ready: state.info.ready
});

export default connect(mapStateToProps)(ChatMain);