import React, { Component } from 'react';
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import logo from '../images/logo.jpg';
import Slider from '../Slider'
import { LockRounded } from "@material-ui/icons";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export class SignIn extends Component {
    constructor(props) {
        super(props)
        //state object
        this.state = {
            email: null,
            password: null,
        }
    }

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
            <div>
                <Grid container style={{ minHeight: '100vh', maxHeight: '100vh' }}>


                    <Grid container item
                        xs={12} sm={4}
                        alignItems="center"
                        direction="column"
                        justify="space-between"
                        style={{ padding: 10 }}
                    >
                        <div ></div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 400,
                            minWidth: 300
                        }}
                        >
                            <Grid container justify="center">
                                <img
                                    src={logo}
                                    width={100}
                                    height={90}
                                    alt="logo"
                                    stylr={{boxShadow:'none'}}

                                />

                            </Grid>
                            <br /> <br />
                            <TextField label="Email" margin="normal"

                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <AlternateEmailIcon />
                                    </InputAdornment>
                                }}
                                onChange={(event) => { this.setState({ email: event.target.value }) }}


                            />
                            <TextField label="Password" margin="normal" type="password"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <LockRounded />
                                    </InputAdornment>
                                }}
                                onChange={(event) => { this.setState({ password: event.target.value }) }}
                            />
                            <div style={{ height: 20 }} />
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.nextContinue}
                            >

                                Sign In
                            </Button>
                            <div style={{ height: 20 }} />
                            <Button variant="outlined" onClick={this.continue}>Don't have an Account? Sign Up</Button>

                        </div>

                        <div />

                    </Grid>

                    <Grid container item xs={12} sm={8}>
                    <Slider/>
                   </Grid>
                    
                    </Grid>
            </div>
        )
    }
}

export default SignIn
