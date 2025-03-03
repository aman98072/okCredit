import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Form, Icon, Col, Input, Button, Checkbox } from 'antd';
import { LOGIN_URL } from "../../config/urls";

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
    
        this.props.form.validateFields((err, values) => {        
        if (!err) {            
            axios.post(LOGIN_URL, {
                username : values.username, password : values.password
            })
            .then(res => {
                console.log(res.data);
            });

            console.log('Received values of form: ', values);
        }
    });
};

render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Col span={8} offset={8}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                        </a>
                    <br />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                    &nbsp;  Or <a href="">register now!</a>
                </Form.Item>
            </Col>
        </Form>
    );
}
}

const WrappedLogin = Form.create({ name: 'normal_login' })(Login);
export default WrappedLogin;

