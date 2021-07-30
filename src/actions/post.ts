import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('post');

export enum ActionTypes {
  SEND_POST = 'SEND_POST',
  POST_SUCCESS = 'POST_SUCCESS',
  TIMEOUT = 'TIMEOUT'
}

export const postSuccess = actionCreator<void>(ActionTypes.POST_SUCCESS);
export const timeout = actionCreator<void>(ActionTypes.TIMEOUT);
export const sendPost = actionCreator<void>(ActionTypes.SEND_POST);
