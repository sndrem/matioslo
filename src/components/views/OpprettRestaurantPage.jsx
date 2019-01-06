import React from "react";
import MainMenu from "../menues/MainMenu";
import OpprettRestaurantForm from "../OpprettRestaurant/OpprettRestaurantForm";
import fire from "../../tools/firebase";

class OpprettRestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.ref = fire.database().ref("restaurants");
  }
  saveRestaurantToDb = data => {
    data.lastVisited = new Date().getTime();
    this.ref.child(data.name).set(data);
  };
  render() {
    return (
      <div>
        <MainMenu user={this.props.user} history={this.props.history} />
        <h1>Legg til en restaurant</h1>
        <OpprettRestaurantForm saveToDb={this.saveRestaurantToDb} />
      </div>
    );
  }
}

export default OpprettRestaurantPage;
