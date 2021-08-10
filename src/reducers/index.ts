import { combineReducers } from 'redux';

import count from './countReducer';
import request from './requestReducer';

export default combineReducers({
  count,
  request
});
