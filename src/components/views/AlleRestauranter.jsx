import React, { Component } from "react";
import googleAnalytics from "../../services/googleAnalytics";
import Header from "../header/Header";
import fire from "../../services/restaurantService";
import Toppliste from "../forside/Toppliste";
import { convertToArray } from "../../tools/helpers";
import { Loader, Container } from "semantic-ui-react";

googleAnalytics.settSidevisning("/alleRestauranter");

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
        <Header user={this.props.user} history={this.props.history} />
        <Container>
          <Loader active={this.state.loading} />
          <Toppliste
            restaurants={this.state.restaurants}
            title="Alle restaurantene"
          />
        </Container>
      </div>
    );
  }
}

export default AlleRestauranter;
