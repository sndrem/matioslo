import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuExampleBasic extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item name="hjem" href="/">
          Hjem
        </Menu.Item>

        <Menu.Item name="Logg inn" href="/logginn">
          Logg inn
        </Menu.Item>
      </Menu>
    );
  }
}
