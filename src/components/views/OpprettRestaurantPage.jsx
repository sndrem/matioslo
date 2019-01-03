import React from "react";
import LoggedInMenu from "../menues/LoggedInMenu";
import OpprettRestaurantForm from "../OpprettRestaurant/OpprettRestaurantForm";
import fire from "../../tools/firebase";

class OpprettRestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.ref = fire.database().ref("restaurants");
  }
  saveRestaurantToDb = data => {
    this.ref.child(data.name).set(data);
  };
  render() {
    return (
      <div>
        <LoggedInMenu />
        <h1>Legg til en restaurant</h1>
        <OpprettRestaurantForm saveToDb={this.saveRestaurantToDb} />
      </div>
    );
  }
}

export default OpprettRestaurantPage;
