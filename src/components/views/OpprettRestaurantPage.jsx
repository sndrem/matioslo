import React from "react";
import LoggedInMenu from "../menues/LoggedInMenu";
import OpprettRestaurantForm from "../OpprettRestaurant/OpprettRestaurantForm";

class OpprettRestaurantPage extends React.Component {
  render() {
    return (
      <div>
        <LoggedInMenu />
        <h1>Legg til en restaurant</h1>
        <OpprettRestaurantForm />
      </div>
    );
  }
}

export default OpprettRestaurantPage;
