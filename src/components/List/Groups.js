import React, { Component } from 'react';
import GroupCell from './GroupCell';
import { connect } from 'react-redux';

class Groups extends Component {
    render() {
        const cells = this.props.listGroup.map((value) => <li key={value.id}><GroupCell id={value.id} name={value.name} members={value.members} noti={value.noti} /></li>)
        return (
            <ul className='list'>
                {cells}
            </ul>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        listGroup: state.listGroup
    }
}

export default connect(mapStateToProps, null)(Groups);