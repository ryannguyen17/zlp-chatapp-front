import React, { Component } from 'react';
import GroupCell from './GroupCell';

class Groups extends Component {
    render() {
        return (
            <ul className='list'>
            { 
                this.props.groups.map(group => (
                    <li key={group.id}>
                        <GroupCell groupName={group.groupName} lastestMsg={group.lastestMsg}/>
                    </li>
                ))
            }
            </ul>
        );
    }
}

export default Groups;