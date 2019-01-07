import React, { Component } from "react";
import MainMenu from "../menues/MainMenu";
import { Container, Grid } from "semantic-ui-react";
import restaurantService from "../../services/restaurantService";
import ForsideKnapper from "../forside/Forsideknapper";
import ToppListe from "../forside/Toppliste";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import { convertToArray } from "../../tools/helpers";

const NUMBER_OF_TOPS = 5;
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRestaurants: [],
      lastVisitedRestaurants: []
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
        active: false
      });
    });
  };

  getLastVisitedRestaurants = () => {
    restaurantService.getTopRestaurants("lastVisited", NUMBER_OF_TOPS, data => {
      this.setState({
        ...this.state,
        lastVisitedRestaurants: convertToArray(data),
        active: false
      });
    });
  };

  render() {
    const { topRestaurants, lastVisitedRestaurants } = this.state;
    return (
      <div>
        <Header />
        <MainMenu user={this.props.user} history={this.props.history} />
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Hero />
              </Grid.Column>
              <Grid.Column>
                <div className="forside">
                  {/* <ForsideKnapper className="forside-knapper" /> */}
                  <ToppListe
                    restaurants={topRestaurants}
                    title={`Topp ${NUMBER_OF_TOPS} restauranter`}
                  />
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div className="forside">
                  {/* <ForsideKnapper className="forside-knapper" /> */}
                  <ToppListe
                    restaurants={lastVisitedRestaurants}
                    title={`Siste ${NUMBER_OF_TOPS} besøkte`}
                  />
                </div>
              </Grid.Column>
              <Grid.Column>
                <Hero />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default MainPage;
