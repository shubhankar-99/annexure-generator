import React, { Component } from 'react'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';

export class App extends Component {

    state = {
        step: 1,
        }

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Go to +2 Steps
    next2Step = () => {
        const { step } = this.state;
        this.setState({
            step: step +2 
        });
    }


    render() {
        const { step} = this.state;
        switch (step) {
            case 1:
                return (
                    <SignIn
                        nextStep={this.nextStep}
                        next2Step={this.next2Step}
                    />
                )
            case 2:
                return (
                    <SignUp
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        
                    />
                )
            case 3:
                return(
                    <LandingPage/>
                )
            
                
            default:
                console.log('Wrong Choice');
                    

        }
    }
}

export default App;