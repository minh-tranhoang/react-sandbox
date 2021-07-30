import { put, takeEvery } from 'redux-saga/effects';
import { increase, delayIncrease } from '../actions/counter';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);

  yield put(increase());
}

export function* watchIncrementAsync() {
  yield takeEvery(delayIncrease.type, incrementAsync);
}
