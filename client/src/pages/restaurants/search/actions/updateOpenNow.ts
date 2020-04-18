import { SearchActions } from "../searchActions";

export default function updateOpenNow(openNow: boolean) {
  return {
    type: SearchActions.UpdateOpenNow,
    openNow,
  };
}
