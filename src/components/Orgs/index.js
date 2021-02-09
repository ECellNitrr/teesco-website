import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserOrgsHandler } from './actions'

export const Index = ({ fetchUserOrgsHandler }) => {
    useEffect(() => {
        fetchUserOrgsHandler()
    }, [])

    return (
        <div>
            orgs
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    fetchUserOrgsHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
