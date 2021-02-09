import React from 'react'
import { connect } from 'react-redux'
import { isUserLoggedIn } from './actions'
import { Redirect, Route } from 'react-router-dom'



export const index = ({ path, component }) => {
  const Component = component;

  if (!isUserLoggedIn()) {
    return (<Redirect to='/login' />)
  }

  return (
    <Route path component={() => <Component />} />
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
