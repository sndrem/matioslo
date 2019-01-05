import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";

const Forsideknapp = ({ icon, text }) => {
  return (
    <Button className="forsideknapp">
      <Icon name={icon} /> {text}
    </Button>
  );
};

const ForsideKnapper = () => {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Forsideknapp icon="search" text="Søk" />
        </Grid.Column>
        <Grid.Column>
          <Forsideknapp icon="map" text="Kart" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ForsideKnapper;
