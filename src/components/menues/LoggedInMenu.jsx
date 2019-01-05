import React from "react";
import { Menu } from "semantic-ui-react";
import fire from "../../tools/firebase";
import { withRouter } from "react-router-dom";

const LoggedInMenu = ({ history }) => {
  return (
    <Menu>
      <Menu.Item name="hjem" href="/">
        Hjem
      </Menu.Item>
      <Menu.Item name="opprett" href="/opprett">
        Legg til restaurant
      </Menu.Item>

      <Menu.Item
        name="Logg ut"
        onClick={() => {
          fire.auth().signOut();
          history.push("/");
        }}
      >
        Logg ut
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(LoggedInMenu);
