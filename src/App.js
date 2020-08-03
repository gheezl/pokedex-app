import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"

const ViewAll = lazy(() => import("./pages/view-all/view-all.jsx"))



function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Suspense fallback="loading">
          <Route exact path="/viewAll" component={ViewAll} />
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default App;
