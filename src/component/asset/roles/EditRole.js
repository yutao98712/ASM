import React, { Component } from "react";
import { Form, Button, Checkbox } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

class EditRoleForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
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
        <Title>修改角色权限</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="角色名称" hasFeedback>
          普通用户
        </FormItem>
        <FormItem {...formItemLayout} label="请选择权限">
          {getFieldDecorator("permission")(
            <CheckboxGroup>
              <Checkbox value="1" key="1">基本信息管理</Checkbox>
              <Checkbox value="2" key="2">辅助信息管理</Checkbox>
              <Checkbox value="3" key="3">设备维修管理</Checkbox>
              <Checkbox value="4" key="4">设备处置管理</Checkbox>
              <Checkbox value="5" key="5">设备现状管理</Checkbox>
              <Checkbox value="6" key="6">设备调拨管理</Checkbox>
              <Checkbox value="7" key="7">用户管理</Checkbox>
              <Checkbox value="8" key="8">角色管理</Checkbox>
            </CheckboxGroup>
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

const EditRole = Form.create()(EditRoleForm);
export default EditRole;
