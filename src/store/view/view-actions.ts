export const SET_VIEW = '@@view/SET_VIEW';

export enum ViewActionTypes {
  SET_VIEW = '@@view/SET_VIEW',
}

export interface SetViewAction {
  type: ViewActionTypes.SET_VIEW;
  payload: string;
}

export const setView = (view: string): SetViewAction => ({
  type: ViewActionTypes.SET_VIEW,
  payload: view
})