import React, { Component } from 'react';
import PersonCell from './PersonCell';
import { connect } from 'react-redux';

class Persons extends Component {
    render() {
        const cells = this.props.listPerson.map((value) => <li key={value.username}><PersonCell username={value.username} display_name={value.display_name} noti={value.noti} /></li>)
        return (
            <ul className='list'>
                {cells}
            </ul>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        listPerson: state.listPerson
    }
}

export default connect(mapStateToProps, null)(Persons);