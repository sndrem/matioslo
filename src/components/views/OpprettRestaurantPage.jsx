import React from "react";
import { Redirect } from "react-router-dom";
import googleAnalytics from "../../services/googleAnalytics";
import Header from "../header/Header";
import OpprettRestaurantForm from "../OpprettRestaurant/OpprettRestaurantForm";
import fire from "../../tools/firebase";
import { Container } from "semantic-ui-react";

googleAnalytics.settSidevisning("/opprettRestaurant");

class OpprettRestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.ref = fire.database().ref("restaurants");
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
        <Header user={this.props.user} history={this.props.history} />
        <Container>
          <h1>Legg til en restaurant</h1>
          <OpprettRestaurantForm saveToDb={this.saveRestaurantToDb} />
        </Container>
      </div>
    );
  }
}

export default OpprettRestaurantPage;
