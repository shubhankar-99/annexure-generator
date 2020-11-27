import React, { Component } from "react";
import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import logo from "../images/logo.jpg";
import Slider from "../Slider";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import LocationCityIcon from "@material-ui/icons/LocationCity";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    //state object
    this.state = {
      name: null,
      email: null,
      password: null,
      city: null,
      pinCode: 0,
    };
  }

  continue = (e) => {
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <Grid container style={{ minHeight: "100vh", maxHeight: "100vh" }}>
          <Grid
            container
            item
            xs={12}
            sm={4}
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 10 }}
          >
            <div />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                minWidth: 300,
              }}
            >
              <Grid container justify="center">
                <img src={logo} width={100} height={80} alt="logo" />
              </Grid>
              <br /> <br />
              <TextField
                label="Name"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
              />
              <TextField
                label="Email"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <TextField
                label="Password"
                margin="normal"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
              <TextField
                label="City"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  this.setState({ city: event.target.value });
                }}
              />
              <TextField
                label="Pincode"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  this.setState({ pinCode: event.target.value });
                }}
              />
              <div style={{ height: 20 }} />
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Sign Up
              </Button>
              <div style={{ height: 20 }} />
              <Button variant="outlined" onClick={this.back}>
                Already have an Account? Sign In
              </Button>
            </div>

            <div />
          </Grid>

          <Grid container item xs={12} sm={8}>
            <Slider />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignUp;
