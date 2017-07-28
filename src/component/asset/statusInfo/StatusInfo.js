import React, { Component } from "react";
import { Table } from "antd";
import Title from "../../custom/Title";
import { Link } from "react-router-dom";
let data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: i % 2 === 1 ? "万用表" : "台式电脑",
    first: '设备完好',
    second: '设备完好',
    third: '设备完好',
    fourth: '设备损坏',
    reamark: "模拟数据",
    year: '2017'
  });
}

class StatusInfo extends Component {
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
        title: "年度",
        dataIndex: "year",
        key: "year"
      },
      {
        title: "一季度",
        dataIndex: "first",
        key: "first"
      },
      {
        title: "二季度",
        dataIndex: "second",
        key: "second"
      },
      {
        title: "三季度",
        dataIndex: "third",
        key: "third"
      },
      {
        title: "四季度",
        dataIndex: "fourth",
        key: "fourth"
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
            <span className="ant-divider" />
          </span>
      }
    ];

    return (
      <div>
        <Title>资产现状列表</Title>
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

export default StatusInfo;