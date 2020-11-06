import React, {useEffect, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

import AuthTemplate from '../../components/templates/auth';
import Carousel from '../../components/carousel';
import Orbit from '../../components/orbit';
import Weather from '../../components/weather';
import {Header} from './styles';

import {loadInfo} from '../../store/modules/config/actions';
import {Planets} from '../../utils';

const Main = () => {
  const dispatch = useDispatch();
  const [indexSelected, setSelected] = useState(0);
  const [animation, setAnimation] = useState(0);

  const handleLoadInfo = useCallback(() => {
    dispatch(loadInfo());
  }, [dispatch]);

  useEffect(() => {
    handleLoadInfo();
  }, [handleLoadInfo]);

  return (
    <AuthTemplate>
      <Header>
        <Orbit />
      </Header>

      <Carousel
        items={Planets.PLANETS}
        setSelected={setSelected}
        setAnimation={setAnimation}
      />

      <Weather data={Planets.PLANETS[indexSelected]} animation={animation} />
    </AuthTemplate>
  );
};

export default Main;
