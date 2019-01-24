import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Icon, notification } from 'antd';

import textLogo from '../img/icon_text.png';

class Signup extends Component {
    state = {
        confirmDirty: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        notification['success']({
            message: 'Success',
            description: 'Đăng ký tài khoản thành công',
            duration: 2
        });
        this.props.form.validateFields((err, value) => {
            if(!err) {
                console.log('Receive values of form: ', value);
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !! value});
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if(value && value !== form.getFieldValue('password')) {
            callback('Two password that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if(value && this.state) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
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
                        <h2 className='form-title'>Sign up an account</h2>
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
                                    getFieldDecorator('display_name', {
                                        rules: 
                                        [{ 
                                            required: true, message: 'Please input your display name!' } ,
                                        {
                                            min: 6, message: 'Display name has at least 6 characters!'
                                        }],
                                    })(
                                        <Input prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Display name" />
                                    )
                                }
                            </Form.Item>
                            <Form.Item>
                                {
                                    getFieldDecorator('password', {
                                        rules: [
                                            { 
                                                required: true, message: 'Please input your password!' },
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
                                {
                                    getFieldDecorator('confirm', {
                                        rules: [
                                            { 
                                                required: true, message: 'Please confirm your password!' },
                                            {
                                                min: 6, message: 'Password has at least 6 characters!'
                                            }, 
                                            {
                                                validator: this.compareToFirstPassword
                                            }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Re-Password" />
                                    )
                                }
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Sign up
                                </Button>
                                <span className='login-tips'>
                                    Đã có tài khoản? <Link to='/login'>Đăng nhập</Link>
                                </span>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form.create({name: 'signup_form'})(Signup);