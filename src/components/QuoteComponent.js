import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignaturePad from "react-signature-canvas";
import Paper from "@material-ui/core/Paper";
import { Header } from "semantic-ui-react";
import "../sigCanvas.css";
import Container from "@material-ui/core/Container";
import Logo from "../assets/amazonlogo.png";
function App() {
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
  const classes = useStyles();


  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */

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

        <Container>
          <Header textAlign="center" as="h1"  style={{margin:"20px"}}>
            $50
          </Header>
          <Header textAlign="center" as="h4">
            PER MONTH
          </Header>
        </Container>
        <>

        <div className="signlabel">      
        <label for="sigCanvas" >Signature</label> 
        </div>
        <div className="signaturepadcontainer">
   
         
          <SignaturePad
              ref={sigCanvas}
              canvasProps={{ width: 500, height: 120, className: 'sigCanvas' }}
            />
          
            </div>

 {    /*     <div className="QuoteButtons">
            <Button>Save</Button>
            <Button onClick={clear}>Clear</Button>
          </div>}
        </>

        {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
      </>
        <div className="quotebuttoncontainer">
          <button className="ui primary button quotebutton">
            Payment
</button>
        </div>
      </Paper>
    </div>

  );
}

export default App;
