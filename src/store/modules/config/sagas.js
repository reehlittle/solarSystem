import {takeLatest, all, call, put} from 'redux-saga/effects';

import {saveMarsWeather} from './actions';
import {apiMarsWeather} from '../../../app/api';
import {Constants} from '../../../utils';

export function* loadInfo() {
  try {
    const response = yield call(apiMarsWeather.get, '', {
      params: {
        api_key: Constants.NASA_KEY,
        feedtype: 'json',
        ver: 1.0,
      },
    });

    const maxSol = Math.max(...response.data.sol_keys);

    yield put(saveMarsWeather(response.data[maxSol]));
  } catch (err) {
    console.tron.log(err.message);
  }
}

export default all([takeLatest('@config/LOAD_INFO', loadInfo)]);
