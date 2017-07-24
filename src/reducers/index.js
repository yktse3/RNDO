import { combineReducers } from 'redux';
import ApiReducer from './ApiReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  api: ApiReducer,
  auth: AuthReducer,
});
