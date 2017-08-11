import React from "react";
import { Table, Icon, Button } from "antd";
import Title from "../../custom/Title";
import { Link } from "react-router-dom";
import InfoContainer from "../InfoContainer";
import { CSVLink } from "react-csv";
import CustomButton from "../../custom/CustomButton";

let dataSource = [];
for (let i = 0; i < 20; i++) {
  dataSource.push({
    key: i,
    repair_ID: i,
    asset_ID: i,
    asset_name: i % 2 === 1 ? "万用表" : "台式电脑",
    repair_time: "2017/7/14",
    repair_course: "设备故障（排查中）",
    repair_process: "换了零件",
    repair_man: "李四",
    repair_cost: 100.0,
    purchaseProff_ID: i,
    repair_handler: "张三",
    remarks: "模拟数据"
  });
}

const MaintainInfoForm = ({data,pagination}) => {
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
      title: "维修日期",
      dataIndex: "repair_time",
      key: "repair_time",
      width: 150,
    },
    {
      title: "维修原因",
      dataIndex: "repair_course",
      key: "repair_course",
      width: 150,
    },
    {
      title: "维修过程",
      dataIndex: "repair_process",
      key: "repair_process",
      width: 150,
    },
    {
      title: "维修人",
      dataIndex: "repair_man",
      key: "repair_man",
      width: 150,
    },
    {
      title: "维修费用",
      dataIndex: "repair_cost",
      key: "repair_cost",
      width: 150,
    },
    {
      title: "经办人",
      dataIndex: "repair_handler",
      key: "repair_handler",
      width: 150,
    },
    {
      title: "备注",
      dataIndex: "remarks",
      key: "remarks",
      width: 150,
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
          <Link to="/">删除</Link>
          <span className="ant-divider" />
          <Link to="/">证明材料</Link>
        </span>
    }
  ];

  return (
    <div>
      <Title>设备维修信息列表</Title>
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
        scroll={{ x: 1450, y:380}}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};

const  MaintainInfo = InfoContainer(MaintainInfoForm, dataSource);
export default MaintainInfo;
