export enum TimerStateEnum {
  Start = 'start',
  Finished = 'finished',
}

export interface TimerState {
  duration: number;
  progress: TimerStateEnum;
}
