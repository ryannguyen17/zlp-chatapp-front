import React, { Component } from 'react';
import { Avatar } from 'antd';

class GroupCell extends Component {
    render() {
        return (
            <div className='cell' onClick={() => this.props.clickGroup(this.props.acc)}>
                <Avatar size={48} icon="team" />
                <div className='info'>
                    <span className='display-name'>{this.props.groupName}</span>
                    <span className='lastest-msg'>{this.props.lastestMsg}</span>
                </div>
            </div>
        );
    }
}

export default GroupCell;