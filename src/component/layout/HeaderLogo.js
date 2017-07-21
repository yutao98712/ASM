import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;
const logopicture = require("../../images/logo.png");
const ClearFloat = styled.div`
  clear:both;
`;

//顶部logo
const HeaderLogo = (props) => (
  <Header style={{ width: "100%", background:"#fff",borderBottom:"1px solid #E9E9E9", overflow: 'hidden', height: 85}}>
    <div style={{ float:'left',height:"inherit", paddingTop:10}}>
        <img src={logopicture} alt="logo" style={{ height: 60}}/>
    </div>
    <div style={{ height:"inherit",float:"left",padding: 10}}>
      <span style={{ fontSize: 25 }}>东冠资产管理系统</span>
    </div> 
    <ClearFloat />
  </Header>
)

export default HeaderLogo;