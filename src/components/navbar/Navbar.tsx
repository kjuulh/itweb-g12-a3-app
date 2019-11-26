import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => (
  <div className='base'>
    <nav className='nav'>
      <h3 className='logo'>
        <Link to='/'>DNB</Link>
      </h3>
      <ul className='actions'>
        <li className='actions-play'>
          <Link to='/play'>PLAY GAME</Link>
        </li>
        <li className='actions-scores'>
          <Link to='/scores'>SCORES</Link>
        </li>
      </ul>
      <div className='divider'></div>
      <ul className='user-actions'>
        <li className='login'>
          <Link to='/login'>LOGIN</Link>
        </li>
        <li className='register'>
          <Link to='/register'>REGISTER</Link>
        </li>
        <li className='logout'>
          <Link to='/logout'>LOGOUT</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
