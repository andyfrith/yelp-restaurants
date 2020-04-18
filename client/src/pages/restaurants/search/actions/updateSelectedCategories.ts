import { SearchActions } from "../searchActions";
import { Category } from "../searchReducer";

export default function updateSelectedCategories(
  selectedCategories: Category[]
) {
  return {
    type: SearchActions.UpdateSelectedCategories,
    selectedCategories,
  };
}
