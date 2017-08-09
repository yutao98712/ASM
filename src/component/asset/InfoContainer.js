import React, { Component } from "react";
import moment from "moment";

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
        },
        dateRange: null,
        filteredInfo: null,
        searchNumber: Number.POSITIVE_INFINITY
      };
    }

    //表格改变事件回调
    handleTableChange = (pagination, filters, sorter) => {
      this.setState({ filteredInfo: filters });
      console.log(filters);
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
      this.setState({
        dateRange: !!dateString[0] ? dateString : null
      });
    };

    //日期搜索按钮回调
    onDateSearch = (key) => {
      this.setState(prevState => ({
        dateFilterDropdownVisible: false,
        search: {
          ...prevState.search,
          dateRange: 1
        },
        data: prevState.data
          .map(record => {
            if (!!this.state.dateRange) {
              return moment(record[key], "YYYY-MM-DD").isBetween(
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

    //数值范围查询，数值改变回掉
    onNumberChange = value => {
     this.setState({
       searchNumber: value
     })
    }
    //数值筛选按钮回调
    onNumberSearch = (key) => {
      const { searchNumber } = this.state;
      //创建正则，全局匹配，忽略大小写
      this.setState(prevState => ({
        filterDropdownVisible: false,
        data: prevState.data
          .map(record => {
            //将该条记录对应的相应字段记录到match中
            const match = record[key]===searchNumber;
            //如果不匹配，则return null
            if (!match) {
              return null;
            }
            //否则
            return {
              ...record
            };
          })
          .filter(record => !!record)
      }));
    }

    render() {
      let {
        filteredInfo,
        searchText,
        filtered,
        filterDropdownVisible,
        dateFilterDropdownVisible,
        pagination,
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
          dateFilterDropdownVisibleChange={this.dateFilterDropdownVisibleChange}
          onNumberChange={this.onNumberChange}
          onNumberSearch={this.onNumberSearch}
        />
      );
    }
  };
};


export default InfoContainer;

