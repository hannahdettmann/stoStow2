import React, { Component } from 'react'
import Login from './Login'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Search from './Search'
import Add from './Add'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Route exact path="/login" render={() => (
        <Login /> 
      )} />
      <Route exact path="/" render={() => (
        <Dashboard />
      )} />
      <Route exact path="/add" render={() => (
        <Add />
      )} />
      <Route exact path="/search" render={() => (
        <Search /> 
      )} />
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App) 