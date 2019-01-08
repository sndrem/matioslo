import React, { Component } from "react";
import Header from "../header/Header";
import MainMenu from "../menues/MainMenu";
import LoggInnForm from "../LoggInn/LoggInnForm";
import fire from "../../tools/firebase";
import { Container } from "semantic-ui-react";

class LoggInnPage extends Component {
  state = {
    error: ""
  };

  loggInn = (username, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(data => {
        this.props.history.push("/");
      })
      .catch(() => {
        this.setState({
          error:
            "Det var et problem med innloggingen. Sjekk at du bruker riktig brukernavn og passord."
        });
      });
  };
  render() {
    return (
      <div>
        <Header />
        <MainMenu />
        <Container>
          <LoggInnForm loggInn={this.loggInn} error={this.state.error} />
        </Container>
      </div>
    );
  }
}

export default LoggInnPage;
