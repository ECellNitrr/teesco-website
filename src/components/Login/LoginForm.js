import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'

import { initialStateData } from './LoginForm.stories'


const classes = {
    form_input: {
        margin: "10px 0px"
    },
    login_button_text: {
        marginRight: '10px'
    }
}

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        // initial state comes from storybook else provide the default initial state
        this.state = props.stateData ? props.stateData : initialStateData
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: {
                ...this.state.error,
                [e.target.name]: null // if user start typing on an err field clear the error
            }
        })
    }

    render() {
        let email_err = ''
        let password_err = ''

        if (this.state.error) {
            const err = this.state.error

            // as backend provided errors as list of string for each field 
            // we can join then with a ampersand for the case of multiple errors per field
            email_err = err['email'] && err['email'].join(' & ')
            password_err = err['password'] && err['password'].join(' & ')
        }

        return (
            <Grid container direction='column' alignItems='center'>
                <Grid item style={classes.form_input}>
                    <TextField
                        id="login-form-email"
                        label='Email'
                        type='email'
                        name='email'
                        value={this.state.email}
                        disabled={this.state.loading}
                        onChange={this.inputChangeHandler}
                        error={email_err}
                        helperText={email_err}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="login-form-password"
                        label='Password'
                        type='password'
                        name='password'
                        disabled={this.state.loading}
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        error={password_err}
                        helperText={password_err}
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <Button
                        disabled={this.state.loading}
                        variant='contained'
                        style={classes.form_input}
                        color='primary'>
                        <span style={this.state.loading ? classes.login_button_text : {}}>Login</span>
                        {this.state.loading ? <CircularProgress size={20} /> : null}
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

