import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';
import { connect } from 'react-redux';
import { setChatWith } from '../../actions';

class PersonCell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setChatWith(this.props.username);
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

let mapDispatchToProps = (dispatch) => {
    return {
        setChatWith: (username) => {
            dispatch(setChatWith(true, username));
        }
    }
}

export default connect(null, mapDispatchToProps)(PersonCell);