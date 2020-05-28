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
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    showPasswordClick=()=>{
        this.setState({
            showPassword:!this.state.showPassword
        });
    }
    
    render(){
        let error=null;
        let emailError=null;
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

        return <Fragment>
            <Dialog open={true} maxWidth >
                <Container style={{ width: '45vw', height:'auto', paddingTop:'30px', paddingBottom:'30px' }}>
                    
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
                                            label="First Name" 
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
                                            label="Last Name" />
                                    </Grid>       
                                </Grid>
                            </Grid>
    
                            <Grid item xs={12}>
                                
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    error={(emailError!==null) ? true: false}
                                    helperText={emailError}
                                    onChange={this.inputChangeHandler} 
                                    value={this.state.email}
                                    label="Email" />
                            </Grid>
    
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    name="password"
                                    onChange={this.inputChangeHandler} 
                                    value={this.state.password}
                                    error={(this.state.password==="" && error!==null) ? true : false}
                                    helperText={(this.state.password==="" && error!==null) ? error.nullCase : null}
                                    type={this.state.showPassword ? "text" : "password"} 
                                    label="Password" 
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
                                    name="password"
                                    onChange={this.inputChangeHandler} 
                                    value={this.state.password}
                                    error={(this.state.password==="" && error!==null) ? true : false}
                                    helperText={(this.state.password==="" && error!==null) ? error.nullCase : null}
                                    type={this.state.showPassword ? "text" : "password"} 
                                    label="Confirm Password" />
                            </Grid>
    
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    variant="outlined"
                                    value={this.state.phoneNumber}
                                    type="tel" 
                                    error={(this.state.phoneNumber==="" && error!==null) ? true : false}
                                    helperText={(this.state.phoneNumber==="" && error!==null) ? error.nullCase : null}
                                    name="phoneNumber"
                                    onChange={this.inputChangeHandler} 
                                    label="Phone Number" />
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
                                        disabled={this.state.loading} 
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