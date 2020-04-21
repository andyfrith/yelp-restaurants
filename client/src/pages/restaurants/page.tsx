import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Filters } from "./filters";
import { Header } from "./header";
import { Results } from "./results";

interface Props extends RouteComponentProps {}

export const Restaurants: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <hr />
      <Filters />
      <hr />
      <Results />
    </div>
  );
};
