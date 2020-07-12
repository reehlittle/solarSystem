export function loadInfo() {
  return {
    type: '@config/LOAD_INFO',
  };
}

export function saveMarsWeather(data) {
  return {
    type: '@config/SAVE_MARS_WEATHER',
    payload: data,
  };
}
