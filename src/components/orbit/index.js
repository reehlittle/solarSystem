import React, {useRef, useEffect} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

import {MoonOrbit, Moon, Planet} from './styles';

const Orbit = () => {
  const animatedRotation = new Animated.Value(0);
  const animatedRotationRef = useRef(animatedRotation);

  const rotateT = animatedRotationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const style = {
    spinner: {
      transform: [{rotate: rotateT}],
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#6f6969',
      borderStyle: 'solid',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  function spin() {
    Animated.loop(
      Animated.timing(animatedRotation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }

  useEffect(() => {
    spin();
  }, []);

  return (
    <>
      <Planet />
      <Animated.View style={style.spinner}>
        <MoonOrbit>
          <Moon />
        </MoonOrbit>
      </Animated.View>
    </>
  );
};

export default Orbit;
