import React, { Component } from 'react';

import PersonInfo from './PersonInfo';

const data = {
    chatView: "nghia nguyen",
    online: true
}
class ChatInfo extends Component {
    render() {
        return (
            <PersonInfo chatView={data.chatView} online={data.online}/>
        );
    }
}

export default ChatInfo;