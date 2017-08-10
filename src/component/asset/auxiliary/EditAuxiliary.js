import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import Title from "../../custom/Title";
const FormItem = Form.Item;
const Option = Select.Option;

class EditAuxiliaryForm extends Component{
  handleSubmit= e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err,values) => {
      if(!err) {
        console.log(values);
      }
    });
  }
  
  componentDidMount() {
    this.props.form.setFieldsValue({
      name: '万用表',
    });
    console.log(this.props.match);
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
        <Title>修改资产辅助信息</Title>
        <hr style={{ margin: "20px 0" }} />
        <FormItem {...formItemLayout} label="资产ID">
          { this.props.match.params.id }
        </FormItem>
        <FormItem {...formItemLayout} label="资产名称" hasFeedback>
          {getFieldDecorator("asset_name", {
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
          {getFieldDecorator("asset_no")(<Input />)}
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
          {getFieldDecorator("depreciation")(
            <Select>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="5">5</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="所在公司或部门">
          {getFieldDecorator("asset_dept")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="所在区域">
          {getFieldDecorator("asset_location")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="审核人">
          {getFieldDecorator("audiator_name")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="保管人">
          {getFieldDecorator("asset_custodian")(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="使用日期">
          {getFieldDecorator("used_date")(<DatePicker />)}
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

const EditAuxiliary = Form.create()(EditAuxiliaryForm);
export default EditAuxiliary;

