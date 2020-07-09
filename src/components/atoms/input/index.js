import React, {useRef, useEffect} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {useField} from '@unform/core';

import {Colors} from '../../../resources/style';
const FormInput = ({name, ...rest}) => {
  const inputRef = useRef(null);

  const {fieldName, defaultValue, registerField, error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({text: value});
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  return (
    <>
      <TextInput
        name={name}
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        style={styles.input}
        {...rest}
      />
      {error && (
        <Text className="error" style={styles.error}>
          {error}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
  },
  error: {
    color: Colors.ALERT,
  },
});
export default FormInput;
