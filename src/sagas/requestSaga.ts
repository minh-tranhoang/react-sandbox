import {
  succeed,
  failed,
  cancelRequest,
  toogleLoading,
  sendRequest,
  requestCancelled
} from './../actions/apiActions';
import {
  call,
  cancelled,
  put,
  race,
  StrictEffect,
  take,
  takeEvery
} from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { requestAPI, Response } from '../utils/api';
import axios from 'axios';

interface Payload {
  body?: FormData;
}

type G = Generator<StrictEffect, void, Response>;

function* request(action: Action<Payload>): G {
  const source = axios.CancelToken.source();
  const requestFunction = requestAPI(
    'demo/delay?seconds=5',
    'GET',
    source.token
  );
  try {
    const res = yield call(requestFunction);

    console.log('res: ', res);

    const { message } = res.data;
    if (res.succeed) {
      yield put(succeed(message));
    } else {
      yield put(failed(message));
    }
  } finally {
    if (yield cancelled()) {
      const message = 'Cancelled by action';
      console.log('cancelled');

      yield put(requestCancelled(message));
      source.cancel(message);
    }
  }
}

function* cancelableRequest(action: Action<Payload>) {
  console.log('watched');

  yield put(toogleLoading());

  yield race({
    task: call(request, action),
    cancel: take(cancelRequest)
  });
}

export function* watchRequest() {
  yield takeEvery(sendRequest.type, cancelableRequest);
}
