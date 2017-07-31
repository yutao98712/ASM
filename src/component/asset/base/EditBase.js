import React, { Component } from "react";
import { Input, Input } from "antd";

class EditBase extends Component {
  state = {
    value: this.props.value,
    editable: this.props.editable || false
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.editable !== this.state.editable) {
      this.setState({ editable: nextProps.editable });
      if(nextProps.editable) {
        this.cacheValue = this.state.value;
      }
      if(nextProps.status && nextProps.status !== this.props.status){
        if (nextProps.status === 'save') {
          this.props.onChange(this.state.value);
        }else if(nextProps.status  === 'cancel') {
          this.setState({ value: this.cacheValue });
          this.props.onChange(this.cacheValue);
        }
      }
    }
  }

  shouldCompoentUpdate(nextProps, nextState) {
    return nextProps.editable !== this.state.editable || nextState.value !== this.state.value;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return <div />;
  }
}

export default EditBase;
