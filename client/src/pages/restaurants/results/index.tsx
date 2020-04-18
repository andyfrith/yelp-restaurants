import React, { useCallback, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Button, KIND } from "baseui/button";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";
import { Pagination } from "baseui/pagination";
import { H3 } from "baseui/typography";
import { useStyletron } from "baseui";
import { searchQuery } from "../../../graphql/queries/search";
import { SearchContext } from "../page";
import { Result } from "./result";

const itemProps: BlockProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Results: React.FC<{}> = () => {
  const {
    state: {
      location,
      openNow,
      limit,
      price,
      results,
      resultsInfo,
      selectedCategories,
      term,
    },
    actions: { updateResults, updateResultsInfo },
    dispatch,
  } = useContext(SearchContext);

  const [css, theme] = useStyletron();

  const { data, loading, error, fetchMore } = useQuery(searchQuery, {
    variables: {
      open_now: openNow,
      offset: 0,
      location,
      // categories:
      //   selectedCategories &&
      //   selectedCategories.map((category) => category.label).toString(),
      price: price && price.map((p) => p + 1).toString(),
      term:
        selectedCategories &&
        selectedCategories[0] &&
        selectedCategories[0].label
          ? selectedCategories[0].label
          : "",
      limit,
    },
    fetchPolicy: "cache-and-network",
  });

  const runDispatch = useCallback(() => {
    if (data && data.search && data.search.business) {
      dispatch(updateResults(data.search.business));
      dispatch(
        updateResultsInfo({
          total: data.search.total!,
          currentPage: resultsInfo!.currentPage || 1,
        })
      );
    }
  }, [data, updateResults, updateResultsInfo, dispatch]);

  useEffect(runDispatch, [data]);

  if (loading) return <p>LOADING</p>;
  if (error && !data) return <p>ERROR: {error}</p>;

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
        <Pagination
          numPages={resultsInfo.total}
          currentPage={resultsInfo!.currentPage}
          // onPageChange={({ nextPage }) => {
          //   // setCurrentPage(Math.min(Math.max(nextPage, 1), 20));
          // }}
        />
      </div>
      <div
        className={css({
          display: "flex",
          margin: "80px auto",
        })}
      >
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                offset: 8 * (resultsInfo.currentPage || 1),
              },
              updateQuery: (prev: any, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                //debugger;
                dispatch(updateResults(fetchMoreResult.search.business));
                dispatch(
                  updateResultsInfo({
                    total: fetchMoreResult.search.business.length,
                    currentPage: resultsInfo.currentPage + 1,
                  })
                );
                // return Object.assign({}, prev, {
                //   business: [...prev.business, ...fetchMoreResult.business],
                // });
              },
            })
          }
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
