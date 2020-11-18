import React from 'react';
import Pdf from "react-to-pdf";
import './pdf.css';
import sign from '../images/Sign.jpeg';

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <div className="pdf">
        <h6><br/><br/><br/><br/><br/>Date: {props.date}</h6>
        <h5>{props.Name}</h5>  
        <h6>{props.college}</h6>
        <h6>{props.Email}</h6>
        <h6>Dear {props.Name},</h6>
        <p>We are pleased to inform you that you have been appointed for the position of <b>{props.title}</b> at <b>Hand Holding Solution</b>.  </p>
        <p>At Hand Holding Solution, we try to help our customer by providing digital solution and services that help the brands to profess their vision to the world. We expect that you help us to continue this legacy.</p>
        <p>Your date of joining is {props.date} and your appointment will be governed by the terms and condition presented in the <b>Annexure</b>. The duration of internship will be {props.duration}.</p>
        <p>We hope that you will be an asset to our company and we are eagerly looking forward for you to be a part of our team. Please do not hesitate to mail us for any information you may need. Also please sign the duplicate of this offer as your acceptance and forward the same to us.</p>

         <h6>Sincerely,</h6>
         
         <img className="sign" src={sign} alt="sign" />
         <h6><b>Pranay Ranjan<br/>
             Co-founder,<br/>
             Hand Holding Solution, INDIA<br/>
             pranay@handholdingsolution.com</b></h6>
       </div>
  
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;
