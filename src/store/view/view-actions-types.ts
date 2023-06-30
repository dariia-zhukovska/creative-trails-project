export const SET_VIEW = '@@view/SET_VIEW';

export interface SetViewAction {
  type: typeof SET_VIEW;
  payload: string;
}