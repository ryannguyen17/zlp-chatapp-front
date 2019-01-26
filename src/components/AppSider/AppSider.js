import React, { Component } from 'react';
import SiderList from './SiderList';
import SiderMenu from './SiderMenu';

const data = {
    persons: [{
        id : 1,
        personName : "thoai nguyen",
        lastestMsg : "An gi chua?",
        online : true

    },
    {
        id : 2,
        personName : "nghia nguyen",
        lastestMsg : "Chua?",
        online : true

    }],
    groups: [
        {
            id : 1,
            groupName : "FA Alone",
            lastestMsg : "An gi chua?"
        }
    ]
}

class AppSider extends Component {
    render() {
        return (
            <div className='app-sider'>
                <SiderMenu />
                <SiderList persons={data.persons} groups={data.groups} />
            </div>
        );
    }
}

export default AppSider;
