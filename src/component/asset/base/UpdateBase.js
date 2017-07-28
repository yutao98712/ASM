import React, { Component } from 'react';
import { Form, Input, Select, Button, InputNumber, DatePicker} from 'antd';
import Title from '../custom/Title';
const FormItem = Form.Item;
const Option = Select.Option;

class UpdateBase extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div></div>
    )
  }
}