import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";

const LoggInnForm = ({ error, loggInn }) => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  const updateLoggInnState = event => {
    const field = event.target.name;
    const value = event.target.value;
    setLoginInfo({
      ...loginInfo,
      [field]: value
    });
  };

  const { username, password } = loginInfo;
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
            onChange={updateLoggInnState}
          />
        </Form.Field>
        <Form.Field>
          <label>Passord</label>
          <input
            type="password"
            placeholder="Passord"
            name="password"
            onChange={updateLoggInnState}
          />
        </Form.Field>
        <Button type="submit" onClick={() => loggInn(username, password)}>
          Logg inn
        </Button>
      </Form>
      {errorMessage}
    </div>
  );
};

export default LoggInnForm;
