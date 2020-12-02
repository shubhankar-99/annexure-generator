import React, { Component } from "react";
import "./InvoicePdf.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export class InvoicePdf extends Component {
  printDocument() {
    const input = document.getElementById("printInvoice");
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
        <div
          class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding"
          id="printInvoice"
        >
          <div class="card">
            <div class="card-header p-4">
              <a
                class="pt-2 d-inline-block"
                href="index.html"
                data-abc="true"
              ></a>
              <div class="float-right">
                <h3 class="mb-0">Invoice {this.props.invoiceNo}</h3>
                Date: {this.props.invoiceDate}
              </div>
            </div>
            <div class="card-body">
              <div class="row mb-4">
                <div class="col-sm-6">
                  <h5 class="mb-3">From:</h5>
                  <h3 class="text-dark mb-1">{this.props.senderName}</h3>
                  {/* <div>29, Singla Street</div> */}
                  <div>{this.props.senderCity}</div>
                  <div><b>Email: </b> {this.props.senderName}</div>
                  <div><b>Phone: </b> {this.props.senderMobileNumber}</div>
                </div>
                <div class="col-sm-6 ">
                  <h5 class="mb-3">To:</h5>
                  <h3 class="text-dark mb-1">{this.props.receiverName}</h3>
                  {/* <div>478, Nai Sadak</div> */}
                  <div>{this.props.receiverCity}</div>
                  <div><b>Email: </b> {this.props.receiverEmail}</div>
                  <div><b>Phone: </b> {this.props.receiverMobileNumber}</div>
                </div>
              </div>
              <div class="table-responsive-sm">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="center">#</th>
                      <th>Item</th>
                      {/* <th>Description</th> */}
                      <th class="right">Price</th>
                      <th class="center">Qty</th>
                      <th class="right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="center">1</td>
                      <td class="left strong">{this.props.itemName}</td>
                      {/* <td class="left">Iphone 10X with headphone</td> */}
                      <td class="right">Rs. {this.props.itemRate}</td>
                      <td class="center">{this.props.itemQuantity}</td>
                      <td class="right">
                        Rs.{" "}
                        {parseInt(this.props.itemRate) *
                          parseInt(this.props.itemQuantity)}
                      </td>
                    </tr>
                    {/* <tr>
                             <td class="center"></td>
                             <td class="left"></td>
                             <td class="left"></td>
                             <td class="right"></td>
                             <td class="center"></td>
                             <td class="right"></td>
                         </tr>
                         <tr>
                             <td class="center">3</td>
                             <td class="left">Samsung 4C</td>
                             <td class="left">Samsung 4C with extended warranty</td>
                             <td class="right">$800</td>
                             <td class="center">10</td>
                             <td class="right">$8000</td>
                         </tr>
                         <tr>
                             <td class="center">4</td>
                             <td class="left">Google Pixel</td>
                             <td class="left">Google prime with Amazon prime membership</td>
                             <td class="right">$500</td>
                             <td class="center">10</td>
                             <td class="right">$5000</td>
                         </tr> */}
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-lg-4 col-sm-5"></div>
                <div class="col-lg-4 col-sm-5 ml-auto">
                  <table class="table table-clear">
                    <tbody>
                      <tr>
                        <td class="left">
                          <strong class="text-dark">Subtotal</strong>
                        </td>
                        <td class="right">
                          Rs.
                          {parseInt(this.props.itemRate) *
                            parseInt(this.props.itemQuantity)}
                        </td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong class="text-dark">
                            Discount ({this.props.discount}%)
                          </strong>
                        </td>
                        <td class="right">
                          Rs.{" "}
                          {((parseInt(this.props.itemRate) *
                            parseInt(this.props.itemQuantity) *
                            parseInt(this.props.discount)) /
                            100).toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong class="text-dark">
                            Tax ({this.props.tax}%)
                          </strong>
                        </td>
                        <td class="right">
                          Rs.{" "}
                          {((((parseInt(this.props.itemRate) *
                            parseInt(this.props.itemQuantity)) -
                            ((parseInt(this.props.itemRate) *
                              parseInt(this.props.itemQuantity)) *
                              parseInt(this.props.discount)) /
                              100) *
                              parseInt(this.props.tax)) /
                            100).toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong class="text-dark">Total</strong>{" "}
                        </td>
                        <td class="right">
                          <strong class="text-dark">
                            Rs.{" "}
                            {(parseInt(this.props.itemRate) *
                              parseInt(this.props.itemQuantity) -
                              (parseInt(this.props.itemRate) *
                                parseInt(this.props.itemQuantity) *
                                parseInt(this.props.discount)) /
                                100 +
                              (parseInt(this.props.itemRate) *
                                parseInt(this.props.itemQuantity) -
                                ((parseInt(this.props.itemRate) *
                                  parseInt(this.props.itemQuantity) *
                                  parseInt(this.props.discount)) /
                                  100) *
                                  parseInt(this.props.tax)) /
                                100).toFixed(2)}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card-footer bg-white">
              <p class="mb-0">
                This is a digitally generated bill and does not require a
                signature
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvoicePdf;
