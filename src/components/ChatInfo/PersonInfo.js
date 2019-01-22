import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';

class PersonInfo extends Component {
    render() {
        return (
            <div className='main-top'>
                <Avatar size={48} icon="user" style={{marginRight: '15px'}}/>
                <div className='info'>
                    <span className='info-name'>
                        Nguyễn Văn Nghĩa
                    </span>
                    <span className='status-or-number'>
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{marginRight: '5px'}}/>
                        Đang hoạt động
                    </span>
                </div>
                <div className='more-actions'>
                    <Icon type="setting" theme="filled"  style={{fontSize: '1.5em'}}/>
                </div>
            </div>
        );
    }
}

export default PersonInfo;

{/* <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize: '1.2em'}} /> : 
                        <Icon type="minus-circle" theme="twoTone" twoToneColor="#887a88" style={{fontSize: '1.2em'}} /> */}