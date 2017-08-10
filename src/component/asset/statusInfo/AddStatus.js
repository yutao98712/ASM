import React, { Component } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;


class AddStatusForm extends Component{
  handleSubmit= e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err,values) => {
      if(!err) {
        console.log(values);
      }
    });
  }
  
  render() {
    const { getFieldDecorator } =  this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
        md: { span: 4},
        lg: { span: 3}
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
      }
    }

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
        <Title>添加资产现状信息</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="资产ID">
          124124235
        </FormItem>
        <FormItem {...formItemLayout} label="资产名称" hasFeedback>
          测试测试
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

const AddStatus = Form.create()(AddStatusForm);
export default  AddStatus;
