import React, { Component } from 'react';
import Title from '../../custom/Title';
import CustomButton from '../../custom/CustomButton';
import CustomFilterDropdown from '../../custom/CustomFilterDropdown'
import moment from 'moment';
import {
  Link
} from 'react-router-dom';
import {
  Table,
  Icon,
  Button,
  Input,
  Menu,
  Dropdown,
  Switch,
  DatePicker
} from 'antd';
const RangePicker = DatePicker.RangePicker;

//模拟列表信息
const data = [];
for(let i=0; i<20; i++){
  data.push({
    key:i,
    name: i%2===1?'万用表':"台式电脑",
    type: i%2===1?'维护工具':"办公设备",
    model: '胜利钳形表6956B',
    SN: '092723011',
    amount: 1,
    date: '2017/6/'+(i+1),
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
   * searchText 搜索的内容(name)
   * filtered 是否已经筛选(name)
   * pagination 分页具体属性
   * dataRange  记录日期选择器数据
   * filteredInfo 控制筛选信息（非自定义），重置筛选时用到
   */
  state = {
    filterDropdownVisible: false,
    dateFilterDropdownVisible:false,
    data,
    searchText: '',
    filtered: false ,
    pagination: {
      showSizeChanger:true,
      showQuickJumper:true,
      pageSizeOptions:['5','10','20','30','40'],
      defaultPageSize:5
    },
    dateRange: null,
    filteredInfo: null,
  }
  //表格改变事件回调
  handleTableChange = (pagination,filters,sorter) => {
    this.setState({filteredInfo:filters});
  }
  //清除筛选（非自定义）
  clearFilters = () => {
    this.setState({ 
      filteredInfo: null,
      data
    });
  }
  //控制是否分页
  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable? {
        showSizeChanger:true,
        showQuickJumper:true,
        pageSizeOptions:['5','10','20','30','40'],
        defaultPageSize:5
      } : enable});
    };
  }

  //onChange回调，将搜索的关键字记录到state
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  //点击搜索按钮的回调，返回筛选出的数据
  onNameSearch = () => {
    const { searchText } = this.state;
    //创建正则，全局匹配，忽略大小写
    const reg = new RegExp(searchText, 'gi');
    this.setState((prevState) =>({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: prevState.data.map((record) => {
        //将该条记录对应的相应字段记录到match中
        const match = record.name.match(reg);
        //如果不匹配，则return null
        if(!match) {
          return null;
        }
        //否则，返回该条记录，并将记录中的name属性
        return {
          ...record
        };
      }).filter(record => !!record),
    }));
  }

  //日期搜索改变值回调
  onDateChange = (value, dateString) => {
    this.setState({
      dateRange: !!dateString[0]?dateString:null,
    })
    
  }

  //日期搜索按钮回调
  onDateSearch = () => {
    this.setState((prevState) => ({
      dateFilterDropdownVisible: false,
       search: {
        ...prevState.search,
        dateRange:1
      },
      data: prevState.data.map(record => {
        if(!!this.state.dateRange){
          return moment(record.date,"YYYY-MM-DD").isBetween(this.state.dateRange[0],this.state.dateRange[1])? record:null; 
        }else {
          return record;
        }
      }).filter(record => !!record)
    })); 
  
  }

  render() {
    let { filteredInfo } = this.state;
    filteredInfo = filteredInfo || {};
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
            onPressEnter={this.onNameSearch}
          />
          <Button type="primary" onClick={this.onNameSearch}>搜索</Button>
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
      onFilter: (value, record) => record.type.indexOf(value) === 0,
      filteredValue: filteredInfo.type || null,
    }, {
      title: '规格型号',
      dataIndex: 'model',
      key: 'model'
    }, {
      title: 'P/N',
      dataIndex: 'P/N',
      key: 'P/N'
    }, {
      title: 'S/N',
      dataIndex: 'SN',
      Key: 'SN'
    }, {
      title: '购置日期',
      dataIndex: 'date',
      key: 'date',
      filterDropdown: (
        <div ref={ele => this.dateArea = ele}>
          <RangePicker 
            getCalendarContainer={ (trigger) => this.dateArea}
            onChange={this.onDateChange}
          />
          <Button type="primary" onClick={this.onDateSearch}>搜索</Button>
        </div>
      ),
      filterIcon: <Icon  type="search"/>,
      filterDropdownVisible: this.state.dateFilterDropdownVisible,
      onFilterDropdownVisibleChange: (visible) => {
        this.setState({
          dateFilterDropdownVisible: visible,
        });
      },
    }, {
      title: '原值',
      dataIndex: 'price',
      key: 'price'
    }, {
      title: '账面数量',
      dataIndex: 'amount',
      key: 'amount'
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
          &nbsp;&nbsp;&nbsp;开启/关闭 分页功能&nbsp;<Switch checked={!!this.state.pagination} onChange={this.handleToggle('pagination')} />
          &nbsp;&nbsp;&nbsp;<Button type="primary" onClick={ this.clearFilters }>重置筛选</Button>
        </div>
        
        <Table 
          columns={columns} 
          dataSource={this.state.data} 
          bordered 
          pagination={this.state.pagination}
          scroll={{ x: 1600 }}
          onChange={this.handleTableChange}
        />
      </div>
    )
  }
}

export default BaseInfo;

