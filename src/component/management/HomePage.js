
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';
import {RouteWithSubRoutes} from '../../route';
import { 
  Layout, 
  Menu, 
  Breadcrumb, 
  Icon
} from 'antd';
import {
  Link
} from 'react-router-dom';
const { SubMenu } = Menu;
const {Header, Content, Sider } = Layout;

const Logo = styled.div`
  width: 120px;
  line-height: 31px;
  margin: 16px 28px 16px 0;
  font-size: 20px;
  text-align: center;
  color: #F2F2F2;
  float: left;
`;
const ClearFloat = styled.div`
  clear:both;
`;
const Rlayout = styled.div`
  width: 120px;
  line-height:64px;
  float:right;
  overflow:hidden;
  color: #F2F2F2;
  text-align:center;
  &
`;



class HomePage extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Layout>
        <Header className="header" style={{ position: 'fixed', width: '100%', overflow: 'hidden'}}>
          <Logo><span>项目管理系统</span></Logo>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ 
              lineHeight: '64px', 
              float: 'left'
            }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <Rlayout>
            <Link to="/"><Icon type="question-circle-o" style={{ fontSize: 12}}></Icon>&nbsp;<span>帮助</span></Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/"><Icon type="login" style={{ fontSize: 20, verticalAlign: 'middle'}}></Icon>&nbsp;<span>登陆</span></Link>
          </Rlayout>
          <ClearFloat />
        </Header>

        <Layout style={{minHeight:'100vh',marginTop: 64}}>
          <Sider 
            width={210} 
            style={{
              background:'#fff',
              osverflowY:'auto',
              overflowX:'hidden',
              height:(window.innerHeight-64)+'px',
              position:'fixed',
            }}
          > 
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{height:'100%',borderRight:0}}
            >
              <SubMenu key="sub1" title={<span><Icon type="user"/>XXXXX管理</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop"/>XXXXX管理</span>}>
                <Menu.Item key="5">option1</Menu.Item>
                <Menu.Item key="6">option2</Menu.Item>
                <Menu.Item key="7">option3</Menu.Item>
                <Menu.Item key="8">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification"/>XXXXX管理</span>}>
                <Menu.Item key="9">option1</Menu.Item>
                <Menu.Item key="10">option2</Menu.Item>
                <Menu.Item key="11">option3</Menu.Item>
                <Menu.Item key="12">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="user"/>XXXXX管理</span>}>
                <Menu.Item key="13">option1</Menu.Item>
                <Menu.Item key="14">option2</Menu.Item>
                <Menu.Item key="15">option3</Menu.Item>
                <Menu.Item key="16">option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px', marginLeft: 210}}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Switch>
                { routes.map((route, i) => (
                  <RouteWithSubRoutes {...route} key={i}/>
                ))}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default HomePage;
