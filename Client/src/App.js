import React from "react";
import SignIn from "./Components/SignIn";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {PrivateRoute} from "./Components/PrivateRoute"
import {LoginPrivateRoute} from "./Components/LoginPrivateRoute"
import Letter from "./Components/LetterHead";
import Annexure from "./Components/Annexure";
import PaginationTableComponent from "./Components/GeneratedList";
import PaginationTableComponent1 from "./Components/Generateannex";
import PaginationTableComponent2 from "./Components/Generateinvoice";
import Invoice from "./Components/Invoice";



function App()
{
  return(
    <div className="App">
      <Router>
        <Switch>
          <LoginPrivateRoute exact path="/" component={SignIn}/>
          <PrivateRoute path="/landingpage" component={LandingPage}/>
          <PrivateRoute path="/letterhead/generate" component={Letter} />
          <PrivateRoute path="/letterhead/list" component={PaginationTableComponent} />
          <PrivateRoute path="/annexure/generate" component={Annexure}/>
          <PrivateRoute path="/annexure/list"  component={PaginationTableComponent1} />
          <PrivateRoute path="/invoice/generate"  component={Invoice}  />
          <PrivateRoute path="/invoice/list"  component={PaginationTableComponent2}  />


        </Switch>
      </Router>
    </div>
  )
}

export default App;
