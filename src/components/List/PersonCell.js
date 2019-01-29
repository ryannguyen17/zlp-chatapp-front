import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';
import { connect } from 'react-redux';
import { setChatWith, setChatHistory } from '../../actions';
import axios from 'axios';

class PersonCell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const that = this;
        this.props.setChatWith(this.props.username, this.props.display_name);
        axios.post('http://127.0.0.1:8000/api/get-messages', {
            personal_message: true,
            userA: this.props.currentUser.username,
            userB: this.props.username
        }).then(function(res) {
            that.props.setChatHistory(res.data);
        });
    }

    render() {
        let cellStyle = this.props.online ? 'cell' : 'cell offline';

        return (
            <div className={cellStyle} onClick={this.handleClick}>
                <Avatar size={48} icon="user" />
                <div className='info'>
                    <span className='display-name'>{this.props.display_name}</span>
                    <span className='lastest-msg'>{this.props.username}</span>
                </div>
                <div className='status'>
                    {this.props.online ? 
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize: '1.2em'}} /> : 
                        <Icon type="minus-circle" theme="twoTone" twoToneColor="#887a88" style={{fontSize: '1.2em'}} />
                    }
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setChatWith: (username, display_name) => {
            dispatch(setChatWith(true, username, display_name));
        },
        setChatHistory: (arr) => {
            dispatch(setChatHistory(arr));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonCell);