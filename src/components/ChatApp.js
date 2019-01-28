import React , { Component } from 'react';
import { Tabs, Avatar, Icon } from 'antd';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogout } from '../actions';
import _ from 'lodash';

import Persons from './List/Persons';
import Groups from './List/Groups';
import ChatInfo from './ChatInfo';
import ChatHistory from './ChatHistory';
import ChatArea from './ChatArea';

const TabPane = Tabs.TabPane;

class ChatApp extends Component {
    handleLogOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('display_name');
        this.props.doLogout();
        this.props.history.push('/login');
    }

    render() {
        if(this.props.currentUser.username === undefined) {
            return <Redirect to='/login' />
        }

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
                            <Icon type="logout" style={{fontSize: '36px'}} onClick={this.handleLogOut} />
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
                    { _.isEmpty(this.props.chatWith) ? 
                            <div className='app-main'></div> 
                            : 
                            <div className='app-main'>
                                <ChatInfo />
                                <ChatHistory />
                                <ChatArea />
                            </div>
                    }
                <div className='clearfix'></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        chatWith: state.chatWith
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => {
            dispatch(doLogout());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatApp));