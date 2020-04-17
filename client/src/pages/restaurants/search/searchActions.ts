import { Dispatch } from "react";
import { updateResults } from "./actions";
import { ISearchState } from "./searchReducer";

export enum SearchActions {
  UpdateResults = "UPDATE_RESULTS",
}

export interface ISearchAction {
  type: SearchActions;
  results?: any[];
}

export interface ISearchActions<T = ISearchAction> {
  updateResults(results: any): T;
}

export const useSearchActions = <S = ISearchState, A = Dispatch<ISearchAction>>(
  state: S,
  dispatch: A
): ISearchActions => ({
  updateResults,
});
