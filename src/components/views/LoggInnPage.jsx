import React, { Component } from "react";
import googleAnalytics from "../../services/googleAnalytics";
import Header from "../header/Header";
import LoggInnForm from "../LoggInn/LoggInnForm";
import fire from "../../tools/firebase";
import { Container } from "semantic-ui-react";

googleAnalytics.settSidevisning("/logginn");

class LoggInnPage extends Component {
  state = {
    error: ""
  };

  loggInn = (username, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(data => {
        googleAnalytics.settEvent("User", `Bruker logget inn.`, "Innlogging");
        this.props.history.push("/");
      })
      .catch(() => {
        this.setState({
          error:
            "Det var et problem med innloggingen. Sjekk at du bruker riktig brukernavn og passord."
        });
        googleAnalytics.settEvent(
          "User",
          "Hadde problemer med å logge inn",
          "Innlogging"
        );
      });
  };
  render() {
    return (
      <div>
        <Header user={this.props.user} history={this.props.history} />
        <Container>
          <LoggInnForm loggInn={this.loggInn} error={this.state.error} />
        </Container>
      </div>
    );
  }
}

export default LoggInnPage;
