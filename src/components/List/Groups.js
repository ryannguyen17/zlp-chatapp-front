import React, { Component } from 'react';
import GroupCell from './GroupCell';

class Groups extends Component {
    render() {
        return (
            <ul className='list'>
                <li>
                    <GroupCell />
                </li>
                <li>
                    <GroupCell />
                </li>
            </ul>
        );
    }
}

export default Groups;