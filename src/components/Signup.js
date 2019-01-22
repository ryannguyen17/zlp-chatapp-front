import React, { Component } from 'react';

import { Form, Input, Button, Icon } from 'antd';

import textLogo from '../img/icon_text.png';

class Signup extends Component {
    render() {
        return (
            <div className='login-container'>
                <div className='login-area'>
                    <div className='logo-text'>
                        <img src={textLogo} alt='text-logo' />
                    </div>
                    <div className='login-main'>
                        <h2 className='form-title'>Sign up an account</h2>
                        <Form>
                            <Form.Item>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item>
                                <Input prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Display name" />
                            </Form.Item>
                            <Form.Item>
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Re-Password" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Sign up
                                </Button>
                                <span className='login-tips'>
                                    Đã có tài khoản? <a href='#'>Đăng nhập</a>
                                </span>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;