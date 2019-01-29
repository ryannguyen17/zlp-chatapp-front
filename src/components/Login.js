import React, { Component } from 'react';
import { Form, Input, Button, Icon, notification } from 'antd';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { doLogin } from '../actions';
import textLogo from '../img/icon_text.png';

class Login extends Component {
    handleSubmit = (e) => {
        const that = this;

        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if(!err) {
                console.log('Receive values of form: ', value);
                axios.post('http://127.0.0.1:8000/api/authenticate', {
                    username: value.username,
                    password: value.password
                }).then(function(res) {
                    console.log(res);
                    if(res.data.success === false) {
                        notification['error']({
                            message: 'Error',
                            description: 'Đăng nhập thất bại',
                            duration: 1
                        });
                    } else {
                        localStorage.setItem('username', res.data.user.username);
                        localStorage.setItem('display_name', res.data.user.display_name);
                        that.props.doLogin({
                            username: res.data.user.username,
                            display_name: res.data.user.display_name,
                        });
                        that.props.socket.emit('set-login', {username: res.data.user.username});
                        that.props.history.push('/');
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        if(this.props.currentUser.username !== undefined) {
            return <Redirect to='/' />
        }

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

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (user) => {
            dispatch(doLogin(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form.create({name: 'login_form'})(Login)));