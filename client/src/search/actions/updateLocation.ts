import { SearchActions } from "../searchActions";

export default function updateLocation(location: string) {
  return {
    type: SearchActions.UpdateLocation,
    location,
  };
}
