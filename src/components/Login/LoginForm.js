import React, { Component } from "react";
// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../../actions/AuthActions'
// ui
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

// styles
const classes = {
  form_input: {
    margin: "10px 0px",
  },
  login_button_text: {
    marginRight: "10px",
  },
};

// initial state
const initialStateData = {
  email: '',
  password: '',
  loading: false
}

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    // initial state comes from storybook else provide the default initial state
    this.state = props.stateData ? props.stateData : initialStateData;
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: {
        ...this.state.error,
        [e.target.name]: null, // if user start typing on an err field clear the error
      },
    });
  };

  userLoginHandler = () => {
    this.props.loginUser(this.state.email, this.state.password)
  }


  render() {
    let email_err = "";
    let password_err = "";

    if (this.props.error) {
      email_err = this.props.error['email'];
      password_err = this.props.error['password'];
    }

    return (
      <Grid container direction="column" alignItems="center">
        {this.state.edgeCaseErr ? (
          <Alert severity="error">{this.state.edgeCaseErr}</Alert>
        ) : null}

        <Grid item style={classes.form_input}>
          <TextField
            id="login-form-email"
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            disabled={this.state.loading}
            onChange={this.inputChangeHandler}
            error={email_err ? true : false}
            helperText={email_err}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            id="login-form-password"
            label="Password"
            type="password"
            name="password"
            disabled={this.state.loading}
            value={this.state.password}
            onChange={this.inputChangeHandler}
            error={password_err ? true : false}
            helperText={password_err}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button
            disabled={this.state.loading}
            variant="contained"
            style={classes.form_input}
            color="primary"
            onClick={this.userLoginHandler}
          >
            <span style={this.state.loading ? classes.login_button_text : {}}>
              Login
            </span>
            {this.state.loading ? <CircularProgress size={20} /> : null}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
