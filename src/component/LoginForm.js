import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
const FormItem = Form.Item;
const loginBackground = require("../images/loginBackground.jpg");
const Barrier = styled.div`
  width:100%;
  @media (max-width: 768px){
    height:100px;
  }
  height:200px;
`
const LoginBorder = styled.div`
  max-width: 350px;
  max-height:300px;
  padding: 20px;
  border-radius:5px;
  background: rgba(0,0,0,.7);
  line-height:40px;
  margin:0 auto;
  &>h2{
    color: #fff;
    display: inline-block;
    margin-bottom: 20px;
  }
  &>img{
    position:fixed;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100vh;
    width: 100vw;
  }
`

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        window.location.href = "/";
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Barrier />>
        <LoginBorder>
          <h2>东冠资产管理系统登陆</h2>

          <img src={ loginBackground } alt="背景图片" />
          <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: 300 }}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名！'}],
              })(
                <Input prefix={<Icon type="user" style={{ fontsize:13 }} />} placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码！'}],
              })(
                <Input prefix={<Icon type="lock" style={{ fontsize:13 }} />} type="password" placeholder="密码"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox><span style={{ color: '#108ee9' }}>记住我</span></Checkbox>
              )}
              <a className="login-form-forgot" href="" style={{ float: 'right' }}>忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                登陆
              </Button>
            </FormItem>
          </Form>
        </LoginBorder>
      </div>
      
 
    )
  }
} 


const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;