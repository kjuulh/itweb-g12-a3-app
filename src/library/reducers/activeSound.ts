import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActiveSoundState {
  sound: number;
}

const initialState: ActiveSoundState = {
  sound: 0,
};

const activeSoundSlice = createSlice({
  name: 'activeSound',
  initialState,
  reducers: {
    setActiveSound: (
      state: ActiveSoundState,
      action: PayloadAction<number>,
    ) => ({
      sound: action.payload,
    }),
    reset: (state: ActiveSoundState) => ({ ...initialState }),
  },
});

const { actions, reducer } = activeSoundSlice;
export const { reset } = actions;

export default reducer;

export const setActiveSound = (sound: number) => {
  const sounds = 'ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890';

  return async (dispatch: any) => {
    dispatch(actions.setActiveSound(sound));
    if ('speechSynthesis' in window) {
      const speech = window.speechSynthesis;

      var langRegex = /^en(-[a-z]{2})?$/i;

      const voice = speech
        .getVoices()
        .filter((voice) => langRegex.test(voice.lang))[0];
      console.warn(voice);
      console.warn(speech.getVoices());

      const utterance = new SpeechSynthesisUtterance(sounds[sound - 1]);

      utterance.voice = voice;
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;

      speech.speak(utterance);
    }
  };
};
