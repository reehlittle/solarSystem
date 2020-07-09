import produce from 'immer';

export default function language(state, action) {
  const lanCodes = ['pt', 'en'];

  if (typeof state === 'undefined' || !lanCodes.includes(state.code)) {
    return {
      code: 'pt',
    };
  }

  return produce(state, (draft) => {
    if (action.type === '@language/CHANGE_LANGUAGE') {
      if (lanCodes.includes(action.payload.code)) {
        draft.code = action.payload.code;
      } else {
        draft.code = 'pt';
      }
    }
  });
}
