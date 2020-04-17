import React from "react";
import { RouteComponentProps } from "@reach/router";
import { createSearchContext } from "./search/searchContext";
import SearchReducer, { initialState } from "./search/searchReducer";
import { Filters } from "./filters";
import { Header } from "./header";
import { Results } from "./results";

interface Props extends RouteComponentProps {}

export const [SearchContext, SearchContextProvider] = createSearchContext(
  initialState,
  SearchReducer
);

export const Restaurants: React.FC<Props> = (props) => {
  return (
    <SearchContextProvider>
      <div>
        <Header />
        <hr />
        <Filters />
        <hr />
        <Results />
      </div>
    </SearchContextProvider>
  );
};
