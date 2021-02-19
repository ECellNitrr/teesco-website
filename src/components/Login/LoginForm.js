import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLoading, loginHandler } from "./actions";
import { FaSpinner } from "react-icons/fa";

const LoginForm = ({ loading, loginHandler }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    
    loginHandler(email, password);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={(e) => onSubmit(e)}>
          <h4 className="card-title text-center my-3">Teesco login</h4>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              onChange={(e) => onChange(e)}
              value={email}
              className="form-control"
              placeholder="wallstreet@example.com"
              required
            />
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
            />
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginHandler,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
