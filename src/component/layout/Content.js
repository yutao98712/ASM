import React, { Component } from 'react';
import { RouteWithSubRoutes } from '../../route';
class ContentView extends Component {
  render() {
    const {routes} = this.props;
    return (
      <div style={{ padding: 14, background: '#fff'}}>
        {routes.map((route,i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    )
  }
}

export default ContentView;