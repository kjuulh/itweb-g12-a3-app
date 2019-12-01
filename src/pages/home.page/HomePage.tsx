import React from 'react';
import './HomePage.scss';
import { Config } from '../../config/config';

export const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='container'>
        <h1 className='heading'>Home</h1>
        <div className='content'>
          <p>{process.env.REACT_APP_ENVIRONMENT}</p>
          <p>{Config.serverUrl}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            enim tenetur similique aspernatur, impedit odit quisquam dolor
            temporibus numquam dolores nam, amet, explicabo aliquid. Illum
            mollitia beatae qui vel asperiores!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            sapiente recusandae eligendi, provident molestiae placeat laborum
            est neque? Accusamus, eaque veritatis doloremque possimus
            necessitatibus impedit nemo quis porro eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};
