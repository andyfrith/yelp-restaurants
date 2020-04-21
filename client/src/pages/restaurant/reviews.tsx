import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { StarRating } from "baseui/rating";
import { BlockProps } from "baseui/block";
import { LightTheme } from "baseui";
import { Avatar } from "baseui/avatar";
import { LabelSmall } from "baseui/typography";
import { useStyletron } from "baseui";

interface User {
  image_url: string;
  name: string;
}

interface Review {
  id: string;
  rating: number;
  text: string;
  timeCreated: string;
  user: User;
}

interface Props {
  reviews?: Review[];
}

const itemProps: BlockProps = {
  height: "scale3200",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({ $theme }: { $theme: typeof LightTheme }) => ({
        width: $theme.sizing.scale1600,
        flexGrow: 0,
      }),
    },
  },
};

const nameItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({ $theme }: { $theme: typeof LightTheme }) => ({
        width: $theme.sizing.scale1600,
        flexGrow: 0,
      }),
    },
  },
};

export const Reviews: React.FC<Props> = (props) => {
  const { reviews } = props;
  const [css, theme] = useStyletron();

  if (!reviews) {
    return null;
  }

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        borderTop: `1px solid ${theme.colors.borderOpaque}`,
        color: theme.colors.accent700,
        paddingTop: "1em",
        margin: "1em 0 1em 0",
      })}
    >
      <LabelSmall>Recommended Reviews</LabelSmall>
      {reviews.map((review: Review) => (
        <FlexGrid
          flexGridColumnCount={3}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale800"
          key={review.id}
        >
          <FlexGridItem {...imageItemProps}>
            <Avatar
              name={review.user.name}
              size={"64px"}
              src={review.user.image_url}
              key={64}
            />
          </FlexGridItem>
          <FlexGridItem {...nameItemProps}>
            <LabelSmall>{review.user.name}</LabelSmall>
          </FlexGridItem>
          <FlexGridItem
            {...itemProps}
            flexDirection="column"
            alignItems="flex-start"
          >
            <StarRating value={review.rating} />
            {review.text}
          </FlexGridItem>
        </FlexGrid>
      ))}
    </div>
  );
};
