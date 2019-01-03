import React, { Component } from "react";
import {
  Form,
  Button,
  Select,
  Input,
  TextArea,
  List,
  Message
} from "semantic-ui-react";
import {
  restaurantOptions,
  priceOptions,
  serviceOptions
} from "./restaurantOptions";

const ErrorList = ({ errors }) => {
  return (
    <List celled>
      {errors.map((error, index) => (
        <List.Item key={index}>{error}</List.Item>
      ))}
    </List>
  );
};

const LagringOkMelding = ({ status }) => {
  return (
    <Message info>
      <Message.Header>Lagring ok</Message.Header>
      <p>{status}</p>
    </Message>
  );
};

class OpprettRestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        category: "",
        price: "",
        service: "",
        score: 3,
        comment: ""
      },
      errors: [],
      status: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, { name, value }) => {
    if (name === "score") {
      value = parseInt(value);
    }
    this.setState(
      {
        data: {
          ...this.state.data,
          [name]: value
        }
      },
      () => this.validateForm()
    );
  };

  validateForm = () => {
    const { name, category, price, service, score } = this.state.data;
    const errors = [];
    if (this.empty(name)) {
      errors.push("Navn kan ikke være tom");
    }

    if (this.empty(category)) {
      errors.push("Kategori kan ikke være tom");
    }

    if (this.empty(price)) {
      errors.push("Pris kan ikke være tom");
    }

    if (this.empty(service)) {
      errors.push("Service kan ikke være tom");
    }

    if (this.empty(score)) {
      errors.push("Score kan ikke være tom");
    }

    if (errors.length > 0) {
      this.setState({
        data: {
          ...this.state.data
        },
        errors
      });
      return false;
    }
    this.setState({
      data: {
        ...this.state.data
      },
      errors: []
    });
    return true;
  };

  saveToDb = () => {
    if (this.validateForm()) {
      this.props.saveToDb(this.state.data);
      this.setState({
        data: {
          name: "",
          category: "",
          price: "",
          service: "",
          score: 3,
          comment: ""
        },
        errors: [],
        status: `${this.state.data.name} ble lagret i databasen`
      });
    }
  };

  empty = value => value === "" || value === undefined || value === null;

  render() {
    const {
      errors,
      status,
      data: { name, price, service, comment, category, score }
    } = this.state;
    return (
      <div>
        {status ? <LagringOkMelding status={status} name={name} /> : ""}
        {errors.length > 0 ? <ErrorList errors={errors} /> : ""}
        <Form name="restaurantform" onSubmit={this.saveToDb}>
          <Form.Field>
            <label>Navn på restaurant</label>
            <Input
              onChange={this.handleChange}
              placeholder="Navn på restaurant"
              name="name"
              value={name}
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
              value={category}
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
              value={price}
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
              value={service}
            />
          </Form.Field>
          <Form.Field name="score">
            <label>Totalscore</label>
            <Input
              onChange={this.handleChange}
              type="number"
              step="1"
              name="score"
              value={score}
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
              value={comment}
            />
          </Form.Field>
          <Button type="submit">Lagre</Button>
        </Form>
      </div>
    );
  }
}

export default OpprettRestaurantForm;
