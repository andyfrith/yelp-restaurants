import React, { useCallback, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Button, KIND } from "baseui/button";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";
import { Pager } from "./pagination";
import { H3 } from "baseui/typography";
import { useStyletron } from "baseui";
import { searchQuery } from "../../../graphql/queries/search";
import { SearchContext } from "../../../pages";
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
  const [offset, setOffset] = useState(0);

  const { data, loading, error, refetch, networkStatus } = useQuery(
    searchQuery,
    {
      variables: {
        open_now: openNow,
        offset,
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
      notifyOnNetworkStatusChange: true,
    }
  );

  const runDispatch = useCallback(() => {
    if (data && data.search && data.search.business) {
      dispatch(updateResults(data.search.business));
      dispatch(
        updateResultsInfo({
          total: data.search.total!,
          currentPage: Math.max(resultsInfo.currentPage, 1),
        })
      );
    }
  }, [data, updateResults, updateResultsInfo, dispatch, setOffset]);

  const loadMore = useCallback(
    (nextPage: number) => {
      const offset = 8 * (nextPage - 1);
      dispatch(
        updateResultsInfo({
          total: resultsInfo.total!,
          currentPage: nextPage,
        })
      );
      setOffset(offset);
      refetch({
        open_now: openNow,
        offset,
        location,
        price: price && price.map((p) => p + 1).toString(),
        term:
          selectedCategories &&
          selectedCategories[0] &&
          selectedCategories[0].label
            ? selectedCategories[0].label
            : "",
        limit,
      });
    },
    [dispatch, refetch, resultsInfo, setOffset, updateResultsInfo]
  );

  useEffect(runDispatch, [data]);

  if (networkStatus === 4) return <p>REFETCHING</p>;
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
          results.map((item, idx) => {
            return (
              <FlexGridItem key={item.id} {...itemProps}>
                <Result
                  number={idx + (resultsInfo.currentPage - 1) * 8 + 1}
                  {...item}
                />
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
        <Pager
          currentPage={resultsInfo.currentPage}
          numPages={Math.floor(resultsInfo.total / 8)}
          onPageChange={loadMore}
        />
      </div>
      <div
        className={css({
          display: "flex",
          margin: "80px auto",
        })}
      >
        <Button
          onClick={() => loadMore(resultsInfo.currentPage + 1)}
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
