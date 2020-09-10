import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { Form } from "semantic-ui-react";
import { Container } from "@material-ui/core";
import { Button, Header } from 'semantic-ui-react'
import {UserContext} from './Context/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {


    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      marginLeft: "17em",
      height: "auto",
      overflow: "hidden",
    }

  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <div className="businesspageheader">
          <Header textAlign="center" as="h2">
            Business Details          </Header>
        </div>

        <Form>
          <Container style={{margin:"-0.5rem"}}>
            <Form.Group widths="equal">
              
    <Form.Field>
    <label>Seller ID</label>
    <input placeholder='Seller ID' />
  </Form.Field>
  <Form.Field>
  <label>Seller Store Name</label>
  <input placeholder='Seller ID' />
</Form.Field>
            </Form.Group>
          </Container>

          <Container style={{margin:"-0.5rem"}}>
            <Form.Group widths="equal">
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="Business Name"
                placeholder="Business Name"
              />
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Business Legal Structure"
                placeholder="Business Legal Structure"
              />
            </Form.Group>
            <Form.Group>
              <Form.Field className="addressfield">
                <label>Registered Addresss</label>
                <input placeholder='Registered Address' />
              </Form.Field>
            </Form.Group>

          </Container>

          <Container style={{margin:"-0.5rem"}}>
            <Form.Group widths="equal">
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="City"
                placeholder=""
              />
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="ZIP"
                placeholder=""
              />
            </Form.Group>
          </Container>
          <Container style={{margin:"-0.5rem"}}>
            <Form.Group widths="equal">
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="State"
                placeholder=""
              />
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Country"
                placeholder="Business Legal Structure"
              />
            </Form.Group>
          </Container>
          <Container style={{margin:"-0.5rem"}}>
            <Form.Group widths="equal">
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="Website"
                placeholder=""
              />
              <Form.Input type="date"
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Date of Establishment"
                placeholder=""
              />
            </Form.Group>
          </Container>
          <Container style={{margin:"-0.5rem"}}>
            <Form.Group widths="equal">
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="Number of Employees"
                placeholder=""
              />
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Expected Annual Revenue"
                placeholder=""
              />
            </Form.Group>
          </Container>
          <UserContext.Consumer > 
          { ({currentStep,onChanged,nextStep,prevStep})=>
          <div className="addressformbuttons">
          <Button  floated="left" style={{margin:"0.5rem"}} onClick={prevStep}>
               Previous
        </Button>
             <Button primary floated="right" style={{margin:"0.5rem"}} onClick={nextStep}>
               Next
        </Button>
        </div>}
        </UserContext.Consumer>
     
        </Form>
      </Paper>
    </div>
  );
}
