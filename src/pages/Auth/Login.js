import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUserHandler } from '../../actions/AuthActions'

import { Grid, Paper } from '@material-ui/core'

import LoginForm from '../../components/Login/LoginForm'


export class Login extends Component {
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
                        {this.props.token}
                        <h2>Welcome to teesco!</h2>
                        <LoginForm loginUserHandler={this.props.loginUserHandler} />
                    </Paper>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loginUserHandler
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
