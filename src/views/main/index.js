import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View} from 'react-native';

import AuthTemplate from '../../components/templates/auth';
import Carousel from '../../components/carousel';
import Orbit from '../../components/orbit';
import Weather from '../../components/weather';

// import {I18n} from '../../utils';
import earth from '../../resources/img/earth.png';
import mars from '../../resources/img/mars.png';

import {loadInfo} from '../../store/modules/config/actions';

const Main = () => {
  const dispatch = useDispatch();
  // const lanCode = useSelector((state) => state.language.code);
  // const Dictionary = I18n[lanCode];
  const items = [
    {name: 'earth', image: earth, position: 'left'},
    {name: 'mars', image: mars, position: 'right'},
  ];

  const handleLoadInfo = useCallback(() => {
    dispatch(loadInfo());
  }, [dispatch]);

  useEffect(() => {
    handleLoadInfo();
  }, [handleLoadInfo]);

  return (
    <AuthTemplate>
      <View style={{height: '10%', alignItems: 'center'}}>
        <Orbit />
      </View>

      <Carousel items={items} />

      <Weather />
    </AuthTemplate>
  );
};

export default Main;
