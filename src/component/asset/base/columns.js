import React from 'react';
import FilterDropdownPresnt  from "../../custom/CustomFilterDropdown";
import { Icon, Button, Input, Menu, Dropdown, DatePicker, Popconfirm, InputNumber } from "antd";
import { Link } from "react-router-dom";
const InputGroup = Input.Group;
const RangePicker = DatePicker.RangePicker;
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
      dataIndex: "id",
      key: "id",
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
        <FilterDropdownPresnt 
          onInputChange={onInputChange}
          onNameSearch={onNameSearch}
          searchItem="name"
          searchText={searchText}
        />
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
        <FilterDropdownPresnt 
          onInputChange={onInputChange}
          onNameSearch={onNameSearch}
          searchItem="model"
          searchText={searchText}
        />
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
        <FilterDropdownPresnt 
          onInputChange={onInputChange}
          onNameSearch={onNameSearch}
          searchItem="pn"
          searchText={searchText}
        />
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
        <FilterDropdownPresnt 
          onInputChange={onInputChange}
          onNameSearch={onNameSearch}
          searchItem="sn"
          searchText={searchText}
        />
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
        <div 
          ref={ele => (this.dateArea = ele)}
          style={{
            padding: 8,
            borderRadius: 6,
            background:" #fff",
            boxShadow:" 0 1px 6px rgba(0, 0, 0, .2)"
          }}
        >
          <RangePicker
            getCalendarContainer={trigger => this.dateArea}
            onChange={onDateChange}
          />
          <Button type="primary" 
            onClick={onDateSearch}
            style={{
              marginLeft:10
            }}
          >
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
      key: "price",
      filterDropdown:(
        <InputGroup>
          <InputNumber style={{ width: 100, textAlign: 'center' }} placeholder="最小值" />
          <InputNumber style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="最大值" />
          <Button type="primary">搜索</Button>
        </InputGroup>
      ),
      filterIcon: <Icon type="search" />,
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
      render: (text,record) =>
        <span>
          <Link to={"/asset/baseInfo/editBase/"+record.id}>编辑</Link>
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