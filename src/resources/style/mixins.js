import {Dimensions, PixelRatio} from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 414;

export const scaleSize = (size, px = true) => {
  if (px) return (WINDOW_WIDTH / guidelineBaseWidth) * size + 'px';

  return (WINDOW_WIDTH / guidelineBaseWidth) * size;
};

export const scaleFont = (size) =>
  scaleSize(size, false) * PixelRatio.getFontScale();

function dimensions(
  top = 0,
  right = top,
  bottom = top,
  left = right,
  property = 'Margin',
) {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color = '#000',
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
