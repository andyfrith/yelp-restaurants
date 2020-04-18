import { SearchActions } from "../searchActions";

export default function updateTerm(term: string) {
  return {
    type: SearchActions.UpdateTerm,
    term,
  };
}
