import React, { Component } from 'react';
import './card-style.css';
import i1 from '../images/1.jpeg';
import i2 from '../images/2.jpg';
import i3 from '../images/3.jpg';
import HoldingHand from '../images/HoldingHand.jpg';


class LandingPage extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    nextContinue = (e) => {
        e.preventDefault();
        this.props.next2Step();
    }
    render() {
        return (



            <div className="container-fluid d-flex justify-content-center" >

                <div class="container" >

                    <div style={{margin:'0',padding:'0'}}  ><img src={HoldingHand} style={{height:'30vh', width: '100%'}}></img></div>

                    
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
                              <button onClick={this.continue} className="btn btn-outline-success">Generate Letter Head </button>
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
                              <button onClick={this.nextContinue} className="btn btn-outline-success">Generate Annexure </button>
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
                              <button className="btn btn-outline-success">Generate Invoice</button>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;


