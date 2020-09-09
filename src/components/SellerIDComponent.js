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
      width: theme.spacing(80),
      height: theme.spacing(80),
      marginLeft: "17em"
    }
  }
}));

export default function SellerIDComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className="logocontainer">
          <img src={Logo} alt="amazon logo" className="amazon-logo"></img>
        </div>
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
          <div className="twelve wide field searchbarcontainer">
            <div className="ui input searchbar"><input type="text" placeholder="Enter Seller ID as on Amazon USA" /></div>
          </div>
          <div className="buttoncontainer">
          <button className="ui primary button searchbar">
            Get Quote
</button>
        </div>
     
          </Container>
      </Paper>
    </div>
  );
}
