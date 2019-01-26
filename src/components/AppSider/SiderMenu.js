import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';


class SiderMenu extends Component {
    render() {
        return (
            <div className="sider-menu">
                <span className='menu-item menu-item-user'>
                    <Avatar size={64} icon="user" style={{ backgroundColor: '#87d068' }} />
                </span>
                <span className='menu-item'>
                    <Icon type="usergroup-add" style={{ fontSize: '36px' }} />
                </span>
                <span className='menu-item'>
                    <Icon type="info" style={{ fontSize: '36px' }} />
                </span>
                <span className='menu-item logout'>
                    <Icon type="logout" style={{ fontSize: '36px' }} />
                </span>
            </div>
        );
    }
}


export default SiderMenu;
