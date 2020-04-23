import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'

class HomePageContainer extends React.Component {
    render(){
        return(
            
            <div className="HomePageContainer">
                <h4>
                Welcome {this.props.currentUser.username}
                </h4>
                {this.props.currentUser.city}, {this.props.currentUser.state}
                <NavBar />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
  }

  export default connect(mapStateToProps)(HomePageContainer);