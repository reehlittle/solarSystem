import React from 'react';

import {ScrollView, Dimensions, StyleSheet} from 'react-native';

import {
  Container,
  ItemView,
  VisibleArea,
  Name,
  Headline,
  Planet,
  Gradient,
} from './styles';

const Carousel = ({items, setSelected, setAnimation, ...rest}) => {
  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.x % scrollSize > 350) {
      setAnimation(event.nativeEvent.contentOffset.x / scrollSize);
    }
    if (event.nativeEvent.contentOffset.x % scrollSize === 0) {
      setSelected(event.nativeEvent.contentOffset.x / scrollSize);
    }
  };
  return (
    <Container>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.ScrollView}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
        snapToInterval={scrollSize}
        onScroll={handleScroll}>
        {items &&
          items.map((item) => (
            <ItemView key={item.name}>
              <VisibleArea>
                <Name>{item.name.toUpperCase()}</Name>
                <Headline>{'blues for a red planet'.toUpperCase()}</Headline>
                <Planet source={item.image} />
                <Gradient colors={['rgba(0,0,0,0.00)', 'rgb(0,0,0)']} />
              </VisibleArea>
            </ItemView>
          ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  ScrollView: {width: '700%'},
});
const scrollSize = Dimensions.get('window').width * 2;

export default Carousel;
