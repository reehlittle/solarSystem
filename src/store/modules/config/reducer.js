import produce from 'immer';

const INITIAL_STATE = {};

export default function config(state = INITIAL_STATE, action = {}) {
  return produce(state, (draft) => {});
}
