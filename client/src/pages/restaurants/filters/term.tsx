import React, { useContext } from "react";
import { Input } from "baseui/input";
import { SearchContext } from "../../../pages";

export const Term: React.FC<{}> = ({}) => {
  const {
    state: { term },
    actions: { updateTerm },
    dispatch,
  } = useContext(SearchContext);

  return (
    <Input
      clearable
      value={term || ""}
      onChange={(e) => dispatch(updateTerm(e.currentTarget.value))}
      placeholder="Look for this!"
    />
  );
};
