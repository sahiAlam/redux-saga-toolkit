import { createSlice } from '@reduxjs/toolkit';

export interface IPost{
  posts: any[];
}
const initialState = {
  posts: []
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPosts: () => {},
    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  }
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
