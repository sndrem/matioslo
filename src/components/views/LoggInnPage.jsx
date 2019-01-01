import React, { Component } from "react";
import MainMenu from "../menues/MainMenu";
import LoggInnForm from "../LoggInn/LoggInnForm";
import fire from "../../tools/firebase";

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
        <MainMenu />
        <LoggInnForm loggInn={this.loggInn} error={this.state.error} />
      </div>
    );
  }
}

export default LoggInnPage;
