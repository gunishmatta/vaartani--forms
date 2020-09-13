import React, { useState, useEffect } from "react";
import { Button,Form } from "semantic-ui-react";

import { makeStyles } from "@material-ui/core/styles";
import {UserContext} from './Context/UserContext';
import Paper from "@material-ui/core/Paper";

import { Container } from "@material-ui/core";
import {Header } from 'semantic-ui-react'
const axios = require('axios');

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
  const url = "http://34.83.163.106:5000/vaartani/ai/api/v1.0/form/amazonus/seller/getdetails";
  const [formData, setFormData] = useState({
    loading: false,
    name: "",
    street: "",
    suite: ""
  });

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
  async function getData()
  {
  try{
  const response = await axios.post(url, {
  "seller_node": "A14NOP0UE2MSZH"
      });
     // const myobj = JSON.parse(JSON.stringify(response));
      console.clear();
  
      const mynewdata = response.data.seller_details;
  setFormData({
  loading:false,
street : mynewdata.street_number,
suite : mynewdata.locality_area_county
  })
  
  console.log(mynewdata);
  
  
    }
    catch(err)
    {
  console.log(err);
    }
  
    }
    
   getData();
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  
  
  // useEffect(() => {
  //   SetAppState({ loading: true });
  //   const apiurl = "https://jsonplaceholder.typicode.com/users";
  //   fetch(apiurl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       SetAppState({
  //         loading: false,
  //         name: data[0].name,
  //         street: data[0].address.street,
  //         suite: data[0].address.suite
  //       });
  //     });
  // }, [SetAppState]);

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
        <input placeholder="Street" 
        value={formData.street}
         onChange={event => setFormData({street:event.target.value})}
        />
      </Form.Field>
      <Form.Field>
        <label className="formlabel">Suite</label>
        <input placeholder="Suite" 
        value={formData.suite}
         onChange={event => setFormData({suite:event.target.value})}
        />
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
