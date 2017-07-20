import React from 'react';
import { Icon } from 'antd';
import {
  Link
} from 'react-router-dom';
const ContentHeader = (props) => (
  <div>
    <Link to="/" ><span style={{ color: "#000000"}}><Icon type="question-circle-o" />&nbsp;&nbsp;帮助</span></Link>
  </div>
)

export default ContentHeader;