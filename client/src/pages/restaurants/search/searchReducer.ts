import { ISearchAction, SearchActions } from "./searchActions";

export type Category = { id: string; label: string };
export type Price = number | 0 | 1 | 2 | 3;

export interface ISearchInfo {
  total: number;
  currentPage: number;
}

export interface ISearchState {
  limit: number | null;
  location: string | null;
  openNow: boolean;
  price: Price[] | undefined;
  results: any[] | null;
  resultsInfo: ISearchInfo;
  selectedCategories: Category[] | null;
  term: string | null;
}

export const initialState: ISearchState = {
  limit: 8,
  location: "Arvada",
  openNow: true,
  results: null,
  resultsInfo: {
    total: 0,
    currentPage: 0,
  },
  price: [0, 1, 2, 3],
  selectedCategories: [],
  term: null,
};

export default function SearchReducer(
  state: ISearchState = initialState,
  action: ISearchAction
): ISearchState {
  switch (action.type) {
    case SearchActions.ClearFilters:
      return {
        ...state,
        location: "Arvada",
        openNow: true,
        price: [],
        results: [],
        resultsInfo: {
          total: 0,
          currentPage: 0,
        },
        selectedCategories: [],
        term: null,
      };

    case SearchActions.UpdateLocation:
      return {
        ...state,
        location: action.location || null,
      };

    case SearchActions.UpdateSelectedCategories:
      return {
        ...state,
        selectedCategories: action.selectedCategories
          ? action.selectedCategories
          : null,
      };

    case SearchActions.UpdateOpenNow:
      return {
        ...state,
        openNow: action.openNow ? action.openNow : false,
      };

    case SearchActions.UpdatePrice:
      return {
        ...state,
        price: action.price,
      };

    case SearchActions.UpdateTerm:
      return { ...state, term: action.term || null };

    case SearchActions.UpdateResults:
      return { ...state, results: action.results || null };

    case SearchActions.UpdateResultsInfo:
      return {
        ...state,
        resultsInfo: action.resultsInfo!,
      };
    default:
      return state;
  }
}
