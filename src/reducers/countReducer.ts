import { increase, decrease } from '../actions/counter';

import { Action } from 'redux';
import { isType } from 'typescript-fsa';

const counterReducer = (state = 0, action: Action): number => {
  if (isType(action, increase)) {
    return state + 1;
  }

  if (isType(action, decrease)) {
    return state - 1;
  }

  return state;
};

export default counterReducer;
