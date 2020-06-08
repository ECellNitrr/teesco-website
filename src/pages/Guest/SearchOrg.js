import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/AuthActions'
import { bindActionCreators } from 'redux'
import ApiClient from '../../utils/ApiClient'

export class SearchOrg extends Component {
    state = {}

    componentDidMount() {
        ApiClient().get('/core/check_auth/')
            .then(response => {
                this.setState(response.data)
            })
            .catch(errObj => {
                this.setState(errObj.response.data)
            })
    }


    render() {
        return (
            <div>
                <div>search org page</div>
                <div>{this.state['detail']}</div>
                <div>
                    <button onClick={this.props.logoutUser}>logout</button>
                </div>
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
