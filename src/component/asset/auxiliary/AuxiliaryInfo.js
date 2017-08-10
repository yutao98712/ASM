import React from "react";
import { Table, Icon, Button, Popconfirm } from "antd";
import Title from "../../custom/Title";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import CustomButton from "../../custom/CustomButton";
import InfoContainer from "../InfoContainer";

let dataSource = [];
for (let i = 0; i < 20; i++) {
  dataSource.push({
    key: i,
    audit_ID: i,
    asset_ID: i,
    asset_name: i % 2 === 1 ? "万用表" : "台式电脑",
    asset_no: "A254378",
    used_date: "2016/5/30",
    depreciation: i % 2 === 1 ? 3 : 5,
    asset_price: 100,
    asset_dept: "研发中心",
    asset_location: "仓库",
    audiator_name: "张三",
    asset_custodian: "李四",
    remarks: "模拟数据"
  });
}
//处理表格数据，便于导出
const outputAuxiliary = data => {
  let dataArray = [];
  dataArray.push([
    "资产名称",
    "规格编号",
    "使用日期",
    "折旧年限",
    "年折旧额",
    "累计折旧",
    "净值",
    "所在公司或部门",
    "所在区域",
    "审核人",
    "保管人",
    "备注"
  ]);
  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];
    dataArray.push([
      !!dataItem.asset_name ? dataItem.asset_name : "",
      !!dataItem.asset_no ? dataItem.asset_no : "",
      !!dataItem.used_date ? dataItem.used_date : "",
      !!dataItem.depreciation ? dataItem.depreciation : "",
      !!dataItem.depreciation&&dataItem.asset_price
        ? (dataItem.asset_price *
            0.95 /
            (dataItem.depreciation * 12) *
            12 *
            1).toFixed(2)
        : "",
      !!dataItem.accumulated_depreciation
        ? dataItem.accumulated_depreciation
        : "",
      !!dataItem.net ? dataItem.net : "",
      !!dataItem.asset_dept ? dataItem.asset_dept : "",
      !!dataItem.asset_location ? dataItem.asset_location : "",
      !!dataItem.audiator_name ? dataItem.audiator_name : "",
      !!dataItem.asset_custodian ? dataItem.asset_custodian : "",
      !!dataItem.remarks ? dataItem.remarks : ""
    ]);
  }
  return dataArray;
};
const AuxiliaryInfo = ({ clearFilters, pagination, data, output }) => {
  const columns = [
    {
      title: "资产ID",
      dataIndex: "asset_ID",
      key: "asset_ID",
      fixed: "left",
      width: 100
      //自定义筛选菜单，此函数之负责渲染图层
    },
    {
      title: "资产名称",
      dataIndex: "asset_name",
      key: "asset_name",
      fixed: "left",
      width: 100
      //自定义筛选菜单，此函数之负责渲染图层
    },
    {
      title: "资产编号",
      dataIndex: "asset_no",
      key: "asset_no",
      width: 150
    },
    {
      title: "使用日期",
      dataIndex: "used_date",
      key: "used_date",
      width: 150
    },
    {
      title: "折旧年限",
      dataIndex: "depreciation",
      key: "depreciation",
      width: 150
    },
    {
      title: "年折旧额",
      dataIndex: "annual_depreciation",
      key: "annual_depreciation",
      width: 150,
      render: (text, record) =>
        <span>
          {(record.asset_price *
            0.95 /
            (record.depreciation * 12) *
            12 *
            1).toFixed(2)}
        </span>
    },
    {
      title: "累计折旧",
      dataIndex: "accumulated_depreciation",
      key: "accumulated_depreciation",
      width: 150
    },
    {
      title: "净值",
      dataIndex: "net",
      key: "net",
      width: 150
    },
    {
      title: "所在公司或部门",
      dataIndex: "asset_dept",
      key: "asset_dept",
      width: 150
    },
    {
      title: "所在区域",
      dataIndex: "asset_location",
      key: "asset_location",
      width: 150
    },
    {
      title: "审核人",
      dataIndex: "audiator_name",
      key: "autiator_name",
      width: 150
    },
    {
      title: "保管人",
      dataIndex: "asset_custodian",
      key: "asset_custodian",
      width: 150
    },
    {
      title: "备注",
      dataIndex: "remarks",
      key: "remarks",
      width: 150
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 150,
      render: (text, record) =>
        <span>
          <Link
            to={
              "/asset/editAuxiliary/" +
              (record.audit_ID.toString() ? record.audit_ID : "error")
            }
          >
            编辑
          </Link>
          <span className="ant-divider" />
          <Popconfirm title="确定删除？">
            <a>删除</a>
          </Popconfirm>
        </span>
    }
  ];

  return (
    <div>
      <Title>资产辅助信息列表</Title>
      <div style={{ padding: "20px 0" }}>
        <CSVLink data={output(data)||"no message"} target="_blank">
          <CustomButton color="#49D21C">
            <Icon type="logout" /> 导出
          </CustomButton>
        </CSVLink>
        &nbsp;&nbsp;&nbsp;<Button type="primary">重置筛选</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ x: 2000, y: 380 }}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};

const Auxiliary = InfoContainer(AuxiliaryInfo, dataSource,outputAuxiliary);
export default Auxiliary;
