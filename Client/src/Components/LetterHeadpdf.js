import React, { Component } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styles from "./pdf.module.css";
import sign from "../images/Sign.jpeg";

class Letterhead extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.printDocument}>Download PDF</button>
        <br />
        <div id="divToPrint" className={styles.Post}>
          <div className="pdf">
            
            <p>Date: {this.props.date}</p>
            <p>{this.props.Name}</p>
            <p>{this.props.college}</p>
            <p>{this.props.Email}</p>
            <p>Dear {this.props.Name},</p>
            
            
            <br />

            <p>
              We are pleased to inform you that you have been appointed for the
              position of <b>{this.props.position}</b> at
              <b>Hand Holding Solution</b>.
            </p>
            <p>
              At Hand Holding Solution, we try to help our customer by providing
              digital solution and services that help the brands to profess
              their vision to the world. We expect that you help us to continue
              this legacy.
            </p>
            <p>
              Your date of joining is {this.props.date} and your appointment
              will be governed by the terms and condition presented in the
              <b>Annexure</b>. The duration of internship will be
              {this.props.duration}.
            </p>
            <p>
              We hope that you will be an asset to our company and we are
              eagerly looking forward for you to be a part of our team. Please
              do not hesitate to mail us for any information you may need. Also
              please sign the duplicate of this offer as your acceptance and
              forward the same to us.
            </p>
            <br />
            <p>Sincerely,</p>

            <img className={styles.sign} src={sign} alt="sign" />
            <h6>
              <b>
                Pranay Ranjan
                <br />
                Co-founder,
                <br />
                Hand Holding Solution, INDIA
                <br />
                pranay@handholdingsolution.com
              </b>
            </h6>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Letterhead;
