import React from 'react';
import './GamePage.scss';
import Game from '../../components/game/Game';

const GamePage = () => {
  return (
    <div className='game-page'>
      <div className='container'>
        <Game></Game>
      </div>
    </div>
  );
};

export default GamePage;
