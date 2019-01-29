import React, { Component } from 'react';
import { Avatar } from 'antd';

class PersonInfo extends Component {
    render() {
        return (
            <div className='main-top'>
                <Avatar size={48} icon="user" style={{marginRight: '15px'}}/>
                <div className='info'>
                    <span className='info-name'>
                        {this.props.displayName}
                    </span>
                    <span className='status-or-number'>
                        {this.props.username}
                    </span>
                </div>
            </div>
        );
    }
}

export default PersonInfo;

// <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{marginRight: '5px'}}/>

// {/* <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize: '1.2em'}} /> : 
//                        <Icon type="minus-circle" theme="twoTone" twoToneColor="#887a88" style={{fontSize: '1.2em'}} /> */}