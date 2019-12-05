import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home.page/HomePage';
import { Menu } from '../menu/Menu';
import './Body.scss';
import RegisterPage from '../../pages/register.page/RegisterPage';
import LoginPage from '../../pages/login.page/LoginPage';
import GamePage from '../../pages/game.page/GamePage';
import ScoresPage from '../../pages/scores.page/ScoresPage';
import { useSelector } from 'react-redux';
import { AuthState } from '../../library/reducers/auth';
import { SocketService } from '../../services/socket.service';

const Body: React.FC = () => {
  SocketService.openSocket();

  return (
    <div className='body-container'>
      <Menu></Menu>
      <Switch>
        <Route path='/play'>
          <GamePage></GamePage>
        </Route>
        <Route path='/scores'>
          <ScoresPage></ScoresPage>
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
