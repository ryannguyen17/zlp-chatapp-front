import React, { Component } from 'react';

import { connect } from 'react-redux';
import PersonInfo from './PersonInfo';



class ChatInfo extends Component {
    render() {
        return (
            <PersonInfo chatView={this.props.chatView} 
                online={this.props.online} 
                isgroup={this.props.isgroup}/>
        );
    }
}

const mapStateToProps = (state) => ({
    chatView : state.info.chatView,
    online : state.info.chatViewStatus,
    isgroup : state.info.isGroup
});

export default connect(mapStateToProps)(ChatInfo);