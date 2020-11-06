import React, {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';

import {
  Container,
  TempContainer,
  InfoContainer,
  Label,
  Temperature,
  VerticalBar,
} from './styles';
import Button from '../button';
import {Typography} from '../../resources/style';

const Weather = ({data, animation}) => {
  const animatedValue = new Animated.Value(0);
  let fadeAnim = new Animated.Value(1);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  const fToC = (fahrenheit) => {
    var fToCel = ((fahrenheit - 32) * 5) / 9;

    return fToCel.toFixed(0) + '\xB0';
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => (fadeAnim = new Animated.Value(1)));
  }, [data, animatedValue, fadeAnim]);

  const styledSheet = {
    Text: {
      fontSize: Typography.FONT_SIZE_46_N,
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      color: '#dedede',
      opacity: fadeAnim,
      transform: [{translateY}],
    },
  };

  return (
    <Container>
      <TempContainer>
        <Label numberOfLines={2}>MIN TEMP</Label>
        <Animated.Text style={styledSheet.Text}>{fToC(data.min)}</Animated.Text>
        <VerticalBar />
      </TempContainer>
      <TempContainer>
        <Label>MAX TEMP</Label>
        <Animated.Text style={styledSheet.Text}>{fToC(data.max)}</Animated.Text>
      </TempContainer>
      <InfoContainer>
        <Button />
      </InfoContainer>
    </Container>
  );
};

export default Weather;
