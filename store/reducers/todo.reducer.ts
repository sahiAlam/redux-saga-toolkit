import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: []
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    fetchTodos:  () => {},
    setTodos: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
