import React, { Component } from "react";
import { Form, Input, Select, Button, InputNumber, DatePicker } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;
const Option = Select.Option;

class AddUserForm extends Component {
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
    if (value && value !== form.getFieldValue("password")) {
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
        <Title>添加用户</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="工号" hasFeedback>
          {getFieldDecorator("staffId", {
            rules: [
              {
                required: true,
                message: "请填入工号，此工号及为用户名"
              }
            ]
          })(<Input placeholder="请填入工号，此工号及为用户名"/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="密码" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "请输入登陆密码,6-18个英文字幕、数字及符号"
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
        <FormItem {...formItemLayout} label="确认密码" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "请再次输入密码"
              },
              {
                validator: this.checkPassword
              }
            ]
          })(
            <Input
              type="password"
              onBlur={this.handleConfirmBlur}
              placeholder="请再次输入密码"
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="所属部门"
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 4 }
          }}
          hasFeedback
        >
          {getFieldDecorator("department", {
            rules: [
              {
                required: true,
                message: "请选择部门"
              }
            ]
          })(
            <Select>
              <Option value="1">研发中心</Option>
              <Option value="2">财务部</Option>
              <Option value="3">综合管理部</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="员工职位">
          {getFieldDecorator("position")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="联系方式">
          {getFieldDecorator("contact")(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="角色"
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 4 }
          }}
        >
          {getFieldDecorator("role")(
            <Select placeholder="默认为游客">
              <Option value="1">普通用户</Option>
              <Option value="0">游客</Option>
            </Select>
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
const AddUser = Form.create()(AddUserForm);

export default AddUser;
