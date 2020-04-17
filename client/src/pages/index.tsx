import React, { Fragment } from "react";
import { Router } from "@reach/router";
import PageContainer from "../components/page-container";
import { Restaurants } from "./restaurants/page";

export default function Pages() {
  return (
    <PageContainer>
      <Router>
        <Restaurants path="/" />
      </Router>
    </PageContainer>
  );
}
