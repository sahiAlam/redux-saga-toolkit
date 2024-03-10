import { createSlice } from '@reduxjs/toolkit';

export enum ThemeType {
  Dark = 'dark',
  Light = 'light',
}
export interface ITheme {
  theme: ThemeType;
}

const initialState: ITheme = {
  theme: ThemeType.Light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme =
        state.theme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
