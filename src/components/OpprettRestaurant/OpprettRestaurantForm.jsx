import React, { Component } from "react";
import { Form, Button, Select, Input, TextArea } from "semantic-ui-react";
import {
  restaurantOptions,
  priceOptions,
  serviceOptions
} from "./restaurantOptions";

class OpprettRestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      price: "",
      service: "",
      score: 3,
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => {
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  saveToDb = () => {
    console.log("Lagrer til db");
    this.props.saveToDb(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.saveToDb}>
        <Form.Field>
          <label>Navn på restaurant</label>
          <Input
            onChange={this.handleChange}
            required
            placeholder="Navn på restaurant"
            name="name"
          />
        </Form.Field>
        <Form.Field>
          <label>Type restaurant</label>
          <Select
            onChange={this.handleChange}
            placeholder="Hvilken type restaurant er dette?"
            name="category"
            options={restaurantOptions}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Pris</label>
          <Select
            onChange={this.handleChange}
            placeholder="Prismessig"
            name="price"
            options={priceOptions}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Service</label>
          <Select
            onChange={this.handleChange}
            placeholder="Hvordan var servicen?"
            name="service"
            options={serviceOptions}
            required
          />
        </Form.Field>
        <Form.Field name="score">
          <label>Totalscore</label>
          <Input
            onChange={this.handleChange}
            type="number"
            step="1"
            name="score"
            defaultValue={this.state.score}
            min="1"
            max="6"
            required
          />
        </Form.Field>
        <Form.Field name="comment">
          <label>Kommentar</label>
          <TextArea
            name="comment"
            cols="30"
            rows="10"
            onChange={this.handleChange}
          />
        </Form.Field>

        <Button type="submit">Lagre</Button>
      </Form>
    );
  }
}

export default OpprettRestaurantForm;
