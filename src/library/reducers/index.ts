import { combineReducers } from 'redux';
import Menu from './menu';
import Register from './register';
import Request from './request';
import Login from './login';
import Auth from './auth';
import Settings from './gameSettings';

const reducer = combineReducers({
  Menu,
  Register,
  Request,
  Login,
  Auth,
  Settings,
});

export default reducer;
