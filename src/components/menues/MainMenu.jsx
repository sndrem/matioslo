import React, { Component } from "react";
import fire from "../../tools/firebase";
import { Menu } from "semantic-ui-react";
import "./MainMenu.scss";

export default class MenuExampleBasic extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="menu-wrapper">
        <div className="menu-item">
          <a href="#/">Hjem</a>
        </div>
        {user ? (
          <div className="menu-item">
            <a href="#/opprett">Legg til restaurant</a>
          </div>
        ) : (
          ""
        )}
        {user ? (
          <div className="menu-item">
            <a
              href="#/"
              onClick={() => {
                fire.auth().signOut();
                this.props.history.push("#/");
              }}
            >
              Logg ut
            </a>
          </div>
        ) : (
          <div className="menu-item">
            <a href="#/logginn">Logg inn</a>
          </div>
        )}
      </div>
    );
    // return (
    //   <Menu>
    //     <Menu.Item name="hjem" href="/">
    //       Hjem
    //     </Menu.Item>
    //     {user ? (
    //       <Menu.Item name="opprett" href="/opprett">
    //         Legg til restaurant
    //       </Menu.Item>
    //     ) : (
    //       ""
    //     )}
    //     {user ? (
    //       <Menu.Item
    //         name="Logg ut"
    //         onClick={() => {
    //           fire.auth().signOut();
    //           this.props.history.push("/");
    //         }}
    //       >
    //         Logg ut
    //       </Menu.Item>
    //     ) : (
    //       <Menu.Item name="Logg inn" href="/logginn">
    //         Logg inn
    //       </Menu.Item>
    //     )}
    //   </Menu>
    // );
  }
}
