import React, { Component } from 'react';
import Annex from './AnnexurePDF';
class Annexure extends Component{
    state={
        name:'',
        duration: '',
        postSubmitted: false,
        date: '',
        position:'',
        stipend:'',
        place: 'Work From Home',

    }
    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.name || !this.state.duration || !this.state.date|| !this.state.position|| !this.state.stipend|| !this.state.place){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
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
                                                    <input onChange={this.onChange('date')} name="date" type="date" placeholder="Date" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('name')} name="text" type="text" placeholder="Name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('duration')} name="duration" type="duration" placeholder="Duration" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('position')} name="position" type="text" placeholder="Position" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('stipend')} name="stipend" type="text" placeholder="Stipend" className="form-control" />
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
                        <Annex  date = {this.state.date} name ={this.state.name} stipend={this.state.stipend} place={this.state.place} position={this.state.position} duration={this.state.duration} />
                        )
                }
            </>
        );
    }
}

export default Annexure;