import React from "react";
import Header from "../header/Header";
import MainMenu from "../menues/MainMenu";
import OpprettRestaurantForm from "../OpprettRestaurant/OpprettRestaurantForm";
import fire from "../../tools/firebase";
import { Container } from "semantic-ui-react";

class OpprettRestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.ref = fire.database().ref("restaurants");
  }
  saveRestaurantToDb = (data, cb) => {
    data.lastVisited = new Date().getTime();
    this.ref.child(data.name).set(data, error => {
      if (error) {
        cb(error);
        return;
      }
      cb(null);
    });
  };
  render() {
    return (
      <div>
        <Header />
        <MainMenu user={this.props.user} history={this.props.history} />
        <Container>
          <h1>Legg til en restaurant</h1>
          <OpprettRestaurantForm saveToDb={this.saveRestaurantToDb} />
        </Container>
      </div>
    );
  }
}

export default OpprettRestaurantPage;
