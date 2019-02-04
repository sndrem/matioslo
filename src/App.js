import * as Sentry from "@sentry/browser";
import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import googleAnalytics from "./services/googleAnalytics";
import MainPage from "./components/views/MainPage";
import LoggInnPage from "./components/views/LoggInnPage";
import OpprettRestaurantPage from "./components/views/OpprettRestaurantPage";
import fire from "./tools/firebase";
import AlleRestauranter from "./components/views/AlleRestauranter";
import RedigerRestaurant from "./components/redigerRestaurant/RedigerRestaurant";

googleAnalytics.settSidevisning("/forside");

Sentry.init({
  dsn: "https://36442b1db81841dc8855223350ed7ed7@sentry.io/1374858"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.firebase = fire;
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    this.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      } else {
        this.setState({
          user: null
        });
      }
    });
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <MainPage {...props} user={user} />}
          />
          <Route
            path="/opprett"
            exact
            render={props => <OpprettRestaurantPage {...props} user={user} />}
          />
          {/* <Route
            path="/rediger/:restaurant"
            exact
            render={props => <OpprettRestaurantPage {...props} user={user} />}
          /> */}
          <Route
            path="/logginn"
            exact
            render={props => <LoggInnPage {...props} user={user} />}
          />
          <Route
            path="/restauranter"
            exact
            render={props => <AlleRestauranter {...props} user={user} />}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
