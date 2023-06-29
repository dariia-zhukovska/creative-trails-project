export enum ThemeActionTypes {
  SET_THEME = '@@theme/SET_THEME',
}

export interface SetThemeAction {
  type: ThemeActionTypes.SET_THEME;
  payload: string;
}
