import React, { Component } from 'react';
import { Avatar, Popover } from 'antd';

class PersonInfo extends Component {
    render() {
        const members = this.props.members.map(function(value) {
            return (
                <p key={value}>{value}</p>
            );
        });

        const content = <div>{members}</div>;

        return (
            <div className='main-top'>
                <Avatar size={48} icon="team" style={{marginRight: '15px'}}/>
                <div className='info'>
                    <span className='info-name'>
                        {this.props.name}
                    </span>
                    <span className='status-or-number' style={{cursor: 'pointer'}}>
                        <Popover title="Danh sách" content={content} trigger="hover">
                            {this.props.members.length} thành viên
                        </Popover>
                    </span>
                </div>
            </div>
        );
    }
}

export default PersonInfo;