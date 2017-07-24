import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import doIcon from '../../assets/imgs/DigitalOcean.png';
import Input from '../components/Input';
import Button from '../components/Button';
import Actions from '../actions';

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputContainerStyle: {
    marginTop: 20,
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
  },
});

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image
          source={doIcon}
        />
        <View style={styles.inputContainerStyle}>
          <Input
            label="Email: "
            placeHolder="Enter your email."
            keyboardType="email-address"
            value={this.props.email}
            onChangeText={email => this.props.loginEmailChanged(email)}
          />
          <Input
            label="Password: "
            placeHolder="Enter your password."
            isPassword
            value={this.props.password}
            onChangeText={password => this.props.loginPasswordChanged(password)}
          />
        </View>
        <Button buttonStyle={styles.buttonStyle}>
          Login
        </Button>
      </View>
    );
  }
}

LandingPage.propTypes = {
  loginEmailChanged: PropTypes.func,
  loginPasswordChanged: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

LandingPage.defaultProps = {
  loginEmailChanged: () => {},
  loginPasswordChanged: () => {},
  email: '',
  password: '',
};

const mapStateToProps = states => (
  {
    email: states.auth.loginEmail,
    password: states.auth.loginPassword,
  }
);

export default connect(mapStateToProps, Actions)(LandingPage);
