import React, { Component } from 'react';

class Test extends Component {
  fetchInfo = () =>{
    fetch(` `)
      .then(response => response.json())
      .then(json => console.log(json))
  }
  render() {
    return (
      <table ref={this.props.tableRef}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>yutao</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Test;