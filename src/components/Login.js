import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import textLogo from '../img/icon_text.png';

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if(!err) {
                console.log('Receive values of form: ', value);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className='login-container'>
                <div className='login-area'>
                    <div className='logo-text'>
                        <img src={textLogo} alt='text-logo' />
                    </div>
                    <div className='login-main'>
                        <h2 className='form-title'>Login to NT Chat</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {
                                    getFieldDecorator('username', {
                                        rules: 
                                        [{ 
                                            required: true, message: 'Please input your username!' } ,
                                        {
                                            min: 6, message: 'Username has at least 6 characters!'
                                        }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )
                                }
                            </Form.Item>
                            <Form.Item>
                                {
                                    getFieldDecorator('password', {
                                        rules: [
                                            { 
                                                required: true, message: 'Please input password!' },
                                            {
                                                min: 6, message: 'Password has at least 6 characters!'
                                            },
                                            {
                                                validator: this.validateToNextPassword
                                            }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )
                                }
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                <span className='login-tips'>
                                    Chưa có tài khoản? <Link to='/signup'>Đăng ký</Link>
                                </span>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form.create({name: 'login_form'})(Login);