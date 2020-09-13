import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Header,Button } from "semantic-ui-react";
import {UserContext} from './Context/UserContext';
 
import { Slider } from 'antd';


export default function PolicyComponent() {

  function onChange(value) {
    setSliderValue(value);
    console.log('onChange: ', value);

  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }
  const useStyles = makeStyles((theme) => ({
   
    root: {


      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        marginLeft: "17em",
        height: "auto",
        minHeight:"550px",
        overflow: "hidden",
      }
  
    }


  }));
  const classes = useStyles();
const [slidervalue,setSliderValue] = useState(3);
  const marks = {
    1: '1m',

    10: {
      label: <strong>10m</strong>,
    },
  };
  return (
    <div className={classes.root}>
      <Paper elevation={3}>

        <Container className="businesspageheader">
        <Header textAlign="center" as="h2">
        Policy Coverage
        </Header> 
     
        <Header textAlign="center" as="h1">
          ${slidervalue}M
            </Header>

        </Container>
        <div className="slidercontainer">

        <Slider style={{margin : "50px"}} min={1} max={10} marks={marks} step ={1} defaultValue={3} onChange={onChange} onAfterChange={onAfterChange}  />
    
        </div>
        <div className="dateheadingcontainer">
        <h4>Start Date</h4>
        </div>
        <div className="datepickercontainer">
        <div className="datepick">
        <input type="date" className="date-picker-class" />
        </div>
     
   <UserContext.Consumer > 
     { ({currentStep,onChanged,nextStep,prevStep})=>
     <div className="addressformbuttons buttons2">
     <Button  floated="left" style={{margin:"20px"}} onClick={prevStep}>
          Previous
   </Button>
        <Button primary floated="right" style={{margin:"20px"}} onClick={nextStep}>
          Next
   </Button>
   </div>}
   </UserContext.Consumer>


        </div>
      </Paper>
    </div>
  )

}