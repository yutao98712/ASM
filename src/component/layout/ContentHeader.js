import React from 'react';
import { Icon, Breadcrumb, Button } from 'antd';
import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';

const Help = styled.span`
  color: #000000;
  &:hover {
    color:#108ee9;
  }
`
/**
 * 内容展示区域的顶部
 * 面包条导航
 * 帮助界面链接
 * 登陆用户提示信息
 * 推出登陆按钮
 * logout 推出登陆方法
 */

const ContentHeader = ({logout, location}) => (
  <div style={{ padding: "0 30px"}}>
    <div>
      <Breadcrumb style={{ float:"left"}}>
        <Breadcrumb.Item><Link to="/login">一级导航</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/login">二级导航</Link></Breadcrumb.Item>
        <Breadcrumb.Item>当前页面 {location.pathname}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <div style={{ float:"right"}}>
      <Link to="/" ><Help><Icon type="question-circle-o" />&nbsp;&nbsp;帮助</Help></Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#000000",fontSize: 16}}><Icon type="smile-o" style={{ fontSize: 16}} />&nbsp;&nbsp;李四，欢迎登录！</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="primary" onClick={logout}>退出</Button>
    </div>
  </div>
  
)

export default ContentHeader;