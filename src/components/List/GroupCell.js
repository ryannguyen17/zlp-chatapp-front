import React, { Component } from 'react';
import { Avatar } from 'antd';

class GroupCell extends Component {
    render() {
        return (
            <div className='cell'>
                <Avatar size={48} icon="team" />
                <div className='info'>
                    <span className='display-name'>Hội Cô Đơn</span>
                    <span className='lastest-msg'>ashdjasdasdasdasdasdasdasdasdasdasdasd</span>
                </div>
            </div>
        );
    }
}

export default GroupCell;