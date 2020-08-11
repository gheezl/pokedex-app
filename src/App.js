import React, { Fragment, lazy, Suspense, Component } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import { auth, createUserProfileDocument } from "./firebase/firebase.js"

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"
import ParticlesComponent from './components/particles/particles.jsx';

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const ViewAll = lazy(() => import("./pages/view-all/view-all.jsx"))
const Profile = lazy(() => import("./pages/profile/profile.jsx"))
const PokemonDisplay = lazy(() => import("./pages/pokemon-display/pokemon-display.jsx"))
const SignIn = lazy(() => import("./pages/sign-in/sign-in.jsx"))
const CreateAccount = lazy(() => import("./pages/sign-up/sign-up.jsx"))




class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //       console.log("this is snapshot", snapShot)
    //       this.setState({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       }, () => console.log("this is state", this.state))
    //     })
    //   }
    //   else {
    //     this.setState({ currentUser: userAuth })
    //   }
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
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
}

export default App;
