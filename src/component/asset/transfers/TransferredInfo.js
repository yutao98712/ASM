import React from "react";
import { Table, Icon, Button, Popconfirm } from "antd";
import Title from "../../custom/Title";
import { Link } from "react-router-dom";
import InfoContainer from "../InfoContainer";
import { CSVLink } from "react-csv";
import CustomButton from "../../custom/CustomButton";

let dataSource = [];
for (let i = 0; i < 20; i++) {
  dataSource.push({
    key: i,
    transfer_ID: i,
    asset_ID: i,
    asset_name: i % 2 === 1 ? "万用表" : "台式电脑",
    transfer_dept: "研发中心",
    receiving_dept: "财务部",
    transfer_date: "2016/5/30",
    purpose: "借用",
    property: "短期借用",
    transfer_mode: "人员随带",
    transfer_handler: "张三",
    receiving_handler: "李四",
    remarks: "模拟数据",
    transferProof_ID : i
  });
}

const Transferred = ({ clearFilters, pagination, data }) => {
  const columns = [
    {
      title: "资产ID",
      dataIndex: "transfer_ID",
      key: "transfer_ID",
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
      title: "调出部门",
      dataIndex: "transfer_dept",
      key: "transfer_dept",
      width:150
    },
    {
      title: "调入部门",
      dataIndex: "receiving_dept",
      key: "receiving_dept",
      width:150
    },
    {
      title: "调出日期",
      dataIndex: "transfer_date",
      key: "transfer_date",
      width: 150
    },
    {
      title: "用途",
      dataIndex: "purpose",
      key: "purpose",
      width: 150
    },
    {
      title: "出调性质",
      dataIndex: "property",
      key: "property",
      width: 150
    },
    {
      title: "出调方式",
      dataIndex: "transfer_mode",
      key: "transfer_mode",
      width: 150
    },
    {
      title: "经办人",
      dataIndex: "transfer_handler",
      key: "transfer_handler",
      width: 150
    },
    {
      title: "接受人",
      dataIndex: "receiving_handler",
      key: "receiving_handler",
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
      width: 200,
      render: (text,record) =>
        <span>
          <Link to={`/asset/transferredInfo/edittransferred/${record.transfer_ID}`}>编辑</Link>
          <span className="ant-divider" />
          <Popconfirm title="确定删除？">
            <a>删除</a>
          </Popconfirm>
          <span className="ant-divider" />
          <Link to="/asset/baseInfo/picutresWall">证明材料</Link>
        </span>
    }
  ];

  return (
    <div>
      <Title>资产调拨信息列表</Title>
      <div style={{ padding: "20px 0" }}>
        <CSVLink data={"no message"} target="_blank">
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
        scroll={{ x: 1750, y:380 }}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};
const TransferredsInfo = InfoContainer(Transferred, dataSource);
export default TransferredsInfo;
