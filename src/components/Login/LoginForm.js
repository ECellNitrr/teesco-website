import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaSpinner } from "react-icons/fa";
import { createStructuredSelector } from 'reselect';
//Action
import { loginAction } from '../../actions/User'
//Selectors
import { makeSelectLoading } from '../../selectors/User';
import { makeSelectLoginError } from '../../selectors/Alerts';
//Utility Function
import { emailValidator } from '../../utils/Validator';

const LoginForm = ({ loading, loginAction, error }) => {
  
  //State of inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //FrontEnd form validation error
  const [formError, setFormError] = useState({
    msg: "",
    type: ""
   });

  //Destructuring formData
  const { email, password } = formData;
  
  //Input onChange Handler
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  //Submit Handler
  const onSubmit = async (e) => {
    e.preventDefault();

    // //Validate user input and set error if validation fails and remove it after 3 secs
    // if(email.length < 1){
    //   setFormError({ msg: "This Field Cannot be Empty", type : "email" });
    //   setTimeout(() => setFormError({ msg: "", type: "" }), 3000);
    //   return;
    // }
    // if(!emailValidator(email)){
    //   setFormError({ msg: "Please Enter a valid email", type : "email" });
    //   setTimeout(() => setFormError({ msg: "", type: "" }), 3000);
    //   return;
    // }
    // if(password.length < 1){
    //   setFormError( { msg: "This Field Cannot be Empty", type : "password" } );
    //   setTimeout(() => setFormError({ msg: "", type: "" }), 3000);
    //   return;
    // }

    loginAction(email, password);
  };

  //Display in form errors
  const errorDisplay = (errMsg) => <span className="text-danger">{errMsg}</span>

  return (
    <div className="card">
      <div className="card-body">
        {
          error.map(err => console.log(err))
        }
        {error && error[0] && error[0].errorDict.detail && <div className="alert alert-danger" role="alert">
              {error[0].errorDict.detail}
          </div>}
        <form onSubmit={(e) => onSubmit(e)}>
          <h4 className="card-title text-center my-3">Teesco login</h4>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => onChange(e)}
              value={email}
              className="form-control"
              placeholder="wallstreet@example.com"
              // required
            />
            {formError.type ? (formError.type === "email" && errorDisplay(formError.msg)) : error && error[0] && error[0].errorDict.email && errorDisplay(error[0].errorDict.email)}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              onChange={(e) => onChange(e)}
              type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="bitcoin2021"
              // required
              minLength="8"
            />
            {formError.type ? (formError.type === "password" && errorDisplay(formError.msg)) : error && error[0] && error[0].errorDict.password && errorDisplay(error[0].errorDict.password)}
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary"
            >
              <span>Submit</span>
              <FaSpinner className={loading ? "ml-2 spinner" : "d-none"} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectLoginError()
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
