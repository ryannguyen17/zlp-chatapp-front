import React, { Component } from 'react';
import { connect } from 'react-redux';

import PersonInfo from './PersonInfo';
import GroupInfo from './GroupInfo';

class ChatInfo extends Component {
    render() {
        if(this.props.chatWith.isPerson === null || this.props.chatWith.isPerson === undefined) {
            return <div></div>;
        } else if(this.props.chatWith.isPerson === true) {
            return (
                <div>
                    <PersonInfo username={this.props.chatWith.id} displayName={this.props.chatWith.detail} />
                </div>
            );
        } else if (this.props.chatWith.isPerson === false) {
            return (
                <div>
                    <GroupInfo id={this.props.chatWith.id} name={this.props.chatWith.detail.name} members={this.props.chatWith.detail.members} />
                </div>
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        chatWith: state.chatWith
    }
}

export default connect(mapStateToProps, null)(ChatInfo);