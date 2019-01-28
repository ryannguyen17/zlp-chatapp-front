import React, { Component } from 'react';
import GroupCell from './GroupCell';
import { changeChatView } from '../../../actions/actions';
import { connect } from 'react-redux';

class Groups extends Component {
    render() {
        let render = [];
        let groups = this.props.groups;
        for (let id in groups) {
            const groupName = groups[id].groupName;
            const lastestMsg = groups[id].lastestMsg;
            render.push(
                <li key={id}>
                    <GroupCell groupName={groupName}
                        lastestMsg={lastestMsg}
                        acc={id}
                        clickGroup={acc => this.props.dispatch(changeChatView(acc,true,groupName,true))} />
                </li>
            );
        }
        return (
            <ul className='list'>{render}</ul>
        );
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups
});

export default connect(mapStateToProps)(Groups);