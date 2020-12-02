import React, { Component } from 'react';
import './card-style.module.css';
import { Button} from '@material-ui/core';
import i1 from '../images/1.jpeg';
import HoldingHand from '../images/HoldingHand.jpg';
import { Redirect } from 'react-router';

class LandingPage extends Component {
    
   
    constructor(props) {
        super(props);
        //state object
        this.state = {
          step: 0
        };
      }

      changeStep(value){
          this.setState({
              step:value
          })
        
      }
      back =(e) =>{
        e.preventDefault();
        localStorage.removeItem("token");
        this.setState({
            step: 7
        })
    }
    render() {

        if(this.state.step===1)
        {
            return <Redirect push to="/letterhead/generate" />;
        }
        if(this.state.step===2)
        {
            return <Redirect push to="/letterhead/list" />;
        }
        if(this.state.step===3)
        {
            return <Redirect push to="/annexure/generate" />;
        }
        if(this.state.step===4)
        {
            return <Redirect push to="/annexure/list" />;
        }
        if(this.state.step===5)
        {
            return <Redirect push to="/invoice/generate" />;
        }
        if(this.state.step===6)
        {
            return <Redirect push to="/invoice/list" />;
        }
        if(this.state.step===7)
        {
            return <Redirect push to="/" />;
        }

        return (

            <div className="container-fluid d-flex justify-content-center" >

                <div class="container" >

                    <div style={{margin:'0',padding:'0'}}  ><img src={HoldingHand} style={{height:'30vh', width: '100%'}}></img></div>
                    <div><br/></div>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center shadow">
                            <div className="overflow">
                               <img src={i1} alt="Image" className="card-img-top" />
                            </div>  
                            <div className="card-body text-dark">
                                <h4 className="card-title">Letter Head</h4>
                                <p className="card-text text-secondary">
                                Generate a beautiful and customisable Letter Head as per your need. 
                                </p>
                              <button onClick={()=>this.changeStep(1)} className="btn btn-outline-success">Generate Letter Head </button>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center shadow">
                            <div className="overflow">
                               <img src={i1} alt="Image" className="card-img-top" />
                            </div>  
                            <div className="card-body text-dark">
                                <h4 className="card-title">Annexure</h4>
                                <p className="card-text text-secondary">
                                Generate a beautiful and customisable Annexure as per your need. 
                                </p>
                              <button onClick={()=>this.changeStep(3)} className="btn btn-outline-success">Generate Annexure </button>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card text-center shadow">
                            <div className="overflow">
                               <img src={i1} alt="Image" className="card-img-top" />
                            </div>  
                            <div className="card-body text-dark">
                                <h4 className="card-title">Invoice</h4>
                                <p className="card-text text-secondary">
                                Generate a beautiful and customisable Invoice as per your need. 
                                </p>
                              <button  onClick={()=>this.changeStep(5)} className="btn btn-outline-success">Generate Invoice</button>
                            </div>
                            </div>
                            
                        </div>
                    </div>

                    <br/>
                    <div className="row"style={{marginBottom: '6px'}}>
                    <div className="col-md-4">
                    <Button  style={{backgroundColor:"blue", width:"350px", WebkitTextFillColor: "white", margin:"auto"}} onClick={()=>this.changeStep(2)} >View all Letter Head</Button>
                    </div> 
                    <div className="col-md-4">
                    <Button  style={{backgroundColor:"rgb(3, 60, 80)", width:"350px", WebkitTextFillColor: "white", margin:"auto"}} onClick={()=>this.changeStep(4)} >View all Annexure</Button>
                    </div> 
                    <div className="col-md-4">
                    <Button  style={{backgroundColor:"green", width:"350px", WebkitTextFillColor: "white", margin:"auto"}} onClick={()=>this.changeStep(6)} >View all Invoice</Button>
                    </div>    
                    </div>
                </div>
                <div style={{marginTop:'10px'}}> 
                    <Button color="primary" variant="contained" onClick={this.back}>Log Out</Button>
                </div>
               

            </div>

        )
}
}
export default LandingPage;