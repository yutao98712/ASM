import React from 'react';
import { Menu, Icon } from 'antd';
import {
  Link
} from 'react-router-dom';
const Submenu = Menu.SubMenu;
const SideNav = (props) => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    <Submenu key="sub1" title={<span><Icon type="bank"/><span>资产管理</span></span>}>
      <Menu.Item key="1">
        <Link to="/asset/baseInfo">
          <Icon type="exception" />
          <span className="nav-text">基本信息管理</span>
        </Link>
      </Menu.Item >
      <Menu.Item key="2">
        <Link to="/asset/detail">
          <Icon type="pushpin-o" />
          <span className="nav-text">辅助信息管理</span>
        </Link>
        
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="share-alt" />
        <span className="nav-text">调拨信息管理</span>
      </Menu.Item>
      <Submenu key="sub2" title={<span><Icon type="api"/><span>资产维护管理</span></span>}>
        <Menu.Item key="4">
          <Icon type="scan" />
          <span className="nav-text">资产现状管理</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="tool" />
          <span className="nav-text">设备维修管理</span>
        </Menu.Item>
      </Submenu>
      <Menu.Item key="6">
        <Icon type="delete" />
        <span className="nav-text">资产处置管理</span>
      </Menu.Item>
    </Submenu>
    <Submenu key="sub3" title={<span><Icon type="usergroup-add"/><span>用户及权限管理</span></span>}>
      <Menu.Item key="7">
        <Icon type="contacts" />
        <span className="nav-text">账户管理</span>
      </Menu.Item>
      <Menu.Item key="8">
        <Icon type="key" />
        <span className="nav-text">角色管理</span>
      </Menu.Item>
    </Submenu>
    <Submenu key="sub4" title={<span><Icon type="user"/><span>个人中心</span></span>}>
      <Menu.Item key="9">
        <Icon type="solution" />
        <span className="nav-text">个人信息管理</span>
      </Menu.Item>
      <Menu.Item key="10">
        <Icon type="edit" />
        <span className="nav-text">修改密码</span>
      </Menu.Item>
    </Submenu>
  </Menu>
)

export default SideNav;