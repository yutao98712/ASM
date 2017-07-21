import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import BaseInfo from '../asset/BaseInfo';
import { RouteWithSubRoutes } from '../../route';
class ContentView extends Component {
  render() {
    const {routes} = this.props;
    return (
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        {routes.map((route,i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    )
  }
}

export default ContentView;