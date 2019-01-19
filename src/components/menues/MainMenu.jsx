import React, { Component } from "react";
import googleAnalytics from "../../services/googleAnalytics";
import { Menu } from "semantic-ui-react";
import fire from "../../tools/firebase";

googleAnalytics.settSidevisning("/loggut");

export default class MenuExampleBasic extends Component {
  render() {
    const { user } = this.props;
    return (
      <Menu inverted fluid>
        <Menu.Item name="hjem" href="/">
          Hjem
        </Menu.Item>
        <Menu.Item name="allerestauranter" href="#/restauranter">
          Alle restauranter
        </Menu.Item>
        {user ? (
          <Menu.Item name="opprett" href="#/opprett">
            Legg til restaurant
          </Menu.Item>
        ) : (
          ""
        )}
        {user ? (
          <Menu.Item
            name="Logg ut"
            onClick={() => {
              googleAnalytics.settEvent(
                "User",
                "Bruker logget ut",
                "Utlogging"
              );
              fire.auth().signOut();
              this.props.history.push("/");
            }}
          >
            Logg ut
          </Menu.Item>
        ) : (
          <Menu.Item name="Logg inn" href="#/logginn">
            Logg inn
          </Menu.Item>
        )}
      </Menu>
    );
  }
}
