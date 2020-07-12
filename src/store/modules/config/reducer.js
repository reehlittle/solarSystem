import produce from 'immer';

const INITIAL_STATE = {
  marsWeather: {},
};

export default function config(state = INITIAL_STATE, action = {}) {
  return produce(state, (draft) => {
    if (action.type === '@config/SAVE_MARS_WEATHER') {
      draft.marsWeather = {
        firstUTC: action.payload.First_UTC,
        lastUTC: action.payload.Last_UTC,
        max: action.payload.AT.mx,
        min: action.payload.AT.mn,
      };
    }
  });
}
