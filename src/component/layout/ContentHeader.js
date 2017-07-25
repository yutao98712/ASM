import React, { Component } from 'react';
import { Icon, Breadcrumb, Button } from 'antd';
import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';
import breadArray from '../../helpers/bread';
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

class ContentHeader extends Component{

  //根据面包配置文件，提取相应的面包屑信息。
  generateBread() {
    const { location } = this.props;
    const index = location.pathname.lastIndexOf("/");
    const path = location.pathname.substr(index+1,location.pathname.length);
    let bread = null;
    if( path!=="asset" ) {
      bread = breadArray[path];
    }
    return bread;
  }

  render() {
    const bread = this.generateBread();
    return (
      <div style={{ padding: "0 30px"}}>
        <div>
          <Breadcrumb style={{ float:"left"}}>
            { !!bread? bread.map((nav,i) => {
                if(i === bread.length-1){
                  return <Breadcrumb.Item key={i}>{ !!nav? nav : '' }</Breadcrumb.Item>
                }else{
                  return <Breadcrumb.Item key={i}><Link to={!!nav.path? nav.path : ''}>{ !!nav.name? nav.name:'' }</Link></Breadcrumb.Item>
                }
              }) :
              <Breadcrumb.Item><Link to="/login">首页</Link></Breadcrumb.Item>
            }
          </Breadcrumb>
        </div>
        <div style={{ float:"right"}}>
          <Link to="/" ><Help><Icon type="question-circle-o" />&nbsp;&nbsp;帮助</Help></Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: "#000000",fontSize: 16}}><Icon type="smile-o" style={{ fontSize: 16}} />&nbsp;&nbsp;李四，欢迎登录！</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary" onClick={this.props.logout}>退出</Button>
        </div>
      </div>
    )
  }
}

export default ContentHeader;