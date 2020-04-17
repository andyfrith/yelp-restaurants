import * as React from "react";
import { Button, KIND } from "baseui/button";
import { ChevronDown } from "baseui/icon";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";

const ITEMS = [
  { label: "All" },
  { label: "Italian" },
  { label: "Seafood" },
  { label: "Steakhouses" },
  { label: "Japanese  " },
  { label: "American" },
  { label: "Mexican" },
  { label: "Thai" },
  { label: "Indian" },
];

export const Categories: React.FC<{}> = ({}) => (
  <StatefulPopover
    focusLock
    placement={PLACEMENT.bottomLeft}
    content={({ close }) => (
      <StatefulMenu
        items={ITEMS}
        onItemSelect={() => close()}
        overrides={{
          List: { style: { height: "150px", width: "138px" } },
        }}
      />
    )}
  >
    <Button kind={KIND.minimal} endEnhancer={() => <ChevronDown size={24} />}>
      Categories
    </Button>
  </StatefulPopover>
);
