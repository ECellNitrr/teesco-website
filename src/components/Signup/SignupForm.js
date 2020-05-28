import React, { Fragment, Component } from 'react';
import { Dialog, Grid, Container, TextField, Box, Button, Typography, CircularProgress } from '@material-ui/core';

export default class SignupForm extends Component{
    constructor(props) {
        super(props)
        this.state = props.stateData ;
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
        })
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
                <Container style={{ width: '66.66vw', height:'auto', paddingTop:'30px', paddingBottom:'30px' }}>
                <Grid container direction="row" justify="flex-start" alignItems="stretch" >
                    <Grid item xs={6}>
                        <Box mx={5}>
                            <Grid container direction="column" spacing={3} >
                                <Grid item xs={12}>
                                    <Grid container direction="row" justify="center" alignItems="center" >
                                        <Box my={2}>
                                            <Typography variant="h4">
                                                Welcome
                                            </Typography>
                                        </Box>
                                    </Grid>
        
                                    <Grid container direction="row" justify="space-between">
                                        <Grid item xs={5}>
                                            <TextField
                                                fullWidth 
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
                                        name="password"
                                        onChange={this.inputChangeHandler} 
                                        value={this.state.password}
                                        error={(this.state.password==="" && error!==null) ? true : false}
                                        helperText={(this.state.password==="" && error!==null) ? error.nullCase : null}
                                        type="password" 
                                        label="Password" />
                                </Grid>
        
                                <Grid item xs={12}>
                                    <TextField 
                                        fullWidth 
                                        value={this.state.phoneNumber}
                                        type="tel" 
                                        error={(this.state.phoneNumber==="" && error!==null) ? true : false}
                                        helperText={(this.state.phoneNumber==="" && error!==null) ? error.nullCase : null}
                                        name="phoneNumber"
                                        onChange={this.inputChangeHandler} 
                                        label="Phone Number" />
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
                    </Grid>
                    
                    <Grid container xs={6} alignItems="flex-end">
                        <img alt="complex" src="https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-team-work-brainstorming-vector-presentation-of-the-project-innovation-idea-discussion-png-image_1886020.jpg" style={this.classes.img}/>
                    </Grid>
                    
                </Grid>
        
                </Container>
            </Dialog>
        </Fragment>
    }
}