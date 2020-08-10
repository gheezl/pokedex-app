import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"
import ParticlesComponent from './components/particles/particles.jsx';

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const ViewAll = lazy(() => import("./pages/view-all/view-all.jsx"))
const Profile = lazy(() => import("./pages/profile/profile.jsx"))
const PokemonDisplay = lazy(() => import("./pages/pokemon-display/pokemon-display.jsx"))
const SignIn = lazy(() => import("./pages/sign-in/sign-in.jsx"))
const CreateAccount = lazy(() => import("./pages/create-account/create-account.jsx"))




function App() {
  return (
    <Fragment>
      <Header />
      <ParticlesComponent />
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/view-all" component={ViewAll} />
          <Route exact path="/display" component={PokemonDisplay} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/create-account" component={CreateAccount} />
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default App;
