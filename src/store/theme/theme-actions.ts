export const SET_THEME = '@@theme/SET_THEME';

export enum ThemeActionTypes {
  SET_THEME = '@@theme/SET_THEME',
}

export interface SetThemeAction {
  type: ThemeActionTypes.SET_THEME;
  payload: string;
}

export const setTheme = (theme: string): SetThemeAction => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme
})
