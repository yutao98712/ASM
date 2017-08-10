import React, { Component } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;

class AddTransferredForm extends Component{
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
        <Title>添加资产调拨信息</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="资产ID">
          1423512523
        </FormItem>
        <FormItem {...formItemLayout} label="资产名称">
          测试测试
        </FormItem>
        <FormItem {...formItemLayout} label="资产编号">
          {getFieldDecorator("asset_no")(<Input />)}
        </FormItem>
        
        <FormItem {...formItemLayout} label="调出部门">
          {getFieldDecorator("transfer_dept")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="调入部门">
          {getFieldDecorator("receiving_dept")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="调出日期">
          {getFieldDecorator("transfer_date")(<DatePicker />)}
        </FormItem>
        <FormItem {...formItemLayout} label="用途">
          {getFieldDecorator("purpose")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="调拨性质">
          {getFieldDecorator("property")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="调拨方式">
          {getFieldDecorator("transfer_mode")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="经办人">
          {getFieldDecorator("transfer_handler")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="接收人">
          {getFieldDecorator("receiving_handler")(<Input />)}
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

const AddTransferred= Form.create()(AddTransferredForm);
export default AddTransferred;
