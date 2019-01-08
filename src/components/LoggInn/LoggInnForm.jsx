import React from "react";
import { Button, Form, Message } from "semantic-ui-react";

class LoggInnForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  updateLoggInnState = event => {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({
      [field]: value
    });
  };

  render() {
    const { username, password } = this.state;
    const { error } = this.props;
    let errorMessage = "";
    if (error) {
      errorMessage = (
        <Message warning>
          <Message.Header>Det var et problem med påloggingen</Message.Header>
          <p>{error}</p>
        </Message>
      );
    }
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Brukernavn</label>
            <input
              placeholder="Brukernavn"
              name="username"
              onChange={this.updateLoggInnState}
            />
          </Form.Field>
          <Form.Field>
            <label>Passord</label>
            <input
              type="password"
              placeholder="Passord"
              name="password"
              onChange={this.updateLoggInnState}
            />
          </Form.Field>
          <Button
            type="submit"
            onClick={() => this.props.loggInn(username, password)}
          >
            Logg inn
          </Button>
        </Form>
        {errorMessage}
      </div>
    );
  }
}

export default LoggInnForm;
