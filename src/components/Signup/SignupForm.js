import React, { Fragment, Component } from 'react';
import { Dialog, Grid, Container, TextField, Box, Button, Typography, CircularProgress, Checkbox, Link, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export default class SignupForm extends Component{
    constructor(props) {
        super(props)
        this.state = props.stateData ;
        this.state.showPassword=false;
    }

    classes={
        img:{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        }
    }

    inputChangeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });

        if(event.target.name==="checkedB"){
            this.setState({
                "checkedB":!this.state.checkedB
            });
        }
    }

    showPasswordClick=()=>{
        this.setState({
            showPassword:!this.state.showPassword
        });
    }
    
    render(){
        let error=null;
        let emailError=null;
        
        let confirmPasswordValidationError=null;
        let passwordValidationError=null;
        let phNoValidationError=null;
        let emailValidationError=null;

        if(this.state.error){
            error=this.state.error;

            if(this.state.email===""){
                emailError=this.state.error.nullCase
            }
            else{
                if(this.state.error.specialCase){
                    emailError=this.state.error.specialCase;
                }
                else{
                    emailError=null;
                }
            }
        }

        //Email Validation
        let mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if((this.state.email===null)||(this.state.email==="")||(this.state.email.match(mailFormat))){
            emailValidationError=emailError;
        }
        else{
            emailValidationError="Enter a valid email address.";
        }

        //Phone Number Validation
        let phoneNumberFormat= /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if((this.state.phoneNumber==null)||(this.state.phoneNumber==="")){
            if(error!==null){
                phNoValidationError=error.nullCase;
            }
            else{
                phNoValidationError=null; 
            }
        }
        else{
            if(!this.state.phoneNumber.match(phoneNumberFormat)){
                phNoValidationError="Enter valid Phone Number.";
            }
            else{
                phNoValidationError=null;
            }
        }

        //Password Validation
        let passwordFormat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if((this.state.password===null)||(this.state.password==="")){
            if(error!==null){
                passwordValidationError=error.nullCase;
            }
            else{
                passwordValidationError=null;
            }
        }
        else{
            if(!this.state.password.match(passwordFormat)){
                passwordValidationError="Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
            }
            else{
                passwordValidationError=null;
            }
        }

        //Confirm Password
        if((this.state.confirmPassword===null)||(this.state.confirmPassword==="")){
            if(error!=null){
                confirmPasswordValidationError=error.nullCase;
            }
            else{
                confirmPasswordValidationError=null;
            }
        }
        else{
            if(this.state.confirmPassword!==this.state.password){
                confirmPasswordValidationError="Passwords didn't match"
            }
            else{
                confirmPasswordValidationError=null;
            }
        }

        return <Fragment>
            <Dialog open={true} maxWidth >
                <Container style={{ width: '55vw', height:'auto', paddingTop:'30px', paddingBottom:'30px' }}>
                    
                    <Box mx={8} my={3}>
                        <Grid container direction="column" spacing={3} >
                            <Grid item xs={12}>
                                <Grid container justify="center" alignItems="center" >
                                    <Box mb={3}>
                                        <Typography variant="h4">
                                            Welcome
                                        </Typography>
                                    </Box>
                                </Grid>
    
                                <Grid container direction="row" justify="space-between">
                                    <Grid item xs={5}>
                                        <TextField
                                            fullWidth 
                                            variant="outlined"
                                            label="First Name*" 
                                            name="firstName"
                                            error={(this.state.firstName==="" && error!==null) ? true : false}
                                            helperText={(this.state.firstName==="" && error!==null) ? error.nullCase : null}
                                            value={this.state.firstName} 
                                            onChange={this.inputChangeHandler}/>
                                    </Grid>       
    
                                    <Grid item xs={5}>
                                        <TextField 
                                            fullWidth
                                            variant="outlined"
                                            name="lastName"
                                            onChange={this.inputChangeHandler} 
                                            error={(this.state.lastName==="" && error!==null) ? true : false}
                                            helperText={(this.state.lastName==="" && error!==null) ? error.nullCase : null}
                                            value={this.state.lastName}
                                            label="Last Name*" />
                                    </Grid>       
                                </Grid>
                            </Grid>
    
                            <Grid item xs={12}>
                                
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    error={(emailValidationError!==null) ? true: false}
                                    helperText={emailValidationError}
                                    onChange={this.inputChangeHandler} 
                                    autoComplete="false"
                                    value={this.state.email}
                                    label="Email*" />
                            </Grid>
    
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    name="password"
                                    onChange={this.inputChangeHandler} 
                                    value={this.state.password}
                                    error={(passwordValidationError!==null) ? true : false}
                                    helperText={(passwordValidationError!==null) ? passwordValidationError : null}
                                    type={this.state.showPassword ? "text" : "password"} 
                                    label="Password*" 
                                    InputProps={{
                                        endAdornment:<InputAdornment position="end">
                                            <IconButton onClick={this.showPasswordClick} edge="end">
                                                {this.state.showPassword ? <VisibilityOff/> : <Visibility/> }
                                            </IconButton>
                                        </InputAdornment>
                                    }} />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    name="confirmPassword"
                                    onChange={this.inputChangeHandler} 
                                    value={this.state.confirmPassword}
                                    error={(confirmPasswordValidationError!==null) ? true : false}
                                    helperText={(confirmPasswordValidationError!==null) ? confirmPasswordValidationError : null}
                                    type={this.state.showPassword ? "text" : "password"} 
                                    label="Confirm Password*" />
                            </Grid>
    
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    value={this.state.phoneNumber}
                                    type="tel" 
                                    error={(phNoValidationError!==null) ? true : false}
                                    helperText={(phNoValidationError!==null) ? phNoValidationError : null}
                                    name="phoneNumber"
                                    onChange={this.inputChangeHandler} 
                                    label="Phone Number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Typography>+91</Typography>
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Grid>
    
                            <Grid item xs={12}>
                                
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    name="institution"
                                    type="text"
                                    onChange={this.inputChangeHandler} 
                                    autoComplete="false"
                                    value={this.state.institution}
                                    label="Institution / Working at" />
                            </Grid>

                            <Grid item xs={12} direction="row">
                                <Typography variant="subtitle2">
                                    <Checkbox
                                        checked={this.state.checkedB}
                                        onChange={this.inputChangeHandler}
                                        name="checkedB"
                                        color="primary"/>
                                    I agree to <Link>terms and conditions</Link> of Teesco and E-Cell NITRR Open Source
                                </Typography>
                            </Grid>
    
                            <Grid item xs={12}>
                                <Grid container direction="row" justify="flex-end" alignItems="center">
                                    <Button 
                                        variant="contained" 
                                        color="primary"
                                        disabled={(this.state.loading)||(!this.state.checkedB)} 
                                    >
                                        <span>Sign Up</span>
                                        {this.state.loading ? <span style={{ paddingLeft:'15px', paddingTop:'5px', paddingBottom:'0px'}}><CircularProgress color="white" size={15} /></span> : null}
                                    </Button>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    
                    </Box>
                    
                </Container>
            </Dialog>
        </Fragment>
    }
}
