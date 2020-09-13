import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Logo from "../assets/amazonlogo.png";
import { Header } from "semantic-ui-react";
import { UserContext } from './Context/UserContext';
import {SellerIDContext} from './Context/SellerIDContext'

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

export default function SellerIDComponent() {
  const classes = useStyles();
  const [inputVal,setInputValue] = useState("123454 ");
  const datatosend = {
sellerid : inputVal
  }
  return (
    <SellerIDContext.Provider value={inputVal}>


    <div className={classes.root}>
      <Paper elevation={1}>
        <div className="logocontainer">
          <img src={Logo} alt="amazon logo" className="amazon-logo"></img>
        </div>
       <div>
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
        </div>
        <UserContext.Consumer >

        
        {({ currentStep, onChanged, nextStep, prevStep }) =>


         
              
            <Container >
              <div className="twelve wide field searchbarcontainer"
              >
                <div className="ui input searchbar sbar"><input type="text" 
                value ={inputVal}
                onChange={e=>setInputValue(e.target.value)
                
                }
                placeholder="Enter Seller ID as on Amazon USA" /></div>
              </div>
              <div className="buttoncontainer">
                <button className="ui primary button searchbar"  onClick={nextStep} >
                  Get Quote
</button>
              </div>
              {
                console.log(currentStep)
              }
            </Container>
         
          }
        </UserContext.Consumer>


        <div className="sellerpagetext">
          <div>
            <h4>         <strong> Coverage</strong></h4>
          </div>

          <h4 className="ui disabled header  hddr">
            $1M worth of <strong>General Liability Insurance, </strong> covering third party
          bodily injury, product damage and product liability.
          </h4>
        </div>

        <div className="sellerpagetext">
          <div>
            <h4><strong> Endorsements</strong></h4>
          </div>
          
            <h4 className="ui disabled header hddr">The policy must include "Amazon.com, Inc., and its affilates and
         assignees" as additional insurers</h4>
          
{console.log(inputVal)
}
{
  console.log("Data to send "+datatosend)
}

        </div>
      </Paper>
    </div>
    </SellerIDContext.Provider>

    );
}
