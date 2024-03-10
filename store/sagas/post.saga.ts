import { call, put } from 'redux-saga/effects';
import { postActions } from '../reducers/post.reducer';

export function* GetPostsSaga() {
  try {
    const response = yield call(getPosts);
    yield put(postActions.setPosts(response));
  } catch (error) {}
}

const getPosts = () =>
  fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10').then(
    response => response.json()
  );
