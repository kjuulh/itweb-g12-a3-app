import React, { useEffect } from 'react';
import './Game.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  GameSettingsState,
  GameRunningState,
  beginGame,
} from '../../library/reducers/gameSettings';
import Grid from '../grid/Grid';
import Score from '../score/Score';
import ProgressBar from '../progress/progress-bar/ProgressBar';
import { setActiveField } from '../../library/reducers/activeField';
import { increment, CounterState } from '../../library/reducers/counter';
import { add } from '../../library/reducers/round';
import { NBackState } from '../../library/reducers/nback';

const Game: React.FC = () => {
  const dispatch = useDispatch();

  const { state, widthHeight, timerDuration } = useSelector(
    (state: { Settings: GameSettingsState }) => state.Settings,
  );

  const count = useSelector(
    (state: { Counter: CounterState }) => state.Counter.count,
  );

  const { n } = useSelector((state: { NBack: NBackState }) => state.NBack);

  const barProgress = count % 2 == 0 ? 0 : 100;

  if (state == GameRunningState.Finished) {
    return (
      <div className='game-finished'>
        <div className='game-banner'>
          <span className='game-title'>Play the game</span>
          <button
            className='game-play-button'
            onClick={() => dispatch(beginGame(2, 5))}
          >
            Play
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='game-running'>
      <div className='counter'>
        Counter <span className='counter-letter'>N</span>={n}
      </div>
      <div className='grid'>
        <Grid rows={widthHeight} columns={widthHeight}></Grid>
      </div>
      <div className='buttons'>
        <button className='place'>Place</button>
        <button className='sound'>Sound</button>
      </div>
      <div className='progress'>
        <ProgressBar
          timed={true}
          duration={timerDuration - 0.2}
          progress={barProgress}
        ></ProgressBar>
      </div>
      <div className='score'>
        <Score></Score>
      </div>
    </div>
  );
};

export default Game;
