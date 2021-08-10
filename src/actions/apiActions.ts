import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('request');

export enum ActionTypes {
  SEND_REQUEST = 'SEND_REQUEST',
  CANCEL_REQUEST = 'CANCEL_REQUEST',
  // divider
  SUCCEED = 'SUCCEED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  TOOGLE_LOADING = 'TOOGLE_LOADING'
}

export const succeed = actionCreator<string>(ActionTypes.SUCCEED);
export const failed = actionCreator<string>(ActionTypes.FAILED);
export const sendRequest = actionCreator<FormData | void>(
  ActionTypes.SEND_REQUEST
);
export const cancelRequest = actionCreator<void>(ActionTypes.CANCEL_REQUEST);
export const requestCancelled = actionCreator<string>(ActionTypes.CANCELLED);
export const toogleLoading = actionCreator<void>(ActionTypes.TOOGLE_LOADING);
