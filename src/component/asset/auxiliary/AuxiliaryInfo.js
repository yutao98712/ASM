import React, { Component } from "react";
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
import Title from "../../custom/Title";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import CustomButton from "../../custom/CustomButton";

let data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: i % 2 === 1 ? "万用表" : "台式电脑",
    number: "A254378",
    useDate: "2016/5/30",
    life: i % 2 === 1 ? 3 : 5,
    discount: 0,
    depreciation: 0,
    net: 0,
    department: "研发中心",
    location: "仓库",
    audiator: "张三",
    custodian: "李四",
    remark: "模拟数据"
  });
}

const AuxiliaryInfo = (clearFilters) => {
  const columns = [
    {
      title: "资产ID",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      width: 100
      //自定义筛选菜单，此函数之负责渲染图层
    },
    {
      title: "资产名称",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 100
      //自定义筛选菜单，此函数之负责渲染图层
    },
    {
      title: "资产编号",
      dataIndex: "number",
      key: "number"
    },
    {
      title: "使用日期",
      dataIndex: "useDate",
      key: "useDate"
    },
    {
      title: "折旧年限",
      dataIndex: "life",
      key: "life"
    },
    {
      title: "年折旧额",
      dataIndex: "discount",
      key: "discount"
    },
    {
      title: "累计折旧",
      dataIndex: "depreciation",
      key: "depreciation"
    },
    {
      title: "净值",
      dataIndex: "net",
      key: "net"
    },
    {
      title: "所在公司或部门",
      dataIndex: "department",
      key: "department"
    },
    {
      title: "所在区域",
      dataIndex: "location",
      key: "location"
    },
    {
      title: "审核人",
      dataIndex: "audiator",
      key: "autiator"
    },
    {
      title: "保管人",
      dataIndex: "custodian",
      key: "custodian"
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
      width: 150,
      render: () =>
        <span>
          <Link to="/">编辑</Link>
          <span className="ant-divider" />
          <Link to="/">删除</Link>
        </span>
    }
  ];

  return (
    <div>
      <Title>资产辅助信息列表</Title>
      <div style={{ padding: "20px 0" }}>
        <CustomButton color="#49D21C">
          <Icon type="login" /> 导入
        </CustomButton>
        <CSVLink data={""} target="_blank">
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
        scroll={{ x: 1600 }}
      />
    </div>
  );
};

export default AuxiliaryInfo;
