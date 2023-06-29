import { SetThemeAction } from './theme-actions-types'
import { ThemeActionTypes } from './theme-actions-types'

const initialState = {
  theme: 'isLight',
}

export const themeReducer = (state = initialState, { type, payload }: SetThemeAction) => {
  switch (type) {
    case ThemeActionTypes.SET_THEME:
      return payload;
    default:
      return state;
  }
};

