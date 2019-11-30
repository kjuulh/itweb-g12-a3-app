import { combineReducers } from 'redux';
import Menu from './menu';
import Register from './register';
import Request from './request';
import Login from './login';
import Auth from './auth';

const reducer = combineReducers({
  Menu,
  Register,
  Request,
  Login,
  Auth,
});

export default reducer;
