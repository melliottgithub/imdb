import React, { Fragment } from "react";
import { Router } from "@reach/router";

import Header from "./components/elements/Header";
import Home from "./components/Home";

import { GlobalStyle } from "./components/styles/GlobalStyle";
import Movie from "./components/elements/Movie";
import NotFound from "./components/elements/NotFound";

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </Fragment>
  );
}
export default App;
