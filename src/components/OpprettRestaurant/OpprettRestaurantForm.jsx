import React, { Component } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import { restaurantOptions, priceOptions } from "./restaurantOptions";

class OpprettRestaurantForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Navn på restaurant</label>
          <input placeholder="Navn på restaurant" />
        </Form.Field>
        <Form.Field>
          <label>Type restaurant</label>
          <Select
            placeholder="Hvilken type restaurant er dette?"
            name="category"
            options={restaurantOptions}
          />
        </Form.Field>
        <Form.Field>
          <label>Pris</label>
          <Select
            placeholder="Prismessig"
            name="price"
            options={priceOptions}
          />
        </Form.Field>

        <Button type="submit">Lagre</Button>
      </Form>
    );
  }
}

export default OpprettRestaurantForm;
