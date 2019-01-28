import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';

class PersonInfo extends Component {
    render() {
        return (
            <div className='main-top'>
                {this.props.isgroup ?
                    <Avatar size={48} icon="team" style={{marginRight: '15px'}}/>:
                    <Avatar size={48} icon="user" style={{marginRight: '15px'}}/>}
                
                <div className='info'>
                    <span className='info-name'>
                        {this.props.chatView}
                    </span>
                    <span className='status-or-number'>
                        {this.props.online ? 
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize: '1.2em'}} />: 
                        <Icon type="minus-circle" theme="twoTone" twoToneColor="#887a88" style={{fontSize: '1.2em'}} />}
                        {this.props.online? " Đang hoạt động" : " Chưa online"}
                    </span>
                </div>
            </div>
        );
    }
}

export default PersonInfo;

// {/* <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize: '1.2em'}} /> : 
//                        <Icon type="minus-circle" theme="twoTone" twoToneColor="#887a88" style={{fontSize: '1.2em'}} /> */}