import { call, put } from 'redux-saga/effects';
import { todoActions } from '../reducers/todo.reducer';

export function* GetTodosSaga() {
  try {
    const response = yield call(getTodos);
    yield put(todoActions.setTodos(response));
  } catch (error) {}
}

const getTodos = () =>
  fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10').then(
    response => response.json()
  );
