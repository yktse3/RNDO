import {
  LOGIN_PASSWORD_CHANGED,
  LOGIN_EMAIL_CHANGED,
} from './types';

export default {
  loginEmailChanged: email => (
    {
      type: LOGIN_EMAIL_CHANGED,
      payload: email,
    }
  ),
  loginPasswordChanged: password => (
    {
      type: LOGIN_PASSWORD_CHANGED,
      payload: password,
    }
  ),
};
