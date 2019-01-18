import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import fire from "../../tools/firebase";
import "./MainMenu.scss";

export default class MenuExampleBasic extends Component {
  render() {
    const { user } = this.props;
    // return (
    //   <div className="menu-wrapper">
    //     <div className="top-menu-items">
    //       <div className="menu-item">
    //         <a href="#/">Hjem</a>
    //       </div>
    //       {user ? (
    //         <div className="menu-item">
    //           <a href="#/opprett">Legg til restaurant</a>
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //       {user ? (
    //         <div className="menu-item">
    //           <a
    //             href="#/"
    //             onClick={() => {
    //               fire.auth().signOut();
    //               this.props.history.push("#/");
    //             }}
    //           >
    //             Logg ut
    //           </a>
    //         </div>
    //       ) : (
    //         <div className="menu-item">
    //           <a href="#/logginn">Logg inn</a>
    //         </div>
    //       )}
    //     </div>
    //     <div className="bottom-menu-items">
    //       <div className="close-menu-button">
    //         <p>Hello</p>
    //         <Icon name="close" />
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <Menu inverted fluid>
        <Menu.Item name="hjem" href="/">
          Hjem
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
              fire.auth().signOut();
              this.props.history.push("#/");
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
