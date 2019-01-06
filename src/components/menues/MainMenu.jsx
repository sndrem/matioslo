import React, { Component } from "react";
import fire from "../../tools/firebase";
import { Menu } from "semantic-ui-react";

export default class MenuExampleBasic extends Component {
  render() {
    const { user } = this.props;
    return (
      <Menu>
        <Menu.Item name="hjem" href="/">
          Hjem
        </Menu.Item>
        {user ? (
          <Menu.Item name="opprett" href="/opprett">
            Legg til restaurant
          </Menu.Item>
        ) : (
          ""
        )}
        {user ? (
          <Menu.Item
            name="Logg ut"
            onClick={() => {
              fire.auth().signOut();
              this.props.history.push("/");
            }}
          >
            Logg ut
          </Menu.Item>
        ) : (
          <Menu.Item name="Logg inn" href="/logginn">
            Logg inn
          </Menu.Item>
        )}
      </Menu>
    );
  }
}
