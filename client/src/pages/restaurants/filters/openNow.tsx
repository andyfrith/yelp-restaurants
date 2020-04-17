import * as React from "react";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";

export const OpenNow: React.FC<{}> = ({}) => {
  const [value, setValue] = React.useState("0");
  return (
    <RadioGroup
      value={value}
      onChange={(e) => setValue(e.target.value)}
      name="number"
      align={ALIGN.horizontal}
    >
      <Radio value="1">Open Now</Radio>
    </RadioGroup>
  );
};
