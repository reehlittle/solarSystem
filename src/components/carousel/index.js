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

const Carousel = ({items, ...rest}) => {
  return (
    <Container>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.ScrollView}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
        snapToInterval={scrollSize}>
        {items &&
          items.map((item) => (
            <ItemView>
              <VisibleArea>
                <Name>{item.name.toUpperCase()}</Name>
                <Headline>{'blues for a red planet'.toUpperCase()}</Headline>
                <Planet source={item.image} />
                <Gradient colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,1)']} />
              </VisibleArea>
            </ItemView>
          ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  ScrollView: {width: '300%'},
});
const scrollSize = Dimensions.get('window').width * 2;

export default Carousel;
