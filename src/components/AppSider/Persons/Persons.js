import React, { Component } from 'react';
import PersonCell from './PersonCell';

class Persons extends Component {
    render() {
        return (
            <ul className='list'>
            {  
                this.props.persons.map(person => (
                <li key = {person.id}>
                     <PersonCell online={person.online}
                        personName={person.personName}
                        lastestMsg={person.lastestMsg}/>
                </li>
            ))}
            </ul>
        );
    }
}

export default Persons;