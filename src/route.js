import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './component/management/HomePage';
import UserCenter from './component/management/UserCenter';
import Summary from './component/management/Summary';
import Detail from './component/management/Detail';
import WrappedLoginForm from './component/LoginForm';
const routes = [
  { path: '/',
    component: HomePage,
    routes: [
      { path: '/summary',
        compoent: Summary
      },
      { path: '/Detail',
        compoent: Detail
      }
    ]
  },
  { path:'/userCenter',
    component: UserCenter
  },
  {
    path:'/login',
    component: WrappedLoginForm
  }
];

export const RouteWithSubRoutes = (route) => (
  <Route 
    exact
    path={route.path} 
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
)

class RouterConfig extends Component{
  render() {
    const routers = routes.map((route, i) => (
      <Route 
        exact 
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )} 
        key={i}
      />
    ));
    return (
      <Router>
        <Switch>
          {routers}
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig;

