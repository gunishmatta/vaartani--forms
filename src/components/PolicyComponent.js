import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Header,Button } from "semantic-ui-react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import {UserContext} from './Context/UserContext';
 
import Typography from '@material-ui/core/Typography';
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
        minHeight:"720px",
        overflow: "hidden",
      }
  
    }


  }));
  const classes = useStyles();
const [slidervalue,setSliderValue] = useState(3);
const [currentDate, setNewDate] = useState(null);
  const onChangeDate = (event, data) => setNewDate(data.value);
  const marks = {
    1: '1m',
    2: '2m',
    3: '3m',
    4: '4m',
    5: '5m',
    6: '6m',
    7: '7m',
    8: '8m',
    9: '9m',
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
        <SemanticDatepicker className="date-picker-class" onChange={onChangeDate} />
        </div>
     
   <UserContext.Consumer > 
     { ({currentStep,onChanged,nextStep,prevStep})=>
     <Container className="addressformbuttons">
     <Button  floated="left" style={{margin:"20px"}} onClick={prevStep}>
          Previous
   </Button>
        <Button primary floated="right" style={{margin:"20px"}} onClick={nextStep}>
          Next
   </Button>
   </Container>}
   </UserContext.Consumer>


        </div>
      </Paper>
    </div>
  )

}