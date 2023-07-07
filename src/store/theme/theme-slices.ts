import { createSlice } from "@reduxjs/toolkit";
import { IThemeState } from "interfaces/store";

const initialState: IThemeState = {
  theme: 'isDark'
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
})

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: any) => state.theme.theme;
