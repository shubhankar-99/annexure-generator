import React, { Component } from 'react';
import * as C from '../Constant';
import axios from 'axios';
import InvoicePdf from './InvoicePdf';

class Invoice extends Component { 
    state={
        postSubmitted: false,
        invoiceNo: "",
        invoiceDate: "",
        DueDate: "",
        itemName: "",
        itemQuantity: "",
        itemRate: "",
        senderName: "",
        senderEmail: "",
        senderMobileNumber: "",
        senderCity: "",
        receiverName: "",
        receiverEmail: "",
        receiverMobileNumber: "",
        receiverCity: "",
        discount: 0,
        tax: 0

    }
    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.invoiceNo || !this.state.invoiceDate || !this.state.DueDate || !this.state.itemName || !this.state.itemQuantity || !this.state.itemRate || !this.state.senderName
            || !this.state.senderEmail || !this.state.senderMobileNumber || !this.state.senderCity || !this.state.receiverName || !this.state.receiverEmail || !this.state.receiverMobileNumber || !this.state.receiverCity){
            alert('All fields are required!');
          
            e.preventDefault();
        }else{
            

            const data={
                invoiceNo: this.state.invoiceNo,
                invoiceDate: this.state.invoiceDate,
                DueDate: this.state.DueDate,
                itemName: this.state.itemName,
                itemQuantity: this.state.itemQuantity,
                itemRate: this.state.itemRate,
                senderName: this.state.senderName,
                senderEmail: this.state.senderEmail,
                senderMobileNumber: this.state.senderMobileNumber,
                senderCity: this.state.senderCity,
                receiverName: this.state.receiverName,
                receiverEmail: this.state.receiverEmail,
                receiverMobileNumber: this.state.receiverMobileNumber,
                receiverCity: this.state.receiverCity,
                tax: this.state.tax,
                discount: this.state.discount
                
        
            }

            let config = {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              };

              axios.post(C.Link.baseUrl.InvoicePost, data, config).then(
                (response) => {
                  this.setState({
                    postSubmitted: true,
                  });
        
                  alert("Successful");
                },
                (error) => {
                  alert("Something Went Wrong");
                }
              );
        } 
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Fill the Details</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('invoiceNo')} name="text" type="text" placeholder="Name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon">Invoice Date</i></span>
                                                    <input onChange={this.onChange('invoiceDate')} name="Invoicedate" type="date" placeholder="Invoice Date" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon">Due Date</i></span>
                                                    <input onChange={this.onChange('DueDate')} name="Duedate" type="date" placeholder="Due Date" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('itemName')} name="text" type="text" placeholder="Item Name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('itemQuantity')} name="item Quantity" type="number" placeholder="Item Quantity" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('itemRate')} name="item Rate" type="text" placeholder="Item Rate" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('senderName')} name="sender Name" type="text" placeholder="Sender Name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('senderEmail')} name="sender Email" type="email" placeholder=" SenderEmail" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('senderMobileNumber')} name="sender Mobile Number" type="number" placeholder="Sender Mobile Number" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('senderCity')} name="sender City" type="text" placeholder="Sender City" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('receiverName')} name="receiver Name" type="text" placeholder="Receiver Name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('receiverEmail')} name="receiver Email" type="email" placeholder=" Receiver Email" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('receiverMobileNumber')} name="receiver Mobile Number" type="number" placeholder="Receiver Mobile Number" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('receiverCity')} name="receiver City" type="text" placeholder="Receiver City" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('discount')} name="discount" type="text" placeholder="Discount (%)" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('tax')} name="Tax" type="text" placeholder="Tax (%)" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                       <InvoicePdf 
                        invoiceNo ={ this.state.invoiceNo} 
                        invoiceDate = {this.state.invoiceDate}
                        DueDate = {this.state.DueDate}
                        itemName = {this.state.itemName}
                        itemQuantity = { this.state.itemQuantity}
                        itemRate = {this.state.itemRate}
                        senderName = {this.state.senderName}
                        senderEmail= {this.state.senderEmail}
                        senderMobileNumber= {this.state.senderMobileNumber}
                        senderCity = {this.state.senderCity}
                        receiverName ={this.state.receiverName}
                        receiverEmail = {this.state.receiverEmail}
                        receiverMobileNumber = {this.state.receiverMobileNumber}
                        receiverCity = {this.state.receiverCity}
                        tax = {this.state.tax}
                        discount = {this.state.discount}
                         />
                        )
                }
            </>
        );
    }
}

export default Invoice;