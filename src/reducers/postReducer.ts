import { postSuccess, timeout } from '../actions/post';

import { Action } from 'redux';
import { isType } from 'typescript-fsa';

const postReducer = (state = 'No post yet', action: Action): string => {
  if (isType(action, postSuccess)) {
    return 'Post succeed';
  }

  if (isType(action, timeout)) {
    return 'Post failed';
  }

  return state;
};

export default postReducer;
