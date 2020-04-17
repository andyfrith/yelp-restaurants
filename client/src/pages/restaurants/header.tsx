import React from "react";
import { useStyletron } from "styletron-react";
import { H2, Paragraph1 } from "baseui/typography";

export const Header: React.FC<{}> = (props) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        margin: "3em",
      })}
    >
      <H2>Restaurants</H2>
      <Paragraph1 width="60%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, donec placerat
        dui neque, id blandit augue viverra feugiat.
      </Paragraph1>
    </div>
  );
};
