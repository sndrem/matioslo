import React from "react";
import { Menu } from "semantic-ui-react";
import fire from "../../tools/firebase";

const LoggedInMenu = () => {
  return (
    <Menu>
      <Menu.Item name="hjem" href="/">
        Hjem
      </Menu.Item>
      <Menu.Item name="opprett" href="/opprett">
        Legg til restaurant
      </Menu.Item>

      <Menu.Item name="Logg ut" onClick={() => fire.auth().signOut()}>
        Logg ut
      </Menu.Item>
    </Menu>
  );
};

export default LoggedInMenu;
