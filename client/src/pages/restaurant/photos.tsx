import React from "react";
import { useStyletron } from "baseui";
import { Label1 } from "baseui/typography";

interface Props {
  photos?: Array<string>;
  caption?: string;
}

export const Photos: React.FC<Props> = (props) => {
  const { caption, photos } = props;
  const [css, theme] = useStyletron();

  if (!photos) {
    return null;
  }

  return (
    <div
      className={css({
        display: "flex",
        color: theme.colors.accent700,
        margin: "1rem 0 1em 0",
      })}
    >
      <img
        className={css({
          marginBottom: "1em",
          width: "400px",
        })}
        src={photos[0]}
      />
      <Label1>{caption}</Label1>
    </div>
  );
};
