import React, { Component } from "react";
import fire from "../../services/restaurantService";
import MainMenu from "../menues/MainMenu";
import Footer from "../footer/Footer";
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
    return (
      <div>
        <MainMenu user={this.props.user} history={this.props.history} />
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
