import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/views/MainPage";
import LoggInnPage from "./components/views/LoggInnPage";
import OpprettRestaurantPage from "./components/views/OpprettRestaurantPage";
import fire from "./tools/firebase";
import AlleRestauranter from "./components/views/AlleRestauranter";

// require("dotenv").config();

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
        <div>
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
        </div>
      </Router>
    );
  }
}

export default App;
