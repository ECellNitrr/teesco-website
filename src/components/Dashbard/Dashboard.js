import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

export const Dashboard = (props) => {
    const params = useParams()
    console.log(params)

    return (
        <div>
            Dashboard
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
