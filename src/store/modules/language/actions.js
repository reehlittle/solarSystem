export function changeLanguage(code) {
  return {
    type: '@language/CHANGE_LANGUAGE',
    payload: {code},
  };
}
