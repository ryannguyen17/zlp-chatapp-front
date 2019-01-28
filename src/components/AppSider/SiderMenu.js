import React, { Component } from 'react';
import { Avatar, Icon, Modal, Select, Input } from 'antd';

import { connect } from 'react-redux';
import { addGroup } from '../../actions/actions';

const Option = Select.Option;

class SiderMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gName : "",
            listUser : [],
            visible: false
        }
    }
    
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        if (this.state.gName === "" ||
            this.state.listUser.length === 0){
            return;
        }
        this.props.dispatch(
            addGroup(this.state.gName,this.state.listUser));
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleChange = (e) => {
        this.setState({
            listUser: e
        });
    }

    render() {
        const children = [];
        for (let i of this.props.listAcc) {
            children.push(<Option key={i}>{i}</Option>);
        }
        return (
            <div className="sider-menu">
                <span className='menu-item menu-item-user'>
                    <Avatar size={64} icon="user" style={{ backgroundColor: '#87d068' }} />
                </span>
                <span className='menu-item' onClick={this.showModal}>
                    <Icon type="usergroup-add" style={{ fontSize: '36px' }} />
                </span>
                <span className='menu-item'>
                    <Icon type="info" style={{ fontSize: '36px' }} />
                </span>
                <span className='menu-item logout'>
                    <Icon type="logout" style={{ fontSize: '36px' }} />
                </span>

                <Modal
                    title="Tạo nhóm chat mới"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Input placeholder="Enter group name" 
                        style={{marginBottom: '20px'}}
                        onChange={ e => this.setState({gName : e.target.value})} required/>
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        placeholder="Chọn thành viên"
                        onChange={this.handleChange}>
                        {children}
                    </Select>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    listAcc: Object.keys(state.persons)
});

export default connect(mapStateToProps)(SiderMenu);
