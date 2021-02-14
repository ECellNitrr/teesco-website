import React from 'react'
import { connect } from 'react-redux'
import { isUserLoggedIn } from './actions'
import { Redirect, Route } from 'react-router-dom'



export const PrivateRoute = ({ path, component }) => {
  const Component = component;

  if (!isUserLoggedIn()) {
    return (<Redirect to='/login' />)
  }

  return (
    <Route path={path} component={() => <Component />} />
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
