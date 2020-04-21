import React from "react";
import { useStyletron } from "styletron-react";
import { H2 } from "baseui/typography";

export const Header: React.FC<{}> = (props) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        margin: "3em",
      })}
    >
      <H2>Restaurant Locator</H2>
    </div>
  );
};
