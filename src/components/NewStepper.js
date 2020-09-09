import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Steps, Button, message,Layout } from "antd";
import SellerIDComponent from "./SellerIDComponent";
import BusinessDetailComponent from "./BusinessDetailComponent";
import PolicyComponent from './PolicyComponent';
import ProductTable from "./ProductTable";
import QuoteComponent from "./QuoteComponent";
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
    content: <PolicyComponent />
  },
  {
    title: "Coverage",
    content: <QuoteComponent />
  }


];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <>
      <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout>

      <div className="stepcontainer">
      <Layout.Sider width="300">
      <div className="steps-container">

          <Steps
              onChange={this.onChange}
              current={current}
              direction="vertical"
            >
              {steps.map((item) => (
                <Step
                  onClick={() => {
                    this.setState({ current });
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
          <Layout.Footer>Footer</Layout.Footer>
          </Layout>
        </>
    );
  }
}

