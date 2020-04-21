import { SearchActions } from "../searchActions";

export default function updateResults(results: any[]) {
  return {
    type: SearchActions.UpdateResults,
    results,
  };
}
