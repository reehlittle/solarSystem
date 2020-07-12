import styled from 'styled-components';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Typography} from '../../resources/style';

const imgSize = Dimensions.get('window').width * 1.5;
const dislocImg = Dimensions.get('window').width * 0.25;
const itemSize = Dimensions.get('window').width * 2;

export const Container = styled.View`
  height: 90%;
`;

export const ItemView = styled.View`
  width: ${itemSize + 'px'};
  height: 100%;
`;

export const VisibleArea = styled.View`
  height: 100%;
  width: 50%;

  align-items: center;
`;

export const Name = styled.Text`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  color: white;
  font-size: ${Typography.FONT_SIZE_120};
`;

export const Headline = styled.Text`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  color: #dedede;
  font-size: ${Typography.FONT_SIZE_20};
  letter-spacing: 5px;
`;

export const Planet = styled.Image`
  width: ${imgSize + 'px'};
  height: ${imgSize + 'px'};
  resize-mode: contain;

  position: absolute;
  bottom: -${dislocImg * 2 + 'px'};
  left: -${dislocImg + 'px'};
`;

export const Gradient = styled(LinearGradient)`
  width: ${imgSize + 'px'};
  height: ${imgSize + 'px'};

  position: absolute;
  position: absolute;
  bottom: -${dislocImg * 2 + 'px'};
  left: -${dislocImg + 'px'};
`;
