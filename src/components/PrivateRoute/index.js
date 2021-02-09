import React from 'react'
import { connect } from 'react-redux'
import { getUserLoggedIn } from './actions'
import { Redirect, Route } from 'react-router-dom'



export const index = ({ userLoggedIn, path, component }) => {
  const Component = component;

  if (!userLoggedIn) {
    return (<Redirect to='/login' />)
  }

  return (
    <Route path component={() => <Component />} />
  )
}

const mapStateToProps = (state) => ({
  userLoggedIn: getUserLoggedIn(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
