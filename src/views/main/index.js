import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';

import AuthTemplate from '../../components/templates/auth';
import Carousel from '../../components/carousel';

import {I18n} from '../../utils';
import earth from '../../resources/img/earth.png';
import mars from '../../resources/img/mars.png';

const Main = () => {
  const lanCode = useSelector((state) => state.language.code);
  const Dictionary = I18n[lanCode];
  const items = [
    {name: 'earth', image: earth, position: 'left'},
    {name: 'mars', image: mars, position: 'right'},
  ];

  return (
    <AuthTemplate>
      <View style={{height: '10%'}}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'white',
          }}
        />
      </View>

      <Carousel items={items} />
    </AuthTemplate>
  );
};

export default Main;
