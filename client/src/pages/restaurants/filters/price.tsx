import React, { useContext } from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { SearchContext } from "../page";

export const Price: React.FC<{}> = ({}) => {
  const {
    state: { price },
    actions: { updatePrice },
    dispatch,
  } = useContext(SearchContext);

  const button = (label: string) => (
    <Button
      overrides={{
        BaseButton: {
          style: {
            width: "70px",
            margin: "1px",
          },
        },
      }}
    >
      {label}
    </Button>
  );

  return (
    <ButtonGroup
      overrides={{
        Root: {
          style: {
            backgroundColor: "white",
            height: "50px",
          },
        },
      }}
      mode="checkbox"
      selected={price}
      onClick={(_event, index) => {
        if (price && !price.includes(index)) {
          dispatch(updatePrice([...price, index]));
        } else {
          dispatch(updatePrice(price!.filter((value) => value !== index)));
        }
      }}
    >
      {button("$")}
      {button("$$")}
      {button("$$$")}
      {button("$$$$")}
    </ButtonGroup>
  );
};
