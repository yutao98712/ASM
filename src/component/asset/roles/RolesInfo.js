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
import CustomButton from "../../custom/CustomButton";
import InfoContainer from "../InfoContainer";

let usersDataSource = [];
for (let i = 0; i < 2; i++) {
  usersDataSource.push({
    key: i,
    roleId: i,
    roleName: i % 2 === 1 ? "游客" : "普通用户",
    permission: "基本信息管理;辅助信息管理;",
  });
}

const Roles = ({ clearFilters, pagination, data }) => {
  const columns = [
    {
      title: "角色ID",
      dataIndex: "roleId",
      key: "roleId",
      fixed: "left",
      width: 150
      
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName",
      fixed: "left",
      width: 150
    
    },
    {
      title: "权限",
      dataIndex: "permission",
      key: "permission",
      width: 800
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
              "/asset/rolesInfo/EditRole/" +
              (record.roleId.toString() ? record.roleId : "error")
            }
          >
            修改权限
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
      <Title>角色信息列表</Title>
      <div style={{ padding: "20px 0" }}>
        <Link to="/asset/rolesInfo/addRole">
          <CustomButton color="#0099ff">
            <Icon type="plus-circle" /> 添加角色
          </CustomButton>
        </Link>
        &nbsp;&nbsp;&nbsp;<Button type="primary">重置筛选</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ x:1250, y: 300 }}
        pagination={pagination}
        size="middle"
      />
    </div>
  );
};

const RolesInfo = InfoContainer(Roles, usersDataSource);
export default RolesInfo;
