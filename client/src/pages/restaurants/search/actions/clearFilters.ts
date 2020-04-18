import { SearchActions } from "../searchActions";

export default function clearFilters() {
  return {
    type: SearchActions.ClearFilters,
  };
}
