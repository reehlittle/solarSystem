import axios from 'axios';
import {Constants} from '../utils';

const apiMarsWeather = axios.create({
  baseURL: Constants.NASA_WEATHER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {apiMarsWeather};
