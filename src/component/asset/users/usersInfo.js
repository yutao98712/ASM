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
      width: 170,
      fixed: "left"
      
    },
    {
      title: "员工姓名",
      dataIndex: "name",
      key: "name",
      width: 150,
      fixed: "left"
    
    },
    {
      title: "所属部门",
      dataIndex: "department",
      key: "department",
      width: 200
    },
    {
      title: "员工职位",
      dataIndex: "position",
      key: "position",
      width: 200
    },
    {
      title: "联系方式",
      dataIndex: "contact",
      key: "contact",
      width: 200,
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
      width: 200,
      fixed: "right",
      render: (text, record) =>
        <span>
          <Link
            to={
              "/asset/usersInfo/EditUser/" +
              (record.staffId.toString() ? record.staffId : "error")
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
        <Link to="/asset/usersInfo/addUser">
          <CustomButton color="#0099ff">
            <Icon type="plus-circle" /> 添加用户
          </CustomButton>
        </Link>
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
        scroll={{ x:1270, y: 350 }}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};

const Users = InfoContainer(UsersInfo, usersDataSource);
export default Users;
