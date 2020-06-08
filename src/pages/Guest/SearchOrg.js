import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/AuthActions'
import { bindActionCreators } from 'redux'

export class SearchOrg extends Component {
    render() {
        return (
            <div>
                search org page
                <button onClick={this.props.logoutUser}>logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
    logoutUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchOrg)
