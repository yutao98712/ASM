import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
const CustomFilterDropdown = styled.div`
  padding: 8px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  input {
    width: 130px;
    margin-right: 8px;
  }
`;

const FilterDropdownPresnt = ({ searchText, onInputChange, onNameSearch, searchItem}) =>(
  <CustomFilterDropdown>
    <Input
      placeholder="请填入搜索名称"
      onChange={onInputChange}
      onPressEnter={
        () => onNameSearch(searchItem)
      }
    />
    <Button
      type="primary"
      onClick={() => {
        onNameSearch(searchItem);
      }}
    >
      搜索
    </Button>
  </CustomFilterDropdown>
);

export default FilterDropdownPresnt;
  

