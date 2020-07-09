import {combineReducers} from 'redux';

import auth from './auth/reducer';
import config from './config/reducer';
import language from './language/reducer';

export default combineReducers({
  auth,
  config,
  language,
});
