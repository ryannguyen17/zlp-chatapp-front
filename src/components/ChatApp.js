import React , { Component } from 'react';
import { Tabs, Avatar, Icon } from 'antd';

import Persons from './List/Persons';
import Groups from './List/Groups';

const TabPane = Tabs.TabPane;

class ChatApp extends Component {
    render() {
        return (
            <div className='chat-app'>
                <div className='app-sider'>
                    <div className='sider-menu'>
                        <span>
                            <Avatar size={64} icon="user" />
                        </span>
                        <span>
                            <Icon type="usergroup-add" style={{fontSize: '36px'}} />
                        </span>
                        <span>
                            <Icon type="info" style={{fontSize: '36px'}} />
                        </span>
                        <span>
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
                    <div className='main-top'>
                    
                    </div>
                    <div className='main-content'>

                    </div>
                    <div className='main-bottom'>
                    
                    </div>
                </div>
                <div className='clearfix'></div>
            </div>
        );
    }
}

export default ChatApp;