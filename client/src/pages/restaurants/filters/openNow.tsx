import React, { useContext } from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { SearchContext } from "../page";

export const OpenNow: React.FC<{}> = ({}) => {
  const {
    state: { openNow },
    actions: { updateOpenNow },
    dispatch,
  } = useContext(SearchContext);

  return (
    <Checkbox
      overrides={{ Root: { style: { alignItems: "center" } } }}
      checked={openNow}
      onChange={(e) => {
        dispatch(updateOpenNow(e.currentTarget.checked));
      }}
      labelPlacement={LABEL_PLACEMENT.left}
    >
      Open Now
    </Checkbox>
  );
};
