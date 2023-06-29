import { SetThemeAction, ThemeActionTypes } from './theme-actions-types'


export const setTheme = (theme: string): SetThemeAction => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme
})
