import React , { Component } from 'react';
import { Tabs, Avatar, Icon } from 'antd';

import Persons from './List/Persons';
import Groups from './List/Groups';
import ChatInfo from './ChatInfo';
import ChatHistory from './ChatHistory';
import ChatArea from './ChatArea';

const TabPane = Tabs.TabPane;

class ChatApp extends Component {
    render() {
        return (
            <div className='chat-app'>
                <div className='app-sider'>
                    <div className='sider-menu'>
                        <span className='menu-item menu-item-user'>
                            <Avatar size={64} icon="user" style={{backgroundColor: '#87d068'}}/>
                        </span>
                        <span className='menu-item'>
                            <Icon type="usergroup-add" style={{fontSize: '36px'}} />
                        </span>
                        <span className='menu-item'>
                            <Icon type="info" style={{fontSize: '36px'}} />
                        </span>
                        <span className='menu-item logout'>
                            <Icon type="logout" style={{fontSize: '36px'}} />
                        </span>
                    </div>
                    <div className='sider-list'>
                        <Tabs size={'large'} style={{textAlign: 'center'}}>
                            <TabPane tab="Người dùng" key="1" style={{textAlign: 'left'}}>
                                <Persons />
                            </TabPane>
                            <TabPane tab="Chat nhóm" key="2" style={{textAlign: 'left'}}>
                                <Groups />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className='app-main'>
                    <ChatInfo />
                    <ChatHistory />
                    <ChatArea />
                </div>
                <div className='clearfix'></div>
            </div>
        );
    }
}

export default ChatApp;