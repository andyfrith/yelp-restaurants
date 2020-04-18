import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { StarRating } from "baseui/rating";
import { Button } from "baseui/button";

export const Result: React.FC<{
  id: string;
  categories: Array<{ alias: string; title: string }>;
  name: string;
  photos: Array<string>;
  price: string;
  rating: number;
}> = (props) => {
  const { categories, name, photos, price, rating } = props;
  const [value, setValue] = React.useState(rating);
  return (
    <Card
      overrides={{
        HeaderImage: {
          style: { height: "300px", minWidth: "100%" },
        },
        Root: {
          style: {
            border: "none",
            width: "428px",
            padding: "20px",
          },
        },
      }}
      headerImage={photos[0]}
      title={name}
    >
      <StyledBody>
        {categories.map((category, idx) =>
          idx < categories.length - 1 ? category.title + ", " : category.title
        )}
      </StyledBody>
      <StarRating value={value} onChange={({ value }) => setValue(value)} />
      <StyledBody>{price} Open Now</StyledBody>
      <StyledAction>
        <Button
          overrides={{
            BaseButton: { style: { width: "100%" } },
          }}
        >
          LEARN MORE
        </Button>
      </StyledAction>
    </Card>
  );
};
