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
    status_ID: i,
    asset_ID: i,
    asset_name: i % 2 === 1 ? "万用表" : "台式电脑",
    check_date: "2017/10/2",
    status_handler: '张三',
    device_status: "设备完好,无所坏,维修数次" , 
    remarks: "模拟数据"
  });
}

const Status = ({data,pagination}) => {
  const columns = [
    {
      title: "资产ID",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      width: 150
      //自定义筛选菜单，此函数之负责渲染图层
    },
    {
      title: "资产名称",
      dataIndex: "asset_name",
      key: "asset_name",
      fixed: "left",
      width: 150
      //自定义筛选菜单，此函数之负责渲染图层
    },
    {
      title: "检查日期",
      dataIndex: "check_date",
      key: "check_date",
      width: 150,
    },
    
    {
      title: "检查人",
      dataIndex: "status_handler",
      key: "status_handler",
      width: 200,
    },
    {
      title: "检查结果",
      dataIndex: "device_status",
      key: "device_status",
      width: 300,
    },
    {
      title: "备注",
      dataIndex: "remarks",
      key: "remarks",
      width: 200,
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 150,
      render: (text,record) =>
        <span>
          <Link to={`/asset/statusInfo/EditStatus/${record.status_ID}`}>编辑</Link>
          <span className="ant-divider" />
          <Popconfirm title="确定删除？">
            <a>删除</a>
          </Popconfirm>
        </span>
    }
  ];

  return (
    <div>
      <Title>资产现状列表</Title>
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
        scroll={{ x: 1300, y:380 }}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};

const StatusInfo = InfoContainer(Status, dataSource);
export default StatusInfo;
