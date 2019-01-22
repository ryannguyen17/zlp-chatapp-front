import React, { Component } from 'react';
import PersonCell from './PersonCell';

class Persons extends Component {
    render() {
        return (
            <ul className='list-persons'>
                <li>
                    <PersonCell online={true} />
                </li>
                <li>
                    <PersonCell online={false} />
                </li>
                <li>
                    <PersonCell online={true} />
                </li>
                <li>
                    <PersonCell online={true} />
                </li>
                <li>
                    <PersonCell online={false} />
                </li>
            </ul>
        );
    }
}

export default Persons;