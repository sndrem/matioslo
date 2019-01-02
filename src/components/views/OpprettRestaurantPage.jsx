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
    console.log(data);
    const key = this.ref.push(data);
    console.log("Lagrer data med nøkkel", key);
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
