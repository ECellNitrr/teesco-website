import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { loginUser } from '../../actions/LoginActions'

export default function LoginForm() {
    return (
        <div>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
            <button>Submit</button>
        </div>
    )
}
