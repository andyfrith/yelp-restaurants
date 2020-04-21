import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { createSearchContext } from "../search/searchContext";
import SearchReducer, { initialState } from "../search/searchReducer";
import PageContainer from "../components/page-container";
import { Restaurants } from "./restaurants/page";
import { Restaurant } from "./restaurant/page";

export const [SearchContext, SearchContextProvider] = createSearchContext(
  initialState,
  SearchReducer
);

export default function Pages() {
  return (
    <SearchContextProvider>
      <PageContainer>
        <Router>
          <Restaurants path="/" />
          <Restaurant path="/:id" />
        </Router>
      </PageContainer>
    </SearchContextProvider>
  );
}
