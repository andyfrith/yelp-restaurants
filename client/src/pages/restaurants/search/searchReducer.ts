import { ISearchAction, SearchActions } from "./searchActions";

export interface ISearchState {
  results: any[] | null;
}

export const initialState: ISearchState = {
  results: null,
};

export default function SearchReducer(
  state: ISearchState = initialState,
  action: ISearchAction
): ISearchState {
  switch (action.type) {
    case SearchActions.UpdateResults:
      return { ...state, results: action.results || null };

    default:
      return state;
  }
}
