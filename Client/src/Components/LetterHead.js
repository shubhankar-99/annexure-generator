import React, { Component } from "react";
import Letterhead from "./LetterHeadpdf";
import axios from "axios";
import * as C from "../Constant";

class Letter extends Component {
  state = {
    title: "",
    content: "",
    duration: "",
    postSubmitted: false,
    date: "",
    email: "",
    Name: "",
    college: "",
    image: "",
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  submitPost = (e) => {
    if (
      !this.state.date ||
      !this.state.Name ||
      !this.state.college ||
      !this.state.duration ||
      !this.state.email ||
      !this.state.title
    ) {
      alert("All fields are required!");
      e.preventDefault();
    } else {
      const data = {
        name: this.state.Name,
        college: this.state.college,
        date: this.state.date,
        title: this.state.title,
        duration: this.state.duration,
        email: this.state.email,
      };
      console.log(data);
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      // e.preventDefault();
      axios.post(C.Link.baseUrl.LetterHeadPost, data, config).then(
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
  };

  render() {
    return (
      <>
        {!this.state.postSubmitted ? (
          <div className="container">
            <div className="jumbotron mt-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="well well-sm">
                    <form className="form-horizontal" method="post">
                      <fieldset>
                        <legend className="text-center header">
                          Fill the Details
                        </legend>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("date")}
                            name="date"
                            type="date"
                            placeholder="Date"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("Name")}
                            name="text"
                            type="text"
                            placeholder="Name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("email")}
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("college")}
                            name="college"
                            type="text"
                            placeholder="College"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("title")}
                            name="title"
                            type="text"
                            placeholder="Position"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("duration")}
                            name="duration"
                            type="text"
                            placeholder="Duration"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <button
                            type="button"
                            onClick={this.submitPost}
                            className="btn btn-primary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          < Letterhead
            date={this.state.date}
            Name={this.state.Name}
            email={this.state.email}
            college={this.state.college}
            title={this.state.title}
            duration={this.state.duration}
          />
        )}
      </>
    );
  }
}

export default Letter;
