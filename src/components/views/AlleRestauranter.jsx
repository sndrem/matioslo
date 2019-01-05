import React, { Component } from "react";
import fire from "../../services/restaurantService";
import LoggedInMenu from "../menues/LoggedInMenu";
import MainMenu from "../menues/MainMenu";
import Toppliste from "../forside/Toppliste";
import { convertToArray } from "../../tools/helpers";
import { Loader } from "semantic-ui-react";

class AlleRestauranter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getAllRestaurants();
  }

  getAllRestaurants = () => {
    fire.getAllRestaurants(data => {
      this.setState({
        restaurants: convertToArray(data),
        loading: false
      });
    });
  };

  render() {
    const menu = this.props.user ? (
      <LoggedInMenu {...this.props} />
    ) : (
      <MainMenu />
    );
    return (
      <div>
        {menu}
        <Loader active={this.state.loading} />
        <Toppliste
          restaurants={this.state.restaurants}
          title="Alle restaurantene"
        />
      </div>
    );
  }
}

export default AlleRestauranter;
