import React, { Component } from 'react'
// ui
import { Grid, Paper } from '@material-ui/core'
import LoginForm from '../../components/Login/LoginForm'


export default class Login extends Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    justify='center'
                    alignItems='center'
                    style={{
                        width: '100vw',
                        height: '100vh',
                    }}>
                    <Paper elevation={3} style={{ padding: '40px 50px' }} >
                        <LoginForm />
                    </Paper>
                </Grid>
            </div>
        )
    }
}

