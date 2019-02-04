import React, { Component } from "react";
import { Container, Grid, Loader, Segment } from "semantic-ui-react";
import restaurantService from "../../services/restaurantService";
import Velkommen from "../velkommen/velkommen";
import ToppListe from "../forside/Toppliste";
import Header from "../header/Header";
import { convertToArray } from "../../tools/helpers";

const NUMBER_OF_TOPS = 5;
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRestaurants: [],
      lastVisitedRestaurants: [],
      loadingTopRestaurants: true,
      loadingLastVisitedRestaurants: true
    };
  }

  componentDidMount() {
    this.getTopRestaurants();
    this.getLastVisitedRestaurants();
  }

  getTopRestaurants = () => {
    restaurantService.getTopRestaurants("score", NUMBER_OF_TOPS, data => {
      this.setState({
        ...this.state,
        topRestaurants: convertToArray(data),
        loadingTopRestaurants: false,
        active: false
      });
    });
  };

  getLastVisitedRestaurants = () => {
    restaurantService.getTopRestaurants("lastVisited", NUMBER_OF_TOPS, data => {
      this.setState({
        ...this.state,
        lastVisitedRestaurants: convertToArray(data),
        loadingLastVisitedRestaurants: false,
        active: false
      });
    });
  };

  render() {
    const {
      topRestaurants,
      lastVisitedRestaurants,
      loadingTopRestaurants,
      loadingLastVisitedRestaurants
    } = this.state;
    return (
      <div>
        <Header user={this.props.user} />
        <Container>
          <Velkommen />
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <Loader active={loadingTopRestaurants} />
                <div className="forside">
                  <ToppListe
                    restaurants={topRestaurants}
                    title={`Topp ${NUMBER_OF_TOPS} restauranter`}
                    loading={loadingTopRestaurants}
                  />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Loader active={loadingLastVisitedRestaurants} />
                <div className="forside">
                  <ToppListe
                    restaurants={lastVisitedRestaurants}
                    title={`Siste ${NUMBER_OF_TOPS} besøkte`}
                    loading={loadingLastVisitedRestaurants}
                  />
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default MainPage;
