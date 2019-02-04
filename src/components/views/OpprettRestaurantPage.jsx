import React from "react";
import { Redirect } from "react-router-dom";
import googleAnalytics from "../../services/googleAnalytics";
import Header from "../header/Header";
import OpprettRestaurantForm from "../OpprettRestaurant/OpprettRestaurantForm";
import fire from "../../tools/firebase";
import restaurantService from "../../services/restaurantService";
import { Container } from "semantic-ui-react";

googleAnalytics.settSidevisning("/opprettRestaurant");

class OpprettRestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantToEdit: null
    };
    this.ref = fire.database().ref("restaurants");
  }

  componentDidMount() {
    const { restaurant } = this.props.match.params;
    if (restaurant) {
      restaurantService.getRestaurant(restaurant, data => {
        this.setState({
          restaurantToEdit: data
        });
      });
    }
  }

  saveRestaurantToDb = (data, cb) => {
    data.registered = new Date().getTime();
    this.ref.child(data.name).set(data, error => {
      if (error) {
        cb(error);
        return;
      }
      cb(null);
    });
  };
  render() {
    if (!this.props.user) {
      return <Redirect to="/logginn" />;
    }
    return (
      <div>
        <Header user={this.props.user} />
        <Container>
          <h1>Legg til en restaurant</h1>
          <OpprettRestaurantForm
            saveToDb={this.saveRestaurantToDb}
            restaurantToEdit={this.state.restaurantToEdit}
          />
        </Container>
      </div>
    );
  }
}

export default OpprettRestaurantPage;
