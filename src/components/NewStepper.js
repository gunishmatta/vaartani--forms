import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Steps, Button, message,Layout } from "antd";
import SellerIDComponent from "./SellerIDComponent";
import BusinessDetailComponent from "./BusinessDetailComponent";
import PolicyComponent from './PolicyComponent';
import ProductTable from "./ProductTable";
import QuoteComponent from "./QuoteComponent";
import { UserContext } from "./Context/UserContext";
import FormComponent from './FormComponent';
import vaartanilogo from '../assets/vaartanilogo.png';
import {Header} from 'semantic-ui-react';
const { Step } = Steps;

const steps = [
  {
    title: "Seller ID",
    content: <SellerIDComponent />
  },
  {
    title: "Business Details",
    content: <BusinessDetailComponent />
  },
  {
    title: "Product Details",
    content: <ProductTable />
  },
  {
    title: "Policy Coverage",
    content: <PolicyComponent />
  },
  {
    title: "Applicant Details",
    content: <FormComponent />
  },
  {
    title: "Coverage",
    content: <QuoteComponent />
  }


];

export default function NewStepper() {
  
     const [current,setCurrent] =useState(0);
   
  const onChange = (current) => {
    console.log("onChange:", current);
    setCurrent(current);
  };
  
  function next() {
    setCurrent(current+1);
  }

  function prev() {
    setCurrent(current-1);
  }
 const data = {
   currentStep : current,
   onChanged : onChange,
nextStep : next,
prevStep : prev
}
  
    return (
      <UserContext.Provider value ={data}>
      <Layout>
      <Layout.Header>
      <img src={vaartanilogo} alt="vaartanilogo" />
      </Layout.Header>
      <Layout>

      <div className="stepcontainer">
      <Layout.Sider width="300">
      <div className="steps-container">

          <Steps
              onChange={onChange}
              current={current}
              direction="vertical"
            >
              {steps.map((item) => (
                <Step
                  onClick={() => {
                    setCurrent(current);
                  }}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </Steps>
          </div>
          </Layout.Sider>
          <Layout.Content>
            <div className="steps-content">{steps[current].content}</div>
          </Layout.Content>
          </div>
          </Layout>
          <Layout.Footer style={{ position: "sticky", bottom: "0",marginTop:"0.5em" }}>
          <Header textAlign="left" as="h5" disabled>
          ©2020 Vaartani, Inc. All Rights Reserved.
       
        </Header>
          </Layout.Footer>
          </Layout>
        </UserContext.Provider>
    );
  }


