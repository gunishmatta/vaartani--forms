import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

import { makeStyles } from "@material-ui/core/styles";
import {UserContext} from './Context/UserContext';
import Paper from "@material-ui/core/Paper";

import { Container } from "@material-ui/core";
import {Header } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
  root: {


    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      marginLeft: "17em",
      height: "auto",
      overflow: "hidden",
      minHeight:"550px",
    }

  }
}));

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper elevation={3} >
      <Container className="businesspageheader">
        <Header textAlign="center" as="h2">
          Applicant Details          </Header>
      </Container>

    
    <Form className="formd">
      <Form.Field>
        <label className="formlabel">First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label className="formlabel">Last Name</label>
        <input placeholder="Last Name"  />
      </Form.Field>
      <Form.Field>
        <label className="formlabel">Street</label>
        <input placeholder="Street"  />
      </Form.Field>
      <Form.Field>
        <label className="formlabel">Suite</label>
        <input placeholder="Suite" />
      </Form.Field>
    </Form>

    <UserContext.Consumer > 
    { ({currentStep,onChanged,nextStep,prevStep})=>
    <Container className="addressformbuttons buttons2">
    <Button  floated="left" style={{margin:"20px"}} onClick={prevStep}>
         Previous
  </Button>
       <Button primary floated="right" style={{margin:"20px"}} onClick={nextStep}>
         Next
  </Button>
  </Container>}
  </UserContext.Consumer>

</Paper>
</div>



  );
}
