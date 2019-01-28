import React, { Component } from 'react';
import PersonCell from './PersonCell';
import { connect } from 'react-redux';
import { changeChatView } from '../../../actions/actions';

class Persons extends Component {
    render() {
        let render = [];
        const persons = this.props.persons;
        for (let id in persons) {
            const online = persons[id].online;
            const personName = persons[id].personName;
            const lastestMsg = persons[id].lastestMsg;
            render.push(
                <li key={id}>
                    <PersonCell online={online}
                        personName={personName}
                        lastestMsg={lastestMsg}
                        acc={id}
                        clickMe={acc => this.props.dispatch(changeChatView(acc, false, personName, online))} />
                </li>
            );
        }
        return (
            <ul className='list'>{render}</ul>
        );
    }
}

const mapStateToProps = (state) => ({
    persons: state.persons
});

export default connect(mapStateToProps)(Persons);