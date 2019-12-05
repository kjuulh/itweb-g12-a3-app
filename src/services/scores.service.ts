import { Score } from '../library/reducers/scores';
import Axios, { AxiosResponse } from 'axios';
import { Config } from '../config/config';

export default class ScoresService {
  constructor() {
    this.url = Config.serverUrl;
  }

  private url: string;

  public getScores = async (): Promise<Score[]> => {
    const response: AxiosResponse<Score[]> = await Axios.get(
      this.url + '/scores/10',
    );
    return response.data;
  };
}

export const scoresService = new ScoresService();
