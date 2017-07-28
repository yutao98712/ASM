import React, { Component } from "react";
import { RouteWithSubRoutes } from "../../route";
class ContentView extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div
        style={{ padding: "14px 30px", background: "#fff", margin: "0 30px" }}
      >
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    );
  }
}

export default ContentView;
