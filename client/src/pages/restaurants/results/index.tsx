import React, { useCallback, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Button, KIND } from "baseui/button";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";
import { H3 } from "baseui/typography";
import { useStyletron } from "baseui";
import { searchQuery } from "../../../graphql/queries/search";
import { SearchContext } from "../page";
import { Result } from "./result";

const itemProps: BlockProps = {
  // height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Results: React.FC<{}> = () => {
  const {
    state: { results },
    actions: { updateResults },
    dispatch,
  } = useContext(SearchContext);

  const [css, theme] = useStyletron();

  const { data, loading, error } = useQuery(searchQuery, {
    variables: {
      open_now: true,
      location: "denver",
      categories: "mexican",
      price: "1",
      limit: 2,
    },
  });

  const runDispatch = useCallback(() => {
    if (data && data.search && data.search.business) {
      dispatch(updateResults(data.search.business));
    }
  }, [data, updateResults, dispatch]);

  useEffect(runDispatch, [data]);

  if (loading) return <p>LOADING</p>;
  if (error || !data) return <p>ERROR</p>;

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        margin: "30px auto",
      })}
    >
      <div
        className={css({
          display: "flex",
          margin: "3em",
        })}
      >
        <H3>All Restaurants</H3>
      </div>
      <FlexGrid
        flexGridColumnCount={[1, 2, 4]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {results &&
          results.map((item) => {
            return (
              <FlexGridItem key={item.id} {...itemProps}>
                <Result {...item} />
              </FlexGridItem>
            );
          })}
      </FlexGrid>
      <div
        className={css({
          display: "flex",
          margin: "80px auto",
        })}
      >
        <Button
          kind={KIND.minimal}
          overrides={{
            BaseButton: {
              style: { border: "1px solid black", width: "400px" },
            },
          }}
        >
          LOAD MORE
        </Button>
      </div>
    </div>
  );
};
