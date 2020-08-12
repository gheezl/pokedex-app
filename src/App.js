import React, { Fragment, lazy, Suspense, Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

import './App.css';

import { checkUserSession } from "./redux/user/user-actions.js"
import { selectCurrentUser } from "./redux/user/user-selectors.js"

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"
import ParticlesComponent from './components/particles/particles.jsx';
import { createStructuredSelector } from 'reselect';

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const ViewAll = lazy(() => import("./pages/view-all/view-all.jsx"))
const Profile = lazy(() => import("./pages/profile/profile.jsx"))
const PokemonDisplay = lazy(() => import("./pages/pokemon-display/pokemon-display.jsx"))
const SignIn = lazy(() => import("./pages/sign-in/sign-in.jsx"))
const SignUp = lazy(() => import("./pages/sign-up/sign-up.jsx"))
const ViewPokemonCollection = lazy(() => import("./pages/view-pokemon-collection/view-pokemon-collection.jsx"))


class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props

    checkUserSession()
  }

  render() {
    const { user } = this.props

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
            <Route exact path="/sign-in" render={() => user ? (<Redirect to="/" />) : (<SignIn />)} />
            <Route exact path="/sign-up" render={() => user ? (<Redirect to="/" />) : (<SignUp />)} />
            <Route exact path="/pokemon-collection" component={ViewPokemonCollection} />
          </Suspense>
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);