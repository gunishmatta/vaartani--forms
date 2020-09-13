import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { Form } from "semantic-ui-react";
import { Container } from "@material-ui/core";
import { Button, Header } from 'semantic-ui-react'
import {UserContext} from './Context/UserContext';
import { Dropdown } from 'semantic-ui-react'
import {SellerIDContext} from './Context/SellerIDContext'
const axios = require('axios');


const options = [
  { key: 1, text: 'Propreitor', value: 1 },
  { key: 2, text: 'LLC', value: 2 },
  { key: 3, text: 'Private Company', value: 3 },
]
const revenueoptions = [
  { key: 1, text: '1M$', value: 1 },
  { key: 2, text: '2M$', value: 2 },
  { key: 3, text: '3M$', value: 3 },
  { key: 4, text: '4M$', value: 4 },
  { key: 5, text: '5M$', value: 5 },
  { key: 6, text: '6M$', value: 6 },
  { key: 7, text: '7M$', value: 7 },
  { key: 8, text: '8M$', value: 8 },
  { key: 9, text: '9M$', value: 9 },
  { key: 10, text: '10M$', value: 10 },
]

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

const [inputValue,setInputValue] = useState(" ");
const url = "http://34.83.163.106:5000/vaartani/ai/api/v1.0/form/amazonus/seller/getdetails";

const [formData, setFormData] = useState({
  loading: false,
  seller_id: "",
  seller_name: "",
  address: "",
zip:"",
state:"",
country:"",

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
    console.log(response);
    console.log(response.data);
    
    console.log(mynewdata);

    console.log(typeof(response));
    console.log(typeof(response.data));
    
    console.log(typeof(mynewdata));

    

setFormData({
loading:false,
seller_id: "",
  seller_name: mynewdata.seller_name,
  address: mynewdata.street_number+" "+mynewdata.locality_area_county,
zip:mynewdata.postcode,
state:mynewdata.state,
country:mynewdata.country,
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
<SellerIDContext.Consumer>              
{inputVal => 
  
  <Form.Field>
  <label>Seller ID</label>
  <input placeholder='Seller ID' value={inputVal} />
</Form.Field>
  
  
}

 </SellerIDContext.Consumer>


  <Form.Field>
  <label>Seller Store Name</label>
  <input placeholder='Enter your store name' value={formData.seller_name} onChange={event => setFormData({seller_name:event.target.value})} />
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
                placeholder="e.g. Store "
                className="businessname"
                style={{ paddingRight: "11px"}}
              />
              <div className="dropdownstyle labelbpage">
              <label placeholder="Legal Structure">Business Legal Structure</label>
              <Dropdown fluid options={options} selection />
              </div>
              </Form.Group>
            <Form.Group>
              <Form.Field className="addressfield">
                <label>Registered Addresss</label>
                <input placeholder='Registered Address' value={formData.address} onChange={event => setFormData({address:event.target.value})} />
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
                placeholder="Enter your city"
              />
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="ZIP"
                placeholder="Enter your postal code"
                value={formData.zip}
                 onChange={event => setFormData({zip:event.target.value})}
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
                placeholder="Enter your state"
                value={formData.state}
                onChange={event => setFormData({state:event.target.value})}
              />
              <Form.Input
                width="5"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Country"
                placeholder="Enter your Country"
                value={formData.country}
                onChange={event => setFormData({country:event.target.value})}
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
                placeholder="Enter your website"
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
                placeholder="Enter the number of employees"
                style={{ paddingRight: "11px"}}
              
              />
              <div className="dropdownstyle labelbpage">
              <label >Expected Annual Revenue 2020(USD)</label>
              <Dropdown placeholder="Enter your revenue" fluid options={revenueoptions} selection />
              </div>
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
