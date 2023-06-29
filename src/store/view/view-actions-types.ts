export enum ViewActionTypes {
  SET_VIEW = '@@view/SET_VIEW',
}

export interface SetViewAction {
  type: ViewActionTypes.SET_VIEW;
  payload: string;
}