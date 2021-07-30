import { postSuccess, timeout, sendPost } from './../actions/post';
import { delay, put, race, takeEvery } from 'redux-saga/effects';

function* fetchPostsWithTimeout() {
  const { posts } = yield race({
    posts: delay(3000), // should run API call here
    timeout: delay(1000)
  });

  if (posts) yield put(postSuccess());
  else yield put(timeout());
}

export function* watchPost() {
  yield takeEvery(sendPost.type, fetchPostsWithTimeout);
}
