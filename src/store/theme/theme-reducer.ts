import { createReducer } from '@reduxjs/toolkit'
import { SET_THEME, SetThemeAction } from './theme-actions-types'

const initialState = {
  theme: 'isDark',
}

export const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_THEME, (state, { payload }: SetThemeAction) => {
    state.theme = payload;
  })
})