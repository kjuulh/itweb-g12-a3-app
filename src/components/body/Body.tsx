import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home.page/HomePage';
import { Menu } from '../menu/Menu';
import './Body.scss';
import RegisterPage from '../../pages/register.page/RegisterPage';
import LoginPage from '../../pages/login.page/LoginPage';
import GamePage from '../../pages/game.page/GamePage';

const Body: React.FC = () => {
  return (
    <div className='body-container'>
      <Menu></Menu>
      <Switch>
        <Route path='/play'>
          <GamePage></GamePage>
        </Route>
        <Route path='/scores'>
          <div>Scores</div>
        </Route>
        <Route path='/login'>
          <LoginPage></LoginPage>
        </Route>
        <Route path='/register'>
          <RegisterPage></RegisterPage>
        </Route>
        <Route path='/*'>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
