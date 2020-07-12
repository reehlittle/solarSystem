import React from 'react';
import {useSelector} from 'react-redux';

import {
  Container,
  TempContainer,
  InfoContainer,
  Label,
  Temperature,
} from './styles';
import Button from '../button';

const Weather = () => {
  const mars = useSelector((state) => state.config.marsWeather);

  const fToC = (fahrenheit) => {
    var fToCel = ((fahrenheit - 32) * 5) / 9;

    return fToCel.toFixed(0) + '\xB0';
  };
  return (
    <Container>
      <TempContainer>
        <Label numberOfLines={2}>MIN TEMP</Label>
        <Temperature>{fToC(mars.min)}</Temperature>
      </TempContainer>
      <TempContainer>
        <Label>MAX TEMP</Label>
        <Temperature>{fToC(mars.max)}</Temperature>
      </TempContainer>
      <InfoContainer>
        <Button />
      </InfoContainer>
    </Container>
  );
};

export default Weather;
