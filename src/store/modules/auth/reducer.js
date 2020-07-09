import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  token: {},
  loading: false,
};

export default function auth(state = INITIAL_STATE, action = {}) {
  return produce(state, (draft) => {});
}
