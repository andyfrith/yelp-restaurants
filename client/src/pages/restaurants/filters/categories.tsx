import React, { useContext, useCallback } from "react";
import { Select, TYPE, Value } from "baseui/select";
import { Category } from "../search/searchReducer";
import { SearchContext } from "../page";

const OPTIONS = [
  // { id: "All", label: "All" },
  { id: "Italian", label: "Italian" },
  { id: "Seafood", label: "Seafood" },
  { id: "Steakhouses", label: "Steakhouses" },
  { id: "Japanese", label: "Japanese" },
  { id: "American", label: "American" },
  { id: "Mexican", label: "Mexican" },
  { id: "Thai", label: "Thai" },
  { id: "Indian", label: "Indian" },
];

export const Categories: React.FC<{}> = ({}) => {
  const {
    state: { selectedCategories },
    actions: { updateSelectedCategories },
    dispatch,
  } = useContext(SearchContext);
  return (
    <Select
      // multi
      options={OPTIONS}
      placeholder="Categories"
      labelKey="label"
      valueKey="id"
      onChange={({ value }) => {
        dispatch(updateSelectedCategories(value as Category[]));
      }}
      value={selectedCategories as Value}
      type={TYPE.search}
    />
  );
};
