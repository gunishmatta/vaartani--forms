import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/core/styles";
import SignaturePad from "react-signature-canvas";
import Paper from "@material-ui/core/Paper";
import { Button, Form, Header } from "semantic-ui-react";
import "../sigCanvas.css";
import Container from "@material-ui/core/Container";
import Logo from "../assets/amazonlogo.png";
function App() {
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
  const classes = useStyles();

  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  // const save = () =>
  //   setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

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
        <>

          <div className="signaturepadcontainer">
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
            />
          </div>

          <div className="QuoteButtons">
            <Button>Save</Button>
            <Button onClick={clear}>Clear</Button>
          </div>
        </>

        {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
        <div className="buttoncontainer">
          <button className="ui primary button searchbar">
            Payment
</button>
        </div>
      </Paper>
    </div>

  );
}

export default App;
