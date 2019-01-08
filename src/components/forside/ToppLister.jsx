import React, { Component } from "react";
import fire from "../../tools/firebase";
import { Loader, Grid } from "semantic-ui-react";
import restaurantService from "../../services/restaurantService";
import Toppliste from "./Toppliste";
import { convertToArray } from "../../tools/helpers";

const NUMBER_OF_TOPS = 5;

class ToppLister extends Component {
  constructor(props) {
    super(props);
    this.ref = fire.database().ref("/restaurants");
    this.state = {
      topRestaurants: [],
      lastVisitedRestaurants: [],
      active: true
    };
  }

  componentDidMount() {
    this.getTopRestaurants();
    this.getLastVisitedRestaurants();
  }

  getLastVisitedRestaurants = () => {
    restaurantService.getTopRestaurants("lastVisited", NUMBER_OF_TOPS, data => {
      this.setState({
        ...this.state,
        lastVisitedRestaurants: convertToArray(data),
        active: false
      });
    });
  };

  getTopRestaurants = () => {
    restaurantService.getTopRestaurants("score", NUMBER_OF_TOPS, data => {
      this.setState({
        ...this.state,
        topRestaurants: convertToArray(data),
        active: false
      });
    });
  };

  render() {
    const { topRestaurants, lastVisitedRestaurants } = this.state;
    return (
      <div>
        <Loader active={this.state.active} inline />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Toppliste
                restaurants={topRestaurants}
                title={`Topp ${NUMBER_OF_TOPS} restauranter`}
              />
            </Grid.Column>
            <Grid.Column>
              <Toppliste
                restaurants={lastVisitedRestaurants}
                title={`${NUMBER_OF_TOPS} sist besøkte`}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ToppLister;
