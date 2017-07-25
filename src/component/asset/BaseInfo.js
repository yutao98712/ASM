import React, { Component } from 'react';
import styled from "styled-components";
import Title from '../custom/Title';
import {
  Link
} from 'react-router-dom';
import {
  Table,
  Icon,
  Button,
  Input,
  Menu,
  Dropdown
} from 'antd';


const CustomFilterDropdown = styled.div`
  padding: 8px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  input {
    width: 130px;
    margin-right: 8px;
  }
`
//自定义按钮
const CustomButton = styled.button`
  background: #fff;
  width: 90px;
  height: 35px;
  border: 1px solid #000000;
  border-color:${props => props.color};
  border-radius: 5px;
  outline:none;
  color: ${props => props.color};
  &:hover {
    background: ${props => props.color};
    color: #fff;
    cursor:pointer;
  }
  margin-right: 10px;
`;
//模拟列表信息
const data = [];

for(let i=0; i<46; i++){
  data.push({
    key:i,
    name: '万用表',
    type: '维护工具',
    model: '胜利钳形表6956B',
    SN: '092723011',
    amount: 1,
    date: '2016/12/27',
    price: 169
  });  
}

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/">实物图片</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">发票</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">完善辅助信息</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">完善调拨信息</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">资产现状</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">设备维修</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">完善处置信息</Link>
    </Menu.Item>
  </Menu>
) 

class BaseInfo extends Component {
  /**
   * filterDropdownVisible 是否显示下拉框
   * data 筛选后的数据
   * searchText 搜索的内容
   * filtered 是否已经筛选
   */

  state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered:false 
  }

  //onChange回调，将搜索的关键字记录到state
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  //点击搜索按钮的回调，返回筛选出的数据
  onSearch = () => {
    const { searchText } = this.state;
    //创建正则，全局匹配，忽略大小写
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        //将该条记录对应的相应字段记录到match中
        const match = record.name.match(reg);
        //如果不匹配，则return null
        if(!match) {
          return null;
        }
        //否则，返回该条记录，并将记录中的name属性
        //万用表 用   万 表   [万,[用，表]]
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i)=> (
                i > 0 ? [<span style={{ color: "#f50" }}>{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }
  render() {
    //设定表头信息
    const columns = [{
      title: '资产名称',
      dataIndex: 'name',
      key: 'name',
      fixed:'left',
      width:100,
      //自定义筛选菜单，此函数之负责渲染图层
      filterDropdown: (
        <CustomFilterDropdown>
          <Input 
            ref={ele => this.searchInput = ele}
            placeholder="请填入搜索名称"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>搜索</Button>
        </CustomFilterDropdown>
      ),
      filterIcon: <Icon  type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }}/>,
      //控制自定义筛选菜单是否可见
      filterDropdownVisible: this.state.filterDropdownVisible,
      //自定义菜单可见变化时调用
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          filterDropdownVisible: visible,
        }, () => this.searchInput.focus());
      },
    }, {
      title: '资产编号',
      dataIndex: 'number',
      key: 'number'
    }, {
      title: '资产类别',
      dataIndex: 'type',
      key: 'type',
      filters: [{
        text: '维护工具',
        value: '维护工具',
      },{
        text: '办公设备',
        value: '办公设备'
      },{
        text: '仪器仪表',
        value: '仪器仪表'
      }],
      onFilter: (value, record) => record.type.indexOf(value) === 0
    }, {
      title: '规格型号',
      dataIndex: 'model',
      key: 'model'
    },{
      title: 'P/N',
      dataIndex: 'P/N',
      key: 'P/N'
    }, {
      title: 'S/N',
      dataIndex: 'SN',
      Key: 'SN'
    }, {
      title: '原值',
      dataIndex: 'price',
      key: 'price'
    }, {
      title: '账面数量',
      dataIndex: 'amount',
      key: 'amount'
    }, {
      title: '购置日期',
      dataIndex: 'date',
      key: 'date'
    }, {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark'
    }, {
      title: '操作',
      key: 'action',
      fixed:'right',
      width:200,
      render: () => (
        <span>
          <Link to="/">删除</Link>
          <span className="ant-divider" />
          <Link to="/">编辑</Link>
          <span className="ant-divider" />
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              更多<Icon type="down"/>
            </a>
          </Dropdown>
        </span>
      )
    }];
    return (
      <div>
        <Title>资产基本信息列表</Title>
        <div style={{ padding: "20px 0"}}>
          <Link to="/asset/baseInfo/addBase"><CustomButton color="#0099ff"><Icon type="plus-circle"/>{"   "}增加</CustomButton></Link>
          <CustomButton color="#49D21C"><Icon type="login"/>{"   "}导入</CustomButton>
          <CustomButton color="#49D21C"><Icon type="logout"/>{"   "}导出</CustomButton>
        </div>
        <Table 
          columns={columns} 
          dataSource={this.state.data} 
          bordered 
          pagination={{
            showSizeChanger:true,
            showQuickJumper:true,
            pageSizeOptions:['5','10','20','30','40'],
            pageSize:5
          }} 
          scroll={{ x: 1600 }} 
        />
      </div>
    )
  }
}

export default BaseInfo;