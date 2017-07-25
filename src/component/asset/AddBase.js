import React, { Component } from 'react';
import { Form, Input, Icon, Cascader, Select, Row, Col, Checkbo, Button, InputNumber, DatePicker} from 'antd';
import Title from '../custom/Title';
const FormItem = Form.Item;
const Option = Select.Option;

class BaseFrom extends Component {
  state = {
    confirmDirty:false,
    AutoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if( !err ) {
        console.log('Received values of form', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
        md: { span: 3 },
        lg: { span: 2 },
        color: "red"
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 2
        }
      }
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>添加资产基本信息</Title>
        <hr style={{ margin:"20px 0"}}/>
        <FormItem 
          {...formItemLayout}
          label="资产名称"
          hasFeedback
        >
          {getFieldDecorator('name',  {
            rules: [{
              required: true, message: '请填入资产名称',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="资产类型"
          hasFeedback
        >
          {getFieldDecorator('type',{
            rules: [{
              required:true, message: '请选择资产类型',
            }],
          })(
            <Select >
              <Option value="office">办公设备</Option>
              <Option value="maintenance">维护工具</Option>
              <Option value="instrument">仪器仪表</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="规格型号"
        >
          { getFieldDecorator('model')(<Input/>) }
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="P/N"
        >
          { getFieldDecorator('PN')(<Input />)}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="S/N"
        >
          { getFieldDecorator('SN')(<Input />)}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="原值"
        >
          { getFieldDecorator('price')(<InputNumber min={0} step={0.01}/>) }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="购置日期"
        >
          { getFieldDecorator('date')(<DatePicker/>) }
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="备注"
        >
          { getFieldDecorator('remark')(<Input />)}
        </FormItem>
        <FormItem 
          {...tailFormItemLayout}
        >
          <Button type="primary" htmlType="submit">保存</Button>
        </FormItem>
        
      </Form>
    );
  }
}
const AddBase = Form.create()(BaseFrom);
export default AddBase;