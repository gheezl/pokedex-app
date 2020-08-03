import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch, Router } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const ViewAll = lazy(() => import("./pages/view-all/view-all.jsx"))




function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Suspense fallback="loading">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/view-all" component={ViewAll} />
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default App;
