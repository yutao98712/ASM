import React, { Component } from "react";
import { Table } from "antd";
import Title from "../../custom/Title";
import { Link } from "react-router-dom";
let data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: i % 2 === 1 ? "万用表" : "台式电脑",
    date: "2017/7/14",
    cause: "设备故障（排查中）",
    process: "换了零件",
    person: "李四",
    price: 100.00,
    handler: "张三",
    remark: "模拟数据"
  });
}

class MaintainInfo extends Component {
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
        title: "维修日期",
        dataIndex: "date",
        key: "date"
      },
      {
        title: "维修原因",
        dataIndex: "cause",
        key: "cause"
      },
      {
        title: "维修过程",
        dataIndex: "process",
        key: "process"
      },
      {
        title: "维修人",
        dataIndex: "person",
        key: "person"
      },
      {
        title: "维修费用",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "经办人",
        dataIndex: "handler",
        key: "handler"
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
        <Title>资产维修信息列表</Title>
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

export default MaintainInfo;