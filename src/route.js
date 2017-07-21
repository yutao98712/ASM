import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import LazyLoader from './LazyLoader';
import loadBase from 'bundle-loader?lazy!./component/asset/BaseInfo';
import HomePage from './component/Home';
import UserCenter from './component/management/UserCenter';
import Detail from './component/management/Detail';
import WrappedLoginForm from './component/LoginForm';

const BaseInfo = (props) => (
  <LazyLoader load={loadBase}>
    {(BaseInfo) => <BaseInfo {...props}/>}
  </LazyLoader>
)

const routes = [
  { path: '/asset',
    component: HomePage,
    exact: false,
    routes: [
      { path: '/asset/baseInfo',
        component: BaseInfo,
        exact: true
      },
      { path: '/asset/Detail',
        component: Detail,
        exact: true
      }
    ]
  },
  { path:'/userCenter',
    component: UserCenter,
    exact: false
  },
  {
    path:'/login',
    component: WrappedLoginForm,
    exact: true
  }
];

export const RouteWithSubRoutes = (route) => (
  <Route 
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
        path={route.path}
        exact={route.exact}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )} 
        key={i}
      />
    ));
    return (
      <Router>
        <div>
          { routers }        
        </div>
      </Router>
    )
  }
}

export default RouterConfig;

