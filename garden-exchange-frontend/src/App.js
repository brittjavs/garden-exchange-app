import React from 'react';
import './App.css';
import AccessPage from './containers/AccessPage'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import HomePageContainer from './containers/HomePageContainer'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      this.props.currentUser ? <HomePageContainer /> : <AccessPage/>
    )
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps, { getCurrentUser })(App);
