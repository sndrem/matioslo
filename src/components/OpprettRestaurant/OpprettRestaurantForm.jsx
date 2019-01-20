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
import googleAnalytics from "../../services/googleAnalytics";
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

const Status = ({ title, status }) => {
  return (
    <Message info>
      <Message.Header>{title}</Message.Header>
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
        address: "",
        comment: "",
        homepage: "",
        lastVisited: ""
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
    const {
      name,
      category,
      price,
      service,
      score,
      lastVisited
    } = this.state.data;
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

    if (this.empty(lastVisited)) {
      errors.push("Dato besøkt må være satt");
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
      googleAnalytics.settEvent(
        "User",
        "Restaurant ble lagret i databasen",
        "Opprettelse av restaurant"
      );
      let status = `${this.state.data.name} ble lagret i databasen`;
      this.props.saveToDb(this.state.data, error => {
        if (error) {
          status = "Det var et problem ved lagring til databasen";
        }
        this.setState({
          data: {
            name: "",
            category: "",
            price: "",
            service: "",
            score: 3,
            address: "",
            comment: "",
            homepage: "",
            lastVisited: ""
          },
          errors: [],
          status
        });
      });
    }
  };

  empty = value => value === "" || value === undefined || value === null;

  render() {
    const {
      errors,
      status,
      data: {
        name,
        price,
        service,
        comment,
        category,
        score,
        address,
        homepage,
        lastVisited
      }
    } = this.state;
    return (
      <div>
        {status ? (
          <Status title="Informasjon" status={status} name={name} />
        ) : (
          ""
        )}
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
          <Form.Field>
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
          <Form.Field>
            <label>Når var besøket?</label>
            <Input
              type="date"
              name="lastVisited"
              value={lastVisited}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Adresse</label>
            <Input
              type="text"
              name="address"
              value={address}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hjemmeside</label>
            <Input
              type="text"
              value={homepage}
              name="homepage"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
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
