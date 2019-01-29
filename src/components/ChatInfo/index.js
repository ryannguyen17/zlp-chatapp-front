import React, { Component } from 'react';
import { connect } from 'react-redux';

import PersonInfo from './PersonInfo';

class ChatInfo extends Component {
    render() {
        return (
            <div>
                { this.props.chatWith.isPerson ? <PersonInfo username={this.props.chatWith.id} displayName={this.props.chatWith.detail} /> : <PersonInfo /> }
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        chatWith: state.chatWith
    }
}

export default connect(mapStateToProps, null)(ChatInfo);