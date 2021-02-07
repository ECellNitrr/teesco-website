import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    getUsername,
    getPassword,
    getLoading,
    updateInputFieldHandler,
    loginHandler,
} from './actions'

import { FaSpinner } from 'react-icons/fa'

const LoginForm = ({ username, password, loading, updateInputFieldHandler, loginHandler }) => {
    return (
        <div className="card">
            <div className="card-body">
                <form>
                    <h4 className="card-title text-center my-3">Teesco login</h4>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text"
                            onChange={e => updateInputFieldHandler('username', e.target.value)}
                            value={username}
                            className="form-control"
                            placeholder="wallstreet@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            onChange={e => updateInputFieldHandler('password', e.target.value)}
                            type="text" value={password}
                            className="form-control"
                            placeholder="bitcoin2021" />
                    </div>
                    <FaSpinner className='spinner' />
                    <div className="mt-3 d-flex justify-content-center">
                        <button
                            disabled={loading}
                            onClick={e => loginHandler(e)}
                            className="btn btn-primary">
                            <span>Submit</span>
                            <FaSpinner className={loading ? 'ml-2 spinner' : 'd-none'} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    username: getUsername(state),
    password: getPassword(state),
    loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        updateInputFieldHandler,
        loginHandler
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);