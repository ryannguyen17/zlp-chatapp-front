import React, { Component } from 'react';
import SiderList from './SiderList';
import SiderMenu from './SiderMenu';


class AppSider extends Component {
    render() {
        return (
            <div className='app-sider'>
                <SiderMenu />
                <SiderList />
            </div>
        );
    }
}


export default AppSider;
