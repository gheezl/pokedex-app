import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const ViewAll = lazy(() => import("./pages/view-all/view-all.jsx"))
const Search = lazy(() => import("./pages/search/search.jsx"))
const Profile = lazy(() => import("./pages/profile/profile.jsx"))
const PokemonDisplay = lazy(() => import("./pages/pokemon-display/pokemon-display.jsx"))




function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={PokemonDisplay} />
          <Route exact path="/view-all" component={ViewAll} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default App;
