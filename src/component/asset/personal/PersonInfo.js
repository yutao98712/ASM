import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;
const Option = Select.Option;

class PersonalInfoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form", values);
      }
    });
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
        <Title>完善信息</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="工号">
          1241251235
        </FormItem>
        <FormItem {...formItemLayout} label="姓名">
          张三
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="所属部门"
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 4 }
          }}
        >
          研发中心
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="角色"
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 4 }
          }}
        >
          普通用户
        </FormItem>
        <FormItem {...formItemLayout} label="员工职位">
          {getFieldDecorator("position")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="联系方式">
          {getFieldDecorator("contact")(<Input />)}
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
const PersonInfo = Form.create()(PersonalInfoForm);

export default PersonInfo;
