import React, { Component } from "react";
import moment from "moment";
import BaseInfoPresent from './base/BaseInfoPresent';
//模拟列表信息
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: i % 2 === 1 ? "万用表" : "台式电脑",
    type: i % 2 === 1 ? "维护工具" : "办公设备",
    model: "胜利钳形表6956B",
    sn: "092723011",
    amount: 1,
    date: "2017/6/" + (i + 1),
    price: 169,
    remark: "模拟数据"
  });
}

const InfoContainer = (WrappedComponent, data) => {
  return class extends Component {
    /**
     * filterDropdownVisible 是否显示下拉框
     * data 筛选后的数据
     * searchText 搜索的内容(name)
     * filtered 是否已经筛选(name)
     * pagination 分页具体属性
     * dataRange  记录日期选择器数据
     * filteredInfo 控制筛选信息（非自定义），重置筛选时用到
     */
    constructor(props) {
      super(props);
      this.state = {
        filterDropdownVisible: false,
        dateFilterDropdownVisible: false,
        data,
        searchText: "",
        filtered: false,
        pagination: {
          showSizeChanger: true,
          showQuickJumper: true,
          pageSizeOptions: ["5", "10", "20", "30", "40"],
          defaultPageSize: 5
        },
        dateRange: null,
        filteredInfo: null
      };
    }

    //表格改变事件回调
    handleTableChange = (pagination, filters, sorter) => {
      this.setState({ filteredInfo: filters });
    };

    //清除筛选（非自定义）
    clearFilters = () => {
      this.setState({
        filteredInfo: null,
        data
      });
    };

    //控制是否分页
    handleToggle = prop => {
      return enable => {
        this.setState({
          [prop]: enable
            ? {
                showSizeChanger: true,
                showQuickJumper: true,
                pageSizeOptions: ["5", "10", "20", "30", "40"],
                defaultPageSize: 5
              }
            : enable
        });
      };
    };

    //onChange回调，将搜索的关键字记录到state
    onInputChange = e => {
      this.setState({ searchText: e.target.value });
    };

    //点击搜索按钮的回调，返回筛选出的数据
    onNameSearch = (key) => {
      const { searchText } = this.state;
      //创建正则，全局匹配，忽略大小写
      const reg = new RegExp(searchText, "gi");
      this.setState(prevState => ({
        filterDropdownVisible: false,
        filtered: !!searchText,
        data: prevState.data
          .map(record => {
            //将该条记录对应的相应字段记录到match中
            const match = record[key].match(reg);
            //如果不匹配，则return null
            if (!match) {
              return null;
            }
            //否则，返回该条记录，并将记录中的name属性
            return {
              ...record
            };
          })
          .filter(record => !!record)
      }));
    };

    //日期搜索改变值回调
    onDateChange = (value, dateString) => {
      console.log(dateString);
      this.setState({
        dateRange: !!dateString[0] ? dateString : null
      });
    };

    //日期搜索按钮回调
    onDateSearch = () => {
      this.setState(prevState => ({
        dateFilterDropdownVisible: false,
        search: {
          ...prevState.search,
          dateRange: 1
        },
        data: prevState.data
          .map(record => {
            if (!!this.state.dateRange) {
              return moment(record.date, "YYYY-MM-DD").isBetween(
                this.state.dateRange[0],
                this.state.dateRange[1]
              )
                ? record
                : null;
            } else {
              return record;
            }
          })
          .filter(record => !!record)
      }));
    };

    //处理表格数据，便于导出
    output = () => {
      const data = this.state.data;
      let dataArray = [];
      dataArray.push([
        "设备名称",
        "资产类被",
        "规格型号",
        "P/N",
        "S/N",
        "购置日期",
        "原值",
        "账面数量",
        "备注"
      ]);
      for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];
        dataArray.push([
          !!dataItem.name ? dataItem.name : "",
          !!dataItem.type ? dataItem.type : "",
          !!dataItem.model ? dataItem.model : "",
          !!dataItem.pn ? dataItem.pn : "",
          !!dataItem.sn ? dataItem.sn : "",
          !!dataItem.date ? dataItem.date : "",
          !!dataItem.price ? dataItem.price : "",
          !!dataItem.amount ? dataItem.amount : "",
          !!dataItem.remark ? dataItem.remark : ""
        ]);
      }
      return dataArray;
    };

    //资产名称搜索下拉菜单变化时调用
    onFilterDropdownVisibleChange = visible => {
      this.setState(
        {
          filterDropdownVisible: visible
        }
        // () => this.searchInput.focus()
      );
    };

    //按日期搜索下拉菜单变化时调用
    dateFilterDropdownVisibleChange = visible => {
      this.setState({
        dateFilterDropdownVisible: visible
      });
    };

    render() {
      let {
        filteredInfo,
        searchText,
        filtered,
        filterDropdownVisible,
        dateFilterDropdownVisible,
        pagination
      } = this.state;
      filteredInfo = filteredInfo || {};
      return (
        <WrappedComponent
          data={this.state.data}
          searchText={searchText}
          onInputChange={this.onInputChange}
          onNameSearch={this.onNameSearch}
          filtered={filtered}
          filterDropdownVisible={filterDropdownVisible}
          onFilterDropdownVisibleChange={this.onFilterDropdownVisibleChange}
          filteredInfo={filteredInfo}
          onDateChange={this.onDateChange}
          onDateSearch={this.onDateSearch}
          dateFilterDropdownVisible={dateFilterDropdownVisible}
          clearFilters={this.clearFilters}
          pagination={pagination}
          handleTableChange={this.handleTableChange}
          {...this.props}
          output={this.output}
          dateFilterDropdownVisibleChange={this.dateFilterDropdownVisibleChange}
        />
      );
    }
  };
};

const BaseInfo = InfoContainer(BaseInfoPresent,data);
export default BaseInfo;
