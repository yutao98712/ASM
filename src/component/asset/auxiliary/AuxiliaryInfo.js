import React from "react";
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
import InfoContainer from "../InfoContainer";

let dataSource = [];
for (let i = 0; i < 20; i++) {
  dataSource.push({
    key:i,
    id: i,
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
//处理表格数据，便于导出
const output = (data) => {
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
      !!dataItem.name ? dataItem.name : "",
      !!dataItem.number ? dataItem.number : "",
      !!dataItem.useDate ? dataItem.useDate : "",
      !!dataItem.life ? dataItem.life : "",
      !!dataItem.discount ? dataItem.discount : "",
      !!dataItem.depreciation ? dataItem.depreciation : "",
      !!dataItem.net ? dataItem.net : "",
      !!dataItem.department ? dataItem.department : "",
      !!dataItem.location ? dataItem.location : "",
      !!dataItem.audiator ? dataItem.audiator : "",
      !!dataItem.custodian ? dataItem.custodian: "",
      !!dataItem.remark ? dataItem.remark : "",
    ]);
  }
  return dataArray;
};
const AuxiliaryInfo = ({clearFilters,pagination,data}) => {
  const columns = [
    {
      title: "资产ID",
      dataIndex: "id",
      key: "id",
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
      key: "number",
      width: 150
    },
    {
      title: "使用日期",
      dataIndex: "useDate",
      key: "useDate",
      width: 150
    },
    {
      title: "折旧年限",
      dataIndex: "life",
      key: "life",
      width: 150
    },
    {
      title: "年折旧额",
      dataIndex: "discount",
      key: "discount",
      width: 150
    },
    {
      title: "累计折旧",
      dataIndex: "depreciation",
      key: "depreciation",
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
      dataIndex: "department",
      key: "department",
      width: 150
    },
    {
      title: "所在区域",
      dataIndex: "location",
      key: "location",
      width: 150
    },
    {
      title: "审核人",
      dataIndex: "audiator",
      key: "autiator",
      width: 150
    },
    {
      title: "保管人",
      dataIndex: "custodian",
      key: "custodian",
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
      width: 150,
      render: (text,record) =>
        <span>
          <Link to={"/asset/editAuxiliary/"+(record.id.toString()?record.id:"error")}>编辑</Link>
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
        <CustomButton color="#49D21C">
          <Icon type="login" /> 导入
        </CustomButton>
        <CSVLink data={output(data)} target="_blank">
          <CustomButton color="#49D21C">
            <Icon type="logout" /> 导出
          </CustomButton>
        </CSVLink>                                                   
        &nbsp;&nbsp;&nbsp;<Button type="primary">
          重置筛选
        </Button>
      </div>
      <Table                                                                            
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ x: 2000, y: 300 }}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};

const Auxiliary = InfoContainer(AuxiliaryInfo,dataSource);
export default Auxiliary;
