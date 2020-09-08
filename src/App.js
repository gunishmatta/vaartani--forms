import React from "react";
import "./styles.css";
// import Stepper from './Stepper'
// import FormComponent from './components/FormComponent'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage";
import NewStepper from './components/NewStepper';
export default function App() {
  return (
    <>

      {/* <Stepper /> */}
      {/* <HomePage /> */}
   <Router>
      <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/new' component={NewStepper} />
          </Switch>
          </Router>
      {/* <FormComponent />     */}
    </>
  );
}
