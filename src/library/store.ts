import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import Reducers from './reducers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: Reducers,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
