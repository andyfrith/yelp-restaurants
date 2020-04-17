import * as React from "react";
import { Button, KIND } from "baseui/button";
import { ChevronDown } from "baseui/icon";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
const ITEMS = [
  { label: "All" },
  { label: "$" },
  { label: "$$" },
  { label: "$$$" },
  { label: "$$$$" },
];

export const Price: React.FC<{}> = ({}) => (
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
      Price
    </Button>
  </StatefulPopover>
);
