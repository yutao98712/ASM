import React, { Component } from "react";
import { Table } from "antd";
import Title from "../../custom/Title";
import { Link } from "react-router-dom";
let data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: i % 2 === 1 ? "万用表" : "台式电脑",
    transferredDept: "研发中心",
    receivedDept: "财务部",
    transferredDate: "2016/5/30",
    purpose: "借用",
    property: "短期借用",
    mode: "人员随带",
    transferredHandler: "张三",
    receivedHandler: "李四",
    remark: "模拟数据"
  });
}

class TransferredsInfo extends Component {
  render() {
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
        title: "调出部门",
        dataIndex: "transferredDept",
        key: "transferredDept"
      },
      {
        title: "调入部门",
        dataIndex: "receivedDept",
        key: "receivedDept"
      },
      {
        title: "调出日期",
        dataIndex: "transferredDate",
        key: "transferredDate"
      },
      {
        title: "用途",
        dataIndex: "purpose",
        key: "purpose"
      },
      {
        title: "调用性质",
        dataIndex: "property",
        key: "property"
      },
      {
        title: "调出方式",
        dataIndex: "mode",
        key: "mode"
      },
      {
        title: "经办人",
        dataIndex: "transferredHandler",
        key: "transferredHandler"
      },
      {
        titl: "接受人",
        dataIndex: "receivedHandler",
        key: "receivedHandler"
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
            <Link to="/">删除</Link>
            <span className="ant-divider" />
            <Link to="/">证明材料</Link>
          </span>
      }
    ];

    return (
      <div>
        <Title>资产调拨信息列表</Title>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          scroll={{ x: 1600 }}
        />
      </div>
    );
  }
}

export default TransferredsInfo;