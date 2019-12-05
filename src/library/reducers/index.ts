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
import FieldAttempt from './field-attempt';
import ActiveSound from './activeSound';
import SoundAttempt from './sound-attempt';
import Score from './score';
import Scores from './scores';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  Menu,
  Register,
  Request,
  Login,
  Auth,
  Settings,
  ActiveField,
  ActiveSound,
  Counter,
  Round,
  NBack,
  FieldAttempt,
  SoundAttempt,
  Score,
  Scores,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
