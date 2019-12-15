import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { menuClosed, menuOpened } from '../../library/reducers/menu';
import { logout } from '../../library/reducers/auth';
import * as GameSettings from '../../library/reducers/gameSettings';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loggedIn } = useSelector((state: any) => state.Auth);

  const resetGame = () => {
    console.log('Game reset');
    dispatch(GameSettings.resetGame());
  };

  return (
    <div className='navbar base'>
      <nav className='nav'>
        <h3 className='logo' onClick={() => resetGame()}>
          <Link to='/'>DNB</Link>
        </h3>
        {!useSelector((state: any) => state.Menu.menuOpen) ? (
          <>
            <ul className='actions'>
              <li className='actions-play' onClick={() => resetGame()}>
                <Link to='/play'>PLAY GAME</Link>
              </li>
              <li className='actions-scores' onClick={() => resetGame()}>
                <Link to='/scores'>SCORES</Link>
              </li>
            </ul>
            <ul className='user-actions'>
              {loggedIn ? (
                <li className='logout' onClick={() => resetGame()}>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(logout())}
                  >
                    LOGOUT
                  </a>
                </li>
              ) : (
                <>
                  <li className='login' onClick={() => resetGame()}>
                    <Link to='/login'>LOGIN</Link>
                  </li>
                  <li className='register' onClick={() => resetGame()}>
                    <Link to='/register'>REGISTER</Link>
                  </li>
                </>
              )}
            </ul>
            <span
              className='menu'
              onClick={() => {
                dispatch(menuOpened());
                resetGame();
              }}
            >
              <div className='open-icon-base'>
                <div className='icon-row'></div>
              </div>
            </span>
          </>
        ) : (
          <span
            className='close-menu'
            onClick={() => {
              dispatch(menuClosed());
              resetGame();
              setTimeout(() => {
                history.push('/home');
              }, 500);
            }}
          >
            <div className='close-icon-base'></div>
          </span>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
