import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderLogo from './layout/HeaderLogo';
import SideNav from './layout/SideNav';
import ContentView from './layout/Content';
import ContentHeader from './layout/ContentHeader';
const { Header, Content, Footer, Sider } = Layout;

/**
 * HeaderLogo 顶部logo
 * SideNav 侧边栏导航
 * ContentView 内容展示区块
 */

class HomePage extends Component { 
  render() {
    return (
      <Layout>
        <HeaderLogo />
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh'}}>
            <SideNav/>
          </Sider>
          <Layout style={{ height:"100vh" }}>
            <Header style={{ background: '#fff', padding: 0 }}>
              <ContentHeader location={this.props.location}/>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
              <ContentView routes={ this.props.routes }/>
            </Content>
            <Footer style={{ textAlign: 'center'}}>
              Asset Management Stystem ©2017 Created by Research and Development Department 
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default HomePage;