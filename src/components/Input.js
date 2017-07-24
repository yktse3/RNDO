import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 5,
  },
  labelStyle: {
    fontSize: 18,
    paddingBottom: 5,
    color: '#0080FF',
    fontWeight: '900',
  },
  inputStyle: {
    color: '#0080FF',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderRadius: 4,
    borderWidth: 0.7,
    borderColor: '#0080FF',
    height: 40,
    width: 350,
  },
});

const Input = ({ label, placeHolder, keyboardType, isPassword, value, onChangeText }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      placeholder={placeHolder}
      autoCorrect={false}
      style={styles.inputStyle}
      placeholderTextColor="#5dadfc"
      keyboardType={keyboardType}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    'default', 'email-address', 'numeric', 'phone-pad',
  ]),
  isPassword: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

Input.defaultProps = {
  placeHolder: '',
  keyboardType: 'default',
  isPassword: false,
  value: '',
  onChangeText: () => {},
};

export default Input;
