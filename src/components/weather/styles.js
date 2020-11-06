import styled from 'styled-components';
import {Animated} from 'react-native';
import {Typography} from '../../resources/style';

export const Container = styled.View`
  height: 10%;
  min-height: 70px;
  width: 100%;

  flex-direction: row;
  justify-content: flex-start;

  position: absolute;
  bottom: 0;

  /* if is an iphone 11 */
  margin-bottom: 5%;

  border-top-color: #6f6969;
  border-style: solid;
  border-top-width: 1px;
`;

export const TempContainer = styled.View`
  width: 30%;
  min-width: 120px;

  padding: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.View`
  width: 40%;

  padding-right: 15px;
  justify-content: center;
  align-items: flex-end;
`;

export const Label = styled.Text`
  width: 40%;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  font-size: ${Typography.FONT_SIZE_20};
  color: #b5b0b0d6;
  line-height: ${Typography.FONT_SIZE_20};
`;

export const Temperature = styled(Animated.Text)`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  font-size: ${Typography.FONT_SIZE_46};
  color: #dedede;
  opacity: ${(props) => props.fade};
  transform: ${(props) => props.transform};
`;

export const VerticalBar = styled.View`
  height: 8%;
  width: 1px;
  min-height: 60px;

  background: #6f6969;
`;
