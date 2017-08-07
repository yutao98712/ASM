import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LazyLoader from "./LazyLoader";
import loadBase from "bundle-loader?lazy!./component/asset/base/BaseInfoPresent";
import AddBase from "./component/asset/base/AddBase";
import EditBase from "./component/asset/base/EditBase";
import HomePage from "./component/Home";
import UserCenter from "./component/management/UserCenter";
import WrappedLoginForm from "./component/LoginForm";
import Auxiliary from "./component/asset/auxiliary/AuxiliaryInfo";
import AddAuxiliary from "./component/asset/auxiliary/AddAuxiliary";
import EditAuxiliary from './component/asset/auxiliary/EditAuxiliary';
import TransferredInfo from "./component/asset/transfers/TransferredInfo";
import StatusInfo from "./component/asset/statusInfo/StatusInfo";
import MaintainInfo from "./component/asset/maintain/MaintainInfo";
import Users from "./component/asset/users/UsersInfo";
import AddUser from './component/asset/users/AddUser';
import EditUser from './component/asset/users/EditUser';
import RolesInfo from './component/asset/roles/RolesInfo';
import AddRole from './component/asset/roles/addRole';
import EditRole from './component/asset/roles/EditRole';
import PersonInfo from './component/asset/personal/PersonInfo';
import EditPassword from './component/asset/personal/EditPassword';
import picutresWall from './component/asset/PicturesWall';
const BaseInfo = props =>
  <LazyLoader load={loadBase}>
    {BaseInfo => <BaseInfo {...props} />}
  </LazyLoader>;

const routes = [
  {
    path: "/asset",
    component: HomePage,
    exact: false,
    routes: [
      {
        path: "/asset/baseInfo",
        component: BaseInfo,
        exact: true
      },
      {
        path: "/asset/baseInfo/addBase",
        component: AddBase,
        exact: true
      },
      {
        path: "/asset/baseInfo/editBase/:id",
        component: EditBase,
        exact: true
      },
      {
        path: "/asset/baseInfo/picutresWall",
        component: picutresWall,
        exact: true
      },
      {
        path: "/asset/auxiliaryInfo",
        component: Auxiliary,
        exact: true
      },
      {
        path: "/asset/AddAuxiliary/:id",
        component: AddAuxiliary,
        exact: true
      },
      {
        path: "/asset/editAuxiliary/:id",
        component: EditAuxiliary,
        exact: true
      },
      {
        path: "/asset/transferredInfo",
        component: TransferredInfo,
        exact: true
      },
      {
        path: "/asset/statusInfo",
        component: StatusInfo,
        exact: true
      },
      {
        path: "/asset/MaintainInfo",
        component: MaintainInfo,
        exact: true
      },
      {
        path: "/asset/usersInfo",
        component: Users,
        exact: true
      },
      {
        path: "/asset/usersInfo/addUser",
        component: AddUser,
        exact: true
      },
      {
        path: "/asset/usersInfo/EditUser/:staffId",
        component: EditUser,
        exact: true
      },
      {
        path: "/asset/rolesInfo",
        component: RolesInfo,
        exact: true
      },
      {
        path: "/asset/rolesInfo/addRole",
        component: AddRole,
        exact: true
      },
      {
        path: "/asset/rolesInfo/EditRole/:id",
        component: EditRole,
        exact: true
      },
      {
        path: "/asset/personal/personalInfo",
        component: PersonInfo,
        exact: true
      },
      {
        path: "/asset/personal/editPassword",
        component: EditPassword,
        exact: true
      }
    ]
  },
  {
    path: "/userCenter",
    component: UserCenter,
    exact: false
  },
  {
    path: "/login",
    component: WrappedLoginForm,
    exact: true
  }
];

export const RouteWithSubRoutes = route =>
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} routes={route.routes} />}
  />;

class RouterConfig extends Component {
  render() {
    const routers = routes.map((route, i) =>
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
        key={i}
      />
    );
    return (
      <Router>
        <div>
          {routers}
        </div>
      </Router>
    );
  }
}

export default RouterConfig;
