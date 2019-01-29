import React , { Component } from 'react';
import { Tabs, Icon, notification } from 'antd';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import { SET_NEW_LIST_PERSON } from '../actions';

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
        this.props.socket.emit('set-logout', {username: this.props.currentUser.username});
        this.props.history.push('/login');
    }

    componentDidMount() {
        const that = this;

        this.props.socket.on('personal-message', function(data) {
            if(that.props.chatWith.isPerson === undefined || that.props.chatWith.isPerson === null) {
                if(data.receiver_u === that.props.currentUser.username) {
                    notification['info']({
                        message: 'Notification',
                        description: `${data.sender_d} gửi tin nhắn cho bạn`,
                        duration: 1
                    });
                }
            } else if (that.props.chatWith.isPerson === true) {
                if(data.receiver_u === that.props.currentUser.username && data.sender_u !== that.props.chatWith.id) {
                    notification['info']({
                        message: 'Notification',
                        description: `${data.sender_d} gửi tin nhắn cho bạn`,
                        duration: 1
                    });
                }
            } else {

            }
        });

        axios.post('http://127.0.0.1:8000/api/get-list', {
            username: this.props.currentUser.username
        }).then(function(res) {
            that.props.setNewListPerson(res.data.persons);
        });
    }

    render() {
        if(this.props.currentUser.username === undefined) {
            return <Redirect to='/login' />
        }

        return (
            <div className='chat-app'>
                <div className='app-sider'>
                    <div className='sider-menu'>
                        <span className='show-username'>Nguyen Van Nghia</span>
                        <span className='menu-item'>
                            <Icon type="usergroup-add" style={{fontSize: '36px'}} />
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
                                <ChatArea socket={this.props.socket} />
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
            dispatch({type: 'LOGOUT'});
        },
        setNewListPerson: (arr) => {
            dispatch({
                type: SET_NEW_LIST_PERSON,
                content: arr
            });
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatApp));