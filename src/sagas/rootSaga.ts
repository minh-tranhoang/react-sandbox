import { all } from 'redux-saga/effects';

import { watchIncrementAsync } from './countSaga';
import { watchRequest } from './requestSaga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchRequest()]);
}
