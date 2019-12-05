import { Config } from '../config/config';
import io from 'socket.io-client';
import { getScores } from '../library/reducers/scores';

export class SocketService {
  private static url = Config.serverUrl;
  private static socket: any;

  public static openSocket() {
    this.socket = io.connect(this.url);
  }
  public static addGame(payload: {
    jwt: string;
    score: number;
    session: string;
  }) {
    this.socket.emit('add-score', payload);
  }
  public static integrateCallbacks(dispatch: any) {
    this.socket.on('score-updated', (record: any) => {
      dispatch(getScores());
    });
  }
}
