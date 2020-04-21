import React from "react";
import { useStyletron } from "baseui";
import { Label1, Label3 } from "baseui/typography";

interface Props {
  display_phone?: string;
  url?: string;
}

export const Contact: React.FC<Props> = (props) => {
  const { display_phone, url } = props;
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: theme.colors.accent700,
        margin: ".2em 0 1em 0",
      })}
    >
      <Label1 marginBottom="1em">Contact</Label1>
      <Label3 marginBottom=".5em">{display_phone}</Label3>
      <a href={url}>Website</a>
    </div>
  );
};
