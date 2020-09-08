import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Logo from "../assets/amazonlogo.png";
import { Header } from "semantic-ui-react";
import { Button, Form } from "semantic-ui-react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
      marginLeft: "17em"
    }
  }
}));

export default function SellerIDComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Container>
          <img src={Logo} alt="amazon logo" className="amazon-logo"></img>
        </Container>
        <Container>
          <Header textAlign="center" as="h2">
            Seller's Policy
          </Header>
        </Container>

        <Container className="starting">
          <Header textAlign="center" as="h3" disabled>
            Starting at
          </Header>
        </Container>
        <Container>
          <Header textAlign="center" as="h1">
            $50
          </Header>
          <Header textAlign="center" as="h3">
            PER MONTH
          </Header>
        </Container>
        <Container >
        <div class="ui input"><input type="text" placeholder="Search.."/></div>
        </Container>
      </Paper>
    </div>
  );
}
