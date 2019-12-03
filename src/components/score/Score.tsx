import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FieldAttemptState } from '../../library/reducers/field-attempt';
import { SoundAttemptState } from '../../library/reducers/sound-attempt';
import './Score.scss';
import * as ScoreActions from '../../library/reducers/score';

const Score = () => {
  const dispatch = useDispatch();
  const fieldAttempts = useSelector(
    (state: { FieldAttempt: FieldAttemptState }) => state.FieldAttempt.attempts,
  );
  const soundAttempts = useSelector(
    (state: { SoundAttempt: SoundAttemptState }) => state.SoundAttempt.attempts,
  );

  const { score } = useSelector(
    (state: { Score: ScoreActions.ScoreState }) => state.Score,
  );

  useEffect(() => {
    let s = 0;
    const factor = 10; //TODO: extract from game settings.
    fieldAttempts.forEach((attempt) => {
      if (attempt.success) {
        s += attempt.nback * factor;
      } else {
        s -= attempt.nback * factor;
      }
    });

    soundAttempts.forEach((attempt) => {
      if (attempt.success) {
        s += attempt.nback * factor;
      } else {
        s -= attempt.nback * factor;
      }
    });

    dispatch(ScoreActions.add(s));
  }, [fieldAttempts, soundAttempts]);

  return <div>Score: {score}</div>;
};

export default Score;
