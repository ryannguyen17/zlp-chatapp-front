import React, { Component } from 'react';
import { Tabs, Icon, notification, Modal, Input, Checkbox } from 'antd';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import { setNewListPerson, setNewListGroup } from '../actions';


import Persons from './List/Persons';
import Groups from './List/Groups';
import ChatInfo from './ChatInfo';
import ChatHistory from './ChatHistory';
import ChatArea from './ChatArea';

const TabPane = Tabs.TabPane;
const CheckboxGroup = Checkbox.Group;

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            groupName: '',
            groupMembers: []
        }

        this.handleGroupName = this.handleGroupName.bind(this);
        this.handleCreateGroup = this.handleCreateGroup.bind(this);
        this.handleGroupMembers = this.handleGroupMembers.bind(this);
    }

    handleLogOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('display_name');
        this.props.doLogout();
        this.props.socket.emit('set-logout', { username: this.props.currentUser.username });
        this.props.history.push('/login');
    }

    setModalVisible(logic) {
        this.setState({
            modalVisible: logic
        });
    }

    handleGroupName(e) {
        this.setState({
            groupName: e.target.value
        });
    }

    handleGroupMembers(checkedValues) {
        this.setState({
            groupMembers: checkedValues
        });
    }

    handleCreateGroup() {
        let group = {
            id: Math.floor((Math.random() * 30000) + 1),
            name: this.state.groupName,
            members: this.state.groupMembers.concat(this.props.currentUser.username)
        }

        axios.post('http://127.0.0.1:8000/api/create-group', group);
        this.props.socket.emit('create-group', group);

        this.setState({
            modalVisible: false,
            groupName: '',
            groupMembers: []
        });
    }

    componentDidMount() {
        const that = this;

        this.props.socket.on('personal-message', function (data) {
            if (that.props.chatWith.isPerson === undefined || that.props.chatWith.isPerson === null) {
                if (data.receiver_u === that.props.currentUser.username) {
                    notification['info']({
                        message: 'Notification',
                        description: `${data.sender_d} gửi tin nhắn cho bạn`,
                        duration: 1
                    });
                }
            } else if (that.props.chatWith.isPerson === true) {
                if (data.receiver_u === that.props.currentUser.username && data.sender_u !== that.props.chatWith.id) {
                    notification['info']({
                        message: 'Notification',
                        description: `${data.sender_d} gửi tin nhắn cho bạn`,
                        duration: 1
                    });
                }
            } else if(that.props.chatWith.isPerson === false) {
                if (data.receiver_u === that.props.currentUser.username) {
                    notification['info']({
                        message: 'Notification',
                        description: `${data.sender_d} gửi tin nhắn cho bạn`,
                        duration: 1
                    });
                }
            }
        });

        this.props.socket.on('group-message', function (data) {
            if (data.sender_u !== that.props.currentUser.username) {
                if (that.props.chatWith.isPerson === false) {
                    if (data.group_id !== that.props.chatWith.id) {
                        notification['info']({
                            message: 'Notification',
                            description: `${data.sender_d} gửi tin nhắn đến nhóm ${data.group_name}`,
                            duration: 1
                        });
                    }
                } else {
                    notification['info']({
                        message: 'Notification',
                        description: `${data.sender_d} gửi tin nhắn đến nhóm ${data.group_name}`,
                        duration: 1
                    });
                }
            }
        });

        axios.post('http://127.0.0.1:8000/api/get-list', {
            username: this.props.currentUser.username
        }).then(function (res) {
            that.props.setNewListPerson(res.data.persons);
            that.props.setNewListGroup(res.data.groups);
        });
    }

    render() {
        if (this.props.currentUser.username === undefined) {
            return <Redirect to='/login' />
        }

        const options = this.props.listPerson.map(function (value) {
            return {
                label: value.display_name,
                value: value.username
            }
        });

        return (
            <div className='chat-app'>
                <Modal
                    title="Tạo nhóm"
                    style={{ top: 20 }}
                    visible={this.state.modalVisible}
                    onOk={() => this.handleCreateGroup()}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <Input style={{ marginBottom: '16px' }} placeholder="Tên nhóm" onChange={this.handleGroupName} value={this.state.groupName} />
                    <CheckboxGroup options={options} onChange={this.handleGroupMembers} value={this.state.groupMembers} />
                </Modal>
                <div className='app-sider'>
                    <div className='sider-menu'>
                        <span className='show-username'>{this.props.currentUser.display_name}</span>
                        <span className='menu-item'>
                            <Icon type="usergroup-add" style={{ fontSize: '36px' }} onClick={() => this.setModalVisible(true)} />
                        </span>
                        <span className='menu-item logout'>
                            <Icon type="logout" style={{ fontSize: '36px' }} onClick={this.handleLogOut} />
                        </span>
                    </div>
                    <div className='sider-list'>
                        <Tabs size={'large'} style={{ textAlign: 'center' }}>
                            <TabPane tab="Người dùng" key="1" style={{ textAlign: 'left' }}>
                                <Persons />
                            </TabPane>
                            <TabPane tab="Chat nhóm" key="2" style={{ textAlign: 'left' }}>
                                <Groups />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                {_.isEmpty(this.props.chatWith) ?
                    <div className='app-main' style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '50px'
                    }}>
                        <h1>Chào mừng đến với ChatNT</h1>
                        <h3><b>Tác giả  :</b> Nguyễn Văn Nghĩa ,Nguyễn Huỳnh Thoại </h3>
                        <h3><b>Chức năng:</b> Đăng nhập/xuất, chat cá nhân/nhóm, thông báo,..</h3>
                        <img src={require('../img/screenshot.gif')} alt="screenshot" width="500px" style={{
                            margin: '30px',
                            borderRadius: '8px',
                            border: '2px solid green'
                        }}/>
                    </div>
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
        chatWith: state.chatWith,
        listPerson: state.listPerson
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => {
            dispatch({ type: 'LOGOUT' });
        },
        setNewListPerson: (arr) => {
            dispatch(setNewListPerson(arr));
        },
        setNewListGroup: (arr) => {
            dispatch(setNewListGroup(arr));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatApp));