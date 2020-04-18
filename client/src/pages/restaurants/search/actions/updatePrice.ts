import { SearchActions } from "../searchActions";
import { Price } from "../searchReducer";

export default function updatePrice(price: Price[]) {
  return {
    type: SearchActions.UpdatePrice,
    price,
  };
}
