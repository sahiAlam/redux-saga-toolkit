import React, { useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { IRootReducer } from './store';
import { todoActions } from './store/reducers/todo.reducer';
import { postActions } from './store/reducers/post.reducer';
import { themeActions, ThemeType } from './store/reducers/theme.reducer';
import { ITheme } from './store/reducers/theme.reducer';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector<IRootReducer, any[]>((state) => state.todo.todos);
  const posts = useSelector<IRootReducer, any[]>((state) => state.post.posts);
  const theme = useSelector<IRootReducer, ITheme>((state) => state.theme.theme);

  useEffect(() => {
    dispatch(todoActions.fetchTodos());
    dispatch(postActions.fetchPosts());
  }, [dispatch]);

  const handleToggleThemeClick = useCallback(
    () => dispatch(themeActions.toggleTheme()),
    []
  );

  return (
    <div className={`root ${theme}`}>
      <button onClick={handleToggleThemeClick}>Toggle Theme</button>
      <h3>Todo</h3>
      <ul>
        {todos.map((td) => (
          <li key={td.id}>{td.title}</li>
        ))}
      </ul>
      <h3>Posts</h3>
      <ul>
        {posts.map((td) => (
          <li key={td.id}>{td.title}</li>
        ))}
      </ul>
    </div>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
