import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";

const ForsideKnapper = () => {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Button>
            <Icon name="search" /> Søk
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button>
            <Icon name="map" />
            Kart
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ForsideKnapper;
