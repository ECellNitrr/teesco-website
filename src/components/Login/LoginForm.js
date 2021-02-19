import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLoading, loginHandler, getError } from "./actions";
import { FaSpinner } from "react-icons/fa";
import { emailValidator } from '../../utils/Validator'


const LoginForm = ({ loading, loginHandler, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    //Validate User Input
    if(email.length < 1){
      setFormError({ msg: "This Field Cannot be Empty", type : "email" });
      setTimeout(() => setFormError({ msg: "", type: "" }), 3000);
      return;
    }
    if(!emailValidator(email)){
      setFormError({ msg: "Please Enter a valid email", type : "email" });
      setTimeout(() => setFormError({ msg: "", type: "" }), 3000);
      return;
    }
    if(password.length < 1){
      setFormError( { msg: "This Field Cannot be Empty", type : "password" } );
      setTimeout(() => setFormError({ msg: "", type: "" }), 3000);
      return;
    }
    loginHandler(email, password);
  };

  const errorDisplay = (errMsg) => <span className="text-danger">{errMsg}</span>
   
  return (
    <div className="card">
      <div className="card-body">
        {error && error.errorDict.detail && <div className="alert alert-danger" role="alert">
              {error.errorDict.detail}
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
              required
            />
            {formError.type ? (formError.type === "email" && errorDisplay(formError.msg)) : error && error.errorDict.email && errorDisplay(error.errorDict.email)}
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
              required
              minLength="8"
            />
            {formError.type ? (formError.type === "password" && errorDisplay(formError.msg)) : error && error.errorDict.password && errorDisplay(error.errorDict.password)}
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


const mapStateToProps = (state) => ({
  loading: getLoading(state),
  error: getError(state)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginHandler,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
