import React, { Component } from 'react';

class MyMessage extends Component {
    render() {
        return (
            <div>
                <div className='msg-user'>
                    me                
                </div>
                {this.props.isText ? 
                    <div className='msg-content'>
                        {this.props.content} 
                    </div> 
                    :
                    <div className='msg-content-pic'>
                        <img src={this.props.content} alt='pic'></img>
                    </div>
                }
                <div className='msg-time'>
                    {this.props.time_f}
                </div>
            </div>
        );
    }
}

export default MyMessage;