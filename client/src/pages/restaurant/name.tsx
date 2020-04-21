import React from "react";
import { navigate } from "@reach/router";
import { Button, SHAPE } from "baseui/button";
import { StarRating } from "baseui/rating";
import { useStyletron } from "baseui";
import { H4, Label2 } from "baseui/typography";
import { ArrowLeft } from "baseui/icon";

interface Props {
  name: string;
  price: string;
  rating: number;
  isClosed: boolean;
}

export const Name: React.FC<Props> = (props) => {
  const { name, price, rating, isClosed } = props;
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        borderBottom: `1px solid ${theme.colors.borderOpaque}`,
        flexDirection: "row",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: theme.colors.accent700,
          margin: "2em 0 1em 0",
        })}
      >
        <H4 marginBottom=".25em">{name}</H4>
        <StarRating value={rating} />
        <Label2 margin=".25em 0 1em 0">{price}</Label2>
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "flex-end",
          margin: "auto",
        })}
      >
        <Button onClick={() => navigate("/")} shape={SHAPE.round}>
          <ArrowLeft size={32} />
        </Button>
      </div>
    </div>
  );
};
