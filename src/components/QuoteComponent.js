import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/core/styles";
import SignaturePad from "react-signature-canvas";
import Paper from "@material-ui/core/Paper";
import { Button, Form,Header } from "semantic-ui-react";
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
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

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
          {/* Button to trigger save canvas image */}

          <div className="QuoteButtons">
            <Button onClick={save}>Save</Button>
            <Button onClick={clear}>Clear</Button>
          </div>
        </>

        <br />
        <br />
        {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "150px"
            }}
          />
        ) : null}
      </Paper>
    </div>

  );
}

export default App;
