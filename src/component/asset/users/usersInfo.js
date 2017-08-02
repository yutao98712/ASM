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

let usersDataSource = [];
for (let i = 0; i < 20; i++) {
  usersDataSource.push({
    key: i,
    staffId: i,
    name: i % 2 === 1 ? "张三" : "李四",
    department: "研发中心",
    position: "前端开发",
    contact: "15167303132",
    role: "普通用户"
  });
}

const UsersInfo = ({ clearFilters, pagination, data }) => {
  const columns = [
    {
      title: "员工工号",
      dataIndex: "staffId",
      key: "staffId",
      fixed: "left",
      width: 100
      
    },
    {
      title: "员工姓名",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 150
    
    },
    {
      title: "测试",
      dataIndex: "test",
      key: "test",
      width: 200,
      render: () => (
        <span>测试实施军事打击了</span>
      )
    },
    {
      title: "所属部门",
      dataIndex: "department",
      key: "department",
      width: 150
    },
    {
      title: "员工职位",
      dataIndex: "position",
      key: "position",
      width: 150
    },
    {
      title: "联系方式",
      dataIndex: "contact",
      key: "contact",
      width: 150,
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      width: 150,
    },
    {
      title: "操作",
      key: "action",
      width: 150,
      fixed:'right',
      render: (text, record) =>
        <span>
          <Link
            to={
              "/asset/editAuxiliary/" +
              (record.staffId.toString() ? record.id : "error")
            }
          >
            修改用户信息
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
      <Title>用户信息列表</Title>
      <div style={{ padding: "20px 0" }}>
        <CustomButton color="#49D21C">
          <Icon type="login" /> 导入
        </CustomButton>
        <CSVLink data={""} target="_blank">
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
        scroll={{ x: 1200, y: 300 }}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};

const Users = InfoContainer(UsersInfo, usersDataSource);
export default Users;
