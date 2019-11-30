import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { menuClosed, menuOpened } from '../../library/reducers/menu';
import { logout } from '../../library/reducers/auth';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loggedIn } = useSelector((state: any) => state.Auth);

  return (
    <div className='navbar base'>
      <nav className='nav'>
        <h3 className='logo'>
          <Link to='/'>DNB</Link>
        </h3>
        {!useSelector((state: any) => state.Menu.menuOpen) ? (
          <>
            <ul className='actions'>
              <li className='actions-play'>
                <Link to='/play'>PLAY GAME</Link>
              </li>
              <li className='actions-scores'>
                <Link to='/scores'>SCORES</Link>
              </li>
            </ul>
            <ul className='user-actions'>
              {loggedIn ? (
                <li className='logout'>
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(logout())}
                  >
                    LOGOUT
                  </a>
                </li>
              ) : (
                <>
                  <li className='login'>
                    <Link to='/login'>LOGIN</Link>
                  </li>
                  <li className='register'>
                    <Link to='/register'>REGISTER</Link>
                  </li>
                </>
              )}
            </ul>
            <span className='menu' onClick={() => dispatch(menuOpened())}>
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
