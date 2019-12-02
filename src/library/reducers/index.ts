import { combineReducers } from 'redux';
import Menu from './menu';
import Register from './register';
import Request from './request';
import Login from './login';
import Auth from './auth';
import Settings from './gameSettings';
import ActiveField from './activeField';
import Counter from './counter';
import Round from './round';
import NBack from './nback';

const reducer = combineReducers({
  Menu,
  Register,
  Request,
  Login,
  Auth,
  Settings,
  ActiveField,
  Counter,
  Round,
  NBack,
});

export default reducer;
