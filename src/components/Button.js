import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0080FF',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#0080FF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const Button = ({ onPress, children, buttonStyle, textStyle }) => (
  <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={onPress}>
    <Text style={[styles.textStyle, textStyle]}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
  buttonStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number])),
  textStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string])),
};

Button.defaultProps = {
  onPress: () => {},
  buttonStyle: {},
  textStyle: {},
};

export default Button;
