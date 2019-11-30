import React from 'react';

import './Menu.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { menuClosed } from '../../library/reducers/menu';
import { logout } from '../../library/reducers/auth';

export const Menu = () => {
  const { menuOpen } = useSelector((state: any) => state.Menu);
  const dispatch = useDispatch();

  const close = () => dispatch(menuClosed());

  const { loggedIn } = useSelector((state: any) => state.Auth);

  return (
    <div
      className='menu-content'
      style={{
        opacity: menuOpen ? 1.0 : 0.0,
        visibility: menuOpen ? 'visible' : 'hidden',
      }}
    >
      <div className='container'>
        <ul className='actions'>
          <li className='actions-play'>
            <Link to='/play' onClick={() => close()}>
              PLAY GAME
            </Link>
          </li>
          <li className='actions-scores'>
            <Link to='/scores' onClick={() => close()}>
              SCORES
            </Link>
          </li>
        </ul>
        <div className='divider'></div>

        <ul className='user-actions'>
          {loggedIn ? (
            <li className='logout'>
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  dispatch(logout());
                  close();
                }}
              >
                LOGOUT
              </a>
            </li>
          ) : (
            <>
              <li className='login'>
                <Link to='/login' onClick={() => close()}>
                  LOGIN
                </Link>
              </li>
              <li className='register'>
                <Link to='/register' onClick={() => close()}>
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
