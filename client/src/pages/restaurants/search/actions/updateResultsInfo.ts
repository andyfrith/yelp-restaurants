import { SearchActions } from "../searchActions";
import { ISearchInfo } from "../searchReducer";

export default function updateResultsInfo(resultsInfo: ISearchInfo) {
  return {
    type: SearchActions.UpdateResultsInfo,
    resultsInfo,
  };
}
