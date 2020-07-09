import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';

const Button = ({formRef, children, ...rest}) => {
  return (
    <Container onPress={() => formRef.current.submitForm()} {...rest}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
