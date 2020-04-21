import { Dispatch } from "react";
import { Category } from "./searchReducer";

import {
  clearFilters,
  updateLocation,
  updateOpenNow,
  updatePrice,
  updateResults,
  updateResultsInfo,
  updateSelectedCategories,
  updateTerm,
} from "./actions";
import { ISearchInfo, ISearchState, Price } from "./searchReducer";

export enum SearchActions {
  ClearFilters = "CLEAR_FILTERS",
  UpdateLocation = "UPDATE_LOCATION",
  UpdateOpenNow = "UPDATE_OPEN_NOW",
  UpdatePrice = "UPDATE_PRICE",
  UpdateResults = "UPDATE_RESULTS",
  UpdateResultsInfo = "UPDATE_RESULTS_INFO",
  UpdateSelectedCategories = "UPDATE_SELECTED_CATEGORIES",
  UpdateTerm = "UPDATE_TERM",
}

export interface ISearchAction {
  type: SearchActions;
  location?: string;
  selectedCategories?: Category[];
  openNow?: boolean;
  price?: Price[];
  results?: any[];
  resultsInfo?: ISearchInfo;
  term?: string;
}

export interface ISearchActions<T = ISearchAction> {
  clearFilters(): T;
  updateLocation(location: string): T;
  updateOpenNow(openNow: boolean): T;
  updatePrice(price: Price[]): T;
  updateResults(results: any): T;
  updateResultsInfo(resultsInfo: ISearchInfo): T;
  updateSelectedCategories(selectedCategories: Category[]): T;
  updateTerm(term: string): T;
}

export const useSearchActions = <S = ISearchState, A = Dispatch<ISearchAction>>(
  state: S,
  dispatch: A
): ISearchActions => ({
  clearFilters,
  updateLocation,
  updateOpenNow,
  updatePrice,
  updateResults,
  updateResultsInfo,
  updateSelectedCategories,
  updateTerm,
});
