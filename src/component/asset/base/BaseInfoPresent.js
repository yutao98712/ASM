import React from "react";
import Title from "../../custom/Title";
import CustomButton from "../../custom/CustomButton";
import FilterDropdownPresnt from "../../custom/CustomFilterDropdown";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import {
  Table,
  Icon,
  Button,
  Input,
  Menu,
  Dropdown,
  DatePicker,
  Popconfirm,
  InputNumber
} from "antd";
import PropTypes from "prop-types";
import InfoContainer from "../InfoContainer";
const InputGroup = Input.Group;
const RangePicker = DatePicker.RangePicker;

//处理表格数据，便于导出
const output = (data) => {
  let dataArray = [];
  dataArray.push([
    "资产名称",
    "资产类型",
    "规格型号",
    "P/N",
    "S/N",
    "购置日期",
    "原值",
    "账面数量",
    "备注"
  ]);
  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];
    dataArray.push([
      !!dataItem.name ? dataItem.name : "",
      !!dataItem.type ? dataItem.type : "",
      !!dataItem.model ? dataItem.model : "",
      !!dataItem.pn ? dataItem.pn : "",
      !!dataItem.sn ? dataItem.sn : "",
      !!dataItem.date ? dataItem.date : "",
      !!dataItem.price ? dataItem.price : "",
      !!dataItem.amount ? dataItem.amount : "",
      !!dataItem.remark ? dataItem.remark : ""
    ]);
  }
  return dataArray;
};

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
}) => {
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
      width: 150,
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
      width: 150,
      filterDropdown: (
        <FilterDropdownPresnt
          onInputChange={onInputChange}
          onNameSearch={onNameSearch}
          searchItem="model"
          searchText={searchText}
        />
      ),
      filterIcon: <Icon type="search" style={{ color: "#aaa" }} />
    },
    {
      title: "P/N",
      dataIndex: "pn",
      key: "pn",
      width: 150,
      filterDropdown: (
        <FilterDropdownPresnt
          onInputChange={onInputChange}
          onNameSearch={onNameSearch}
          searchItem="pn"
          searchText={searchText}
        />
      ),
      filterIcon: <Icon type="search" style={{ color: "#aaa" }} />
    },
    {
      title: "S/N",
      dataIndex: "sn",
      Key: "sn",
      width: 150,
      filterDropdown: (
        <FilterDropdownPresnt
          onInputChange={onInputChange}
          onNameSearch={onNameSearch}
          searchItem="sn"
          searchText={searchText}
        />
      ),
      filterIcon: <Icon type="search" style={{ color: "#aaa" }} />
    },
    {
      title: "购置日期",
      dataIndex: "date",
      key: "date",
      width: 150,
      filterDropdown: (
        <div
          ref={ele => (this.dateArea = ele)}
          style={{
            padding: 8,
            borderRadius: 6,
            background: " #fff",
            boxShadow: " 0 1px 6px rgba(0, 0, 0, .2)"
          }}
        >
          <RangePicker
            getCalendarContainer={trigger => this.dateArea}
            onChange={onDateChange}
          />
          <Button
            type="primary"
            onClick={onDateSearch}
            style={{
              marginLeft: 10
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
      width: 150,
      filterDropdown: (
        <InputGroup>
          <InputNumber
            style={{ width: 100, textAlign: "center" }}
            placeholder="最小值"
          />
          <InputNumber
            style={{ width: 100, textAlign: "center", borderLeft: 0 }}
            placeholder="最大值"
          />
          <Button type="primary">搜索</Button>
        </InputGroup>
      ),
      filterIcon: <Icon type="search" />
    },
    {
      title: "账面数量",
      dataIndex: "amount",
      key: "amount",
      width: 150
    },
    {
      title: "备注",
      dataIndex: "remark",
      key: "remark",
      width: 150
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 200,
      render: (text, record) => {
        const menu = (
          <Menu>
            <Menu.Item>
              <Link to="/">实物图片</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/">发票</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/asset/AddAuxiliary/" + record.id}>完善辅助信息</Link>
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
        return (
          <span>
            <Link to={"/asset/baseInfo/editBase/" + record.id}>编辑</Link>
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
        );
      }
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
        <CSVLink data={output(data)} target="_blank">
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
        scroll={{ x: 1600, y: 300 }}
        size="middle"
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
};

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    id: i,
    name: i % 2 === 1 ? "万用表" : "台式电脑",
    type: i % 2 === 1 ? "维护工具" : "办公设备",
    model: "胜利钳形表6956B",
    sn: "092723011",
    amount: 1,
    date: "2017/6/" + (i + 1),
    price: 169,
    remark: "模拟数据",
    pn: ""
  });
}

const BaseInfoPresent = InfoContainer(BaseInfo, data);
export default BaseInfoPresent;
