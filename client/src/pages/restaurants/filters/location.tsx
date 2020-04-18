import React, { useContext } from "react";
import { Input } from "baseui/input";
import { SearchContext } from "../page";

export const Location: React.FC<{}> = ({}) => {
  const {
    state: { location },
    actions: { updateLocation },
    dispatch,
  } = useContext(SearchContext);

  return (
    <Input
      clearable
      value={location || ""}
      onChange={(e) => dispatch(updateLocation(e.currentTarget.value))}
      placeholder="Location"
    />
  );
};
