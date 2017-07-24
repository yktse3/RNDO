import {
  LOGIN_PASSWORD_CHANGED,
  LOGIN_EMAIL_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  loginEmail: '',
  loginPassword: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_CHANGED:
      return { ...state, loginEmail: action.payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, loginPassword: action.payload };
    default:
      return state;
  }
};
