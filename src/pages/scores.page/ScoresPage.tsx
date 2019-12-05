import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScoresState, getScores } from '../../library/reducers/scores';
import { SocketService } from '../../services/socket.service';

import './ScoresPage.scss';

const ScoresPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScores());

    SocketService.integrateCallbacks(dispatch);
  }, []);

  const { scores } = useSelector(
    (state: { Scores: ScoresState }) => state.Scores,
  );

  return (
    <div className='scores-page'>
      {scores.map((score, i) => (
        <>
          <div className='score' key={i} style={{ margin: '0 auto' }}>
            <span className='ranking'>{i + 1}</span>
            <span className='amount'>{score.score}</span>
            <span className='username'>{score.username}</span>
          </div>
          {scores.length - 1 !== i ? <div className='divider'></div> : null}
        </>
      ))}
    </div>
  );
};

export default ScoresPage;
