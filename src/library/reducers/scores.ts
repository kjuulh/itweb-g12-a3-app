import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Request from './request';
import { scoresService } from '../../services/scores.service';
import { AuthState } from './auth';

export interface Score {
  score: number;
  username: string;
}

export interface ScoresState {
  scores: Score[];
  gettingScores: boolean;
  gotScores: boolean;
  error: string;
}

const initialState: ScoresState = {
  scores: [],
  gettingScores: false,
  gotScores: false,
  error: '',
};

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    requested: (state: ScoresState) => ({
      ...initialState,
      gettingScores: false,
      scores: state.scores,
    }),
    success: (
      state: ScoresState,
      action: PayloadAction<{ scores: Score[] }>,
    ) => ({
      ...initialState,
      gotScores: true,
      scores: action.payload.scores,
    }),
    failure: (state: ScoresState, action: PayloadAction<{ error: any }>) => ({
      ...initialState,
      error: action.payload.error,
      scores: state.scores,
    }),
  },
});

const { actions, reducer } = scoresSlice;
export default reducer;

export const getScores = () => {
  return async (dispatch: any) => {
    dispatch(actions.requested());

    try {
      const scores = await scoresService.getScores();
      dispatch(actions.success({ scores }));
    } catch (error) {
      dispatch(actions.failure({ error: toString() }));
    }
  };
};
