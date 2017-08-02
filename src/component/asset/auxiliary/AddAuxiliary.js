import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;
const Option = Select.Option;

class AddAuxiliaryForm extends Component{
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
        <Title>添加资产辅助信息</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="资产名称" hasFeedback>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请填入资产名称"
              },
              {
                max:50,
                message:"请输入小于30个字符"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="资产编号">
          {getFieldDecorator("department")(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="折旧年限"
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 4 }
          }}
          hasFeedback
        >
          {getFieldDecorator("type")(
            <Select>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="5">5</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="所在公司或部门">
          {getFieldDecorator("department")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="所在区域">
          {getFieldDecorator("location")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="审核人">
          {getFieldDecorator("audiator")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="保管人">
          {getFieldDecorator("custodian")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="使用日期">
          {getFieldDecorator("useDate")(<DatePicker />)}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          {getFieldDecorator("remark")(<Input />)}
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

const AddAuxiliary = Form.create()(AddAuxiliaryForm);
export default AddAuxiliary;
