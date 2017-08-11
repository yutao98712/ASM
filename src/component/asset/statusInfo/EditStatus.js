import React, { Component } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;

class EditStatusForm extends Component {
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
        <Title>修改资产现状信息</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} style={{ display: "none" }}>
          {getFieldDecorator("status_ID", {
            initialValue: this.props.match.params.id
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="资产ID">
          <span>1241235</span>
        </FormItem>
        <FormItem {...formItemLayout} label="资产ID" style={{ display: "none" }}>
          {getFieldDecorator("asset_ID", {
            initialValue: "123135"
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="资产名称">
          <span>XXXXX</span>
        </FormItem>
        <FormItem {...formItemLayout} label="资产名称" style={{ display: "none" }}>
          {getFieldDecorator("asset_name", {
            initialValue: "XXXXX"
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="检察人">
          {getFieldDecorator("status_handler")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="检查日期">
          {getFieldDecorator("check_date")(<DatePicker />)}
        </FormItem>
        <FormItem {...formItemLayout} label="检查结果">
          {getFieldDecorator("device_status")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          {getFieldDecorator("remarks")(<Input />)}
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

const EditStatus = Form.create()(EditStatusForm);
export default EditStatus;
