import React, { Component } from "react";
import googleAnalytics from "../../services/googleAnalytics";
import Header from "../header/Header";
import fire from "../../services/restaurantService";
import RestaurantFilter from "../restaurantFilter/RestaurantFilter";
import Toppliste from "../forside/Toppliste";
import { convertToArray } from "../../tools/helpers";
import { Loader, Container } from "semantic-ui-react";

googleAnalytics.settSidevisning("/alleRestauranter");

class AlleRestauranter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      filter: "",
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
        filteredRestaurants: convertToArray(data),
        loading: false
      });
    });
  };

  filterRestaurants = filter => {
    if (!filter) return this.state.restaurants;
    return this.state.restaurants.filter(res => res.category === filter);
  };

  setFilter = (event, { name, value }) => {
    this.setState({
      filter: value
    });
  };

  resetFilter = () => {
    this.setState({
      filter: ""
    });
  };

  render() {
    return (
      <div>
        <Header user={this.props.user} history={this.props.history} />
        <Container>
          <Loader active={this.state.loading} />
          <RestaurantFilter
            onChange={this.setFilter}
            resetFilter={this.resetFilter}
            value={this.state.filter}
          />
          <Toppliste
            restaurants={this.filterRestaurants(this.state.filter)}
            title="Alle restaurantene"
          />
        </Container>
      </div>
    );
  }
}

export default AlleRestauranter;
