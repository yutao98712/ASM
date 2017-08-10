import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;


class EditPasswordForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form", values);
      }
    });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("newPassword")) {
      callback("您输入的两次密码不一致");
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
        md: { span: 4 },
        lg: { span: 3 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 2
        }
      }
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>修改密码</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="旧密码" hasFeedback>
          {getFieldDecorator("staff_pwd", {
            rules: [
              {
                required: true,
                message: "请输入旧密码,6-18个英文字幕、数字及符号"
              },{
                min:6,
                message: "密码必须大于6位"
              },{
                max:18,
                message: "密码必须小于18位"
              }
            ]
          })(<Input type="password" placeholder="请输入登陆密码,6-18个英文字幕、数字及符号" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="新密码" hasFeedback>
          {getFieldDecorator("newPassword", {
            rules: [
              {
                required: true,
                message: "请输入旧密码,6-18个英文字幕、数字及符号"
              },{
                min:6,
                message: "密码必须大于6位"
              },{
                max:18,
                message: "密码必须小于18位"
              }
            ]
          })(<Input type="password" placeholder="请输入登陆密码,6-18个英文字幕、数字及符号" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="确认新密码" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "请再次输入新密码"
              },
              {
                validator: this.checkPassword
              }
            ]
          })(
            <Input
              type="password"
              onBlur={this.handleConfirmBlur}
              placeholder="请再次输入新密码"
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const EditPassword = Form.create()(EditPasswordForm);

export default EditPassword;
