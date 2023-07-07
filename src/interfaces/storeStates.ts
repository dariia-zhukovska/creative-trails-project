import { ITourListData } from "interfaces";


export interface ITourState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  total_tours: number;
  tours: ITourListData[];
}


export interface IThemeState {
  theme: string;
}

export interface IViewState {
  view: string;
}

