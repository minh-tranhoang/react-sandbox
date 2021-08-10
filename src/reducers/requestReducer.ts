import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import {
  failed,
  requestCancelled,
  succeed,
  toogleLoading
} from '../actions/apiActions';

interface RequestState {
  loading: boolean;
  message: string;
}

const initialState: RequestState = {
  loading: false,
  message: 'Nothing happen yet'
};

const requestReducer = (state = initialState, action: Action): RequestState => {
  if (
    isType(action, succeed) ||
    isType(action, requestCancelled) ||
    isType(action, failed)
  ) {
    console.log('succeed|cancelled');

    return { loading: false, message: action.payload };
  }

  if (isType(action, toogleLoading)) {
    return {
      ...state,
      loading: !state.loading
    };
  }

  return state;
};

export default requestReducer;
