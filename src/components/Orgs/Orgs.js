import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserOrganisationsAction } from '../../actions/User'

export const Orgs = ({ getUserOrganisationsAction }) => {
    useEffect(() => {
        getUserOrganisationsAction()
    }, [getUserOrganisationsAction])

    return (
        <div>
            fetching the orgs which user was a part of 
            loading will go here
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    getUserOrganisationsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Orgs)
