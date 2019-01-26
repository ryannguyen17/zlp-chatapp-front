import React, { Component } from 'react';
import { Tabs } from 'antd';

import Persons from './Persons/Persons';
import Groups from './Groups/Groups';

const TabPane = Tabs.TabPane;


class SiderList extends Component {
    render() {
        return (
            <div className='sider-list'>
                <Tabs size={'large'} style={{ textAlign: 'center' }}>
                    <TabPane tab="Người dùng" key="1" style={{ textAlign: 'left' }}>
                        <Persons persons={this.props.persons} />
                    </TabPane>
                    <TabPane tab="Chat nhóm" key="2" style={{ textAlign: 'left' }}>
                        <Groups groups={this.props.groups} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default SiderList;