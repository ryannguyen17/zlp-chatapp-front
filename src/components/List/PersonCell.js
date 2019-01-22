import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';

class PersonCell extends Component {
    render() {
        let cellStyle = this.props.online ? 'cell' : 'cell offline';

        return (
            <div className={cellStyle}>
                <Avatar size={48} icon="user" />
                <div className='info'>
                    <span className='display-name'>Nguyen Van Nghia</span>
                    <span className='lastest-msg'>ashdjasdasdasdasdasdasdasdasdasdasdasd</span>
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

export default PersonCell;