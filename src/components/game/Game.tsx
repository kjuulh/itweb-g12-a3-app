import React from 'react';
import './Game.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  GameSettingsState,
  GameRunningState,
  start,
} from '../../library/reducers/gameSettings';
import Grid from '../grid/Grid';
import Score from '../score/Score';
import ProgressBar from '../progress/progress-bar/ProgressBar';

const Game: React.FC = () => {
  const dispatch = useDispatch();

  const [currentField, setCurrentField] = React.useState(-1);
  const [currentTime, setCurrentTime] = React.useState(0);

  const { state, widthHeight } = useSelector(
    (state: { Settings: GameSettingsState }) => state.Settings,
  );

  if (state == GameRunningState.Finished) {
    return (
      <div className='game-finished'>
        <div className='game-banner'>
          <span className='game-title'>Play the game</span>
          <button
            className='game-play-button'
            onClick={() => dispatch(start({ widthHeight: 3 }))}
          >
            Play
          </button>
        </div>
      </div>
    );
  }

  const n = 1;
  setTimeout(() => {
    const max = widthHeight * widthHeight;
    const min = 1;
    const number = Math.floor(Math.random() * (max - min));
    setCurrentField(number);
    setCurrentTime(currentTime == 0 ? 100 : 0);
  }, 5000);

  return (
    <div className='game-running'>
      <div className='counter'>
        Counter <span className='counter-letter'>N</span>={n}
      </div>
      <div className='grid'>
        <Grid
          rows={widthHeight}
          columns={widthHeight}
          currentField={currentField}
        ></Grid>
      </div>
      <div className='buttons'>
        <button className='place'>Place</button>
        <button className='sound'>Sound</button>
      </div>
      <div className='progress'>
        <ProgressBar
          timed={true}
          duration={5}
          progress={currentTime}
        ></ProgressBar>
      </div>
      <div className='score'>
        <Score></Score>
      </div>
    </div>
  );
};

export default Game;
