import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function FormComponent() {
  const [AppState, SetAppState] = useState({
    loading: false,
    name: "Not Fetched Yet",
    street: "",
    suite: ""
  });

  useEffect(() => {
    SetAppState({ loading: true });
    const apiurl = "https://jsonplaceholder.typicode.com/users";
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        SetAppState({
          loading: false,
          name: data[0].name,
          street: data[0].address.street,
          suite: data[0].address.suite
        });
      });
  }, [SetAppState]);

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" value={AppState.name} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <label>Street</label>
        <input placeholder="Street" value={AppState.street} />
      </Form.Field>
      <Form.Field>
        <label>Suite</label>
        <input placeholder="Suite" value={AppState.suite} />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
