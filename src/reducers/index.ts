import { combineReducers } from 'redux';

import count from './countReducer';
import post from './postReducer';

export default combineReducers({
  count,
  post
});
