import React, { Component } from "react";
import { Form, Input, Button, DatePicker, InputNumber } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;


class AddMaintainForm extends Component{
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
        <Title>添加设备维修信息</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="资产ID">
          <span>{this.props.match.params.id}</span>
        </FormItem>
        <FormItem {...formItemLayout} label="资产ID" style={{ display: "none" }}>
          {getFieldDecorator("asset_ID", {
            initialValue: this.props.match.params.id
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
        <FormItem {...formItemLayout} label="维修日期">
          {getFieldDecorator("repair_time")(<DatePicker />)}
        </FormItem>
        <FormItem {...formItemLayout} label="维修原因">
          {getFieldDecorator("repair_course")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="维修过程">
          {getFieldDecorator("repair_process")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="维修人">
          {getFieldDecorator("repair_man")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="维修费用">
          {getFieldDecorator("repair_cost")(<InputNumber step={0.01}/>)}
        </FormItem>
         <FormItem {...formItemLayout} label="经办人">
          {getFieldDecorator("repair_handler")(<Input />)}
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

const AddMaintain = Form.create()(AddMaintainForm);
export default  AddMaintain;
