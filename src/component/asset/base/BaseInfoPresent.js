import React from "react";
import Title from "../../custom/Title";
import CustomButton from "../../custom/CustomButton";
import CustomFilterDropdown from "../../custom/CustomFilterDropdown";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import { Table, Icon, Button, Input, Menu, Dropdown, DatePicker, Popconfirm } from "antd";
import PropTypes from 'prop-types';
const RangePicker = DatePicker.RangePicker;

const BaseInfo = ({
  searchText,
  onInputChange,
  onNameSearch,
  filtered,
  filterDropdownVisible,
  onFilterDropdownVisibleChange,
  filteredInfo,
  onDateChange,
  onDateSearch,
  dateFilterDropdownVisible,
  dateFilterDropdownVisibleChange,
  clearFilters,
  data,
  pagination,
  handleTableChange,
  output,
}) => {
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
  );
  const columns = [
    {
      title: "资产ID",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      width: 100
    },
    {
      title: "资产名称",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 100,
      filterDropdown: (
        <CustomFilterDropdown>
          <Input
            placeholder="请填入搜索名称"
            value={searchText}
            onChange={onInputChange}
            onPressEnter={()=>{onNameSearch("name")}}
          />
          <Button type="primary" onClick={()=>{onNameSearch("name")}}>
            搜索
          </Button>
        </CustomFilterDropdown>
      ),
      filterIcon: (
        <Icon type="search" style={{ color: filtered ? "#108ee9" : "#aaa" }} />
      ),
      //控制自定义筛选菜单是否可见
      filterDropdownVisible,
      //自定义菜单可见变化时调用
      onFilterDropdownVisibleChange
    },
    {
      title: "资产类别",
      dataIndex: "type",
      key: "type",
      filters: [
        {
          text: "维护工具",
          value: "维护工具"
        },
        {
          text: "办公设备",
          value: "办公设备"
        },
        {
          text: "仪器仪表",
          value: "仪器仪表"
        }
      ],
      onFilter: (value, record) => record.type.indexOf(value) === 0,
      filteredValue: filteredInfo.type || null
    },
    {
      title: "规格型号",
      dataIndex: "model",
      key: "model",
      filterDropdown: (
        <CustomFilterDropdown>
          <Input
            placeholder="请填入搜索名称"
            value={searchText}
            onChange={onInputChange}
            onPressEnter={()=>{onNameSearch("model")}}
          />
          <Button type="primary" onClick={()=>{onNameSearch("model")}}>
            搜索
          </Button>
        </CustomFilterDropdown>
      ),
      filterIcon: (
        <Icon type="search" style={{ color: "#aaa" }} />
      ),
    },
    {
      title: "P/N",
      dataIndex: "pn",
      key: "pn",
      filterDropdown: (
        <CustomFilterDropdown>
          <Input
            placeholder="请填入搜索名称"
            value={searchText}
            onChange={onInputChange}
            onPressEnter={()=>{onNameSearch("pn")}}
          />
          <Button type="primary" onClick={()=>{onNameSearch("pn")}}>
            搜索
          </Button>
        </CustomFilterDropdown>
      ),
      filterIcon: (
        <Icon type="search" style={{ color: "#aaa" }} />
      ),
    },
    {
      title: "S/N",
      dataIndex: "sn",
      Key: "sn",
      filterDropdown: (
        <CustomFilterDropdown>
          <Input
            placeholder="请填入搜索名称"
            value={searchText}
            onChange={onInputChange}
            onPressEnter={()=>{onNameSearch("sn")}}
          />
          <Button type="primary" onClick={()=>{onNameSearch("sn")}}>
            搜索
          </Button>
        </CustomFilterDropdown>
      ),
      filterIcon: (
        <Icon type="search" style={{ color: "#aaa" }} />
      ),
    },
    {
      title: "购置日期",
      dataIndex: "date",
      key: "date",
      filterDropdown: (
        <div ref={ele => (this.dateArea = ele)}>
          <RangePicker
            getCalendarContainer={trigger => this.dateArea}
            onChange={onDateChange}
          />
          <Button type="primary" onClick={onDateSearch}>
            搜索
          </Button>
        </div>
      ),
      filterIcon: <Icon type="search" />,
      filterDropdownVisible: dateFilterDropdownVisible,
      onFilterDropdownVisibleChange: dateFilterDropdownVisibleChange
    },
    {
      title: "原值",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "账面数量",
      dataIndex: "amount",
      key: "amount"
    },
    {
      title: "备注",
      dataIndex: "remark",
      key: "remark"
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 200,
      render: () =>
        <span>
          <Link to="/">编辑</Link>
          <span className="ant-divider" />
          <Popconfirm title="确定删除？">
            <a>删除</a>
          </Popconfirm>
         
          <span className="ant-divider" />
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              更多<Icon type="down" />
            </a>
          </Dropdown>
        </span>
    }
  ];
  return (
    <div>
      <Title>资产基本信息列表</Title>
      <div style={{ padding: "20px 0" }}>
        <Link to="/asset/baseInfo/addBase">
          <CustomButton color="#0099ff">
            <Icon type="plus-circle" /> 增加
          </CustomButton>
        </Link>
        <CustomButton color="#49D21C">
          <Icon type="login" /> 导入
        </CustomButton>
        <CSVLink data={output()} target="_blank">
          <CustomButton color="#49D21C">
            <Icon type="logout" /> 导出
          </CustomButton>
        </CSVLink>
        &nbsp;&nbsp;&nbsp;<Button type="primary" onClick={clearFilters}>
          重置筛选
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={pagination}
        scroll={{ x: 1600 }}
        onChange={handleTableChange}
      />
    </div>
  );
};

BaseInfo.propTypes = {
  searchText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onNameSearch: PropTypes.func.isRequired,
  filtered: PropTypes.bool.isRequired,
  filterDropdownVisible: PropTypes.bool.isRequired,
  onFilterDropdownVisibleChange: PropTypes.func.isRequired,
  filteredInfo: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onDateSearch: PropTypes.func.isRequired,
  dateFilterDropdownVisible: PropTypes.bool.isRequired,
  dateFilterDropdownVisibleChange: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  handleTableChange: PropTypes.func.isRequired,
  output: PropTypes.func.isRequired
}
export default BaseInfo;
