import { SET_THEME, SetThemeAction } from './theme-actions';

const initialState = {
  theme: 'isLight',
}

export const themeReducer = (state = initialState, { type, payload }: SetThemeAction) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
};

