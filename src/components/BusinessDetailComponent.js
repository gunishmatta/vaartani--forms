import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Form } from "semantic-ui-react";
import { Container } from "@material-ui/core";
import { Button, Header } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100)
    }

  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <Container className="businesspageheader">
          <Header textAlign="center" as="h2">
            Business Details          </Header>
        </Container>

        <Form>
          <Container>
            <Form.Group widths="equal">
              <Form.Input
                // error={{
                //   content: "Please enter your first name",
                //   pointing: "below"
                // }}
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="Seller ID"
                placeholder="Seller ID"
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Seller Store Name"
                placeholder="Seller Store Name "
              />
            </Form.Group>
          </Container>

          <Container>
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
              <Form.Field width="15">
                <label>Registered Addresss</label>
                <input placeholder='Registered Address' />
              </Form.Field>
            </Form.Group>

          </Container>

          <Container>
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
          <Container>
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
          <Container>
            <Form.Group widths="equal">
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="Website"
                placeholder=""
              />
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Date of Establishment"
                placeholder=""
              />
            </Form.Group>
          </Container>
          <Container>
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
          <Container className="addressformbuttons">
            <Button primary floated="left">
              Previous
       </Button>
            <Button primary floated="right">
              Next
       </Button>
          </Container>

        </Form>
      </Paper>
    </div>
  );
}
