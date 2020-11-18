import React, { Component } from 'react';
import Card from './Card';
import i1 from '../images/1.jpeg';
import i2 from '../images/2.jpg';
import i3 from '../images/3.jpg';
import HoldingHand from '../images/HoldingHand.jpg';


class LandingPage extends Component {


    render() {
        return (



            <div className="container-fluid d-flex justify-content-center" >

                <div class="container" >

                    <div style={{margin:'0',padding:'0'}}  ><img src={HoldingHand} style={{height:'30vh', width: '100%'}}></img></div>
                    <div className="row">


                        <div className="col-md-4">
                            <Card imgsrc={i1} title="Letter Head" button="Generate Letter Head" />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={i1} title="Annexure" button="Generate Annexure" />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={i1} title="Invoice" button="Generate Invoice" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;


