import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import TodoReducer from './reducers/todo.reducer';
import PostReducer from './reducers/post.reducer';
import ThemeReducer from './reducers/theme.reducer';
import { rootSaga } from './sagas/root.saga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  todo: TodoReducer,
  post: PostReducer,
  theme: ThemeReducer,
});

export type IRootReducer = ReturnType<typeof reducer>;

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);

export default store;
