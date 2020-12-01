import React, { Component } from "react";
import SignIn from "./Components/SignIn";
import LandingPage from "./Components/LandingPage";
import Letter from "./Components/LetterHead";
import Annexure from "./Components/Annexure";
import PaginationTableComponent from "./Components/GeneratedList";
import PaginationTableComponent1 from "./Components/Generateannex";
import PaginationTableComponent2 from "./Components/Generateinvoice";
import Invoice from "./Components/Invoice";
// import InvoicePdf from './Components/InvoicePdf'
import InvoicePdf from "./Components/InvoicePdf";
import letterhead from "./Components/LetterHeadpdf";

export class App extends Component {
  state = {
    step: 1,
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Go to +2 Steps
  next2Step = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2,
    });
  };
  next3Step = () => {
    const { step } = this.state;
    this.setState({
      step: step + 3,
    });
  };

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <SignIn nextStep={this.nextStep} next2Step={this.next2Step} />;

      case 2:
        return (
          <LandingPage
            nextStep={this.nextStep}
            next2Step={this.next2Step}
            prevStep={this.prevStep}
            next3Step={this.next3Step}
          />
        );
      case 3:
        return <Letter/>;
      case 4:
        return <Annexure />;
      case 5:
        return <PaginationTableComponent2 />;
      default:
        console.log("Wrong Choice");
    }
  }
}

export default App;
