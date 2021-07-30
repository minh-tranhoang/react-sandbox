import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('count');

export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  INCREMENT_ASYNC = 'INCREMENT_ASYNC',
  DECREMENT = 'DECREMENT'
}

export const increase = actionCreator<void>(ActionTypes.INCREMENT);
export const delayIncrease = actionCreator<void>(ActionTypes.INCREMENT_ASYNC);
export const decrease = actionCreator<void>(ActionTypes.DECREMENT);
