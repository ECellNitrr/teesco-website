import React from 'react'
import { connect } from 'react-redux'
import { getUserLoggedIn } from './actions'
import { Redirect } from 'react-router-dom'



export const index = ({ userLoggedIn, children }) => {
  if (!userLoggedIn) {
    return (<Redirect to='/login' />)
  }

  return (
    <div>
      {children}
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLoggedIn: getUserLoggedIn(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
