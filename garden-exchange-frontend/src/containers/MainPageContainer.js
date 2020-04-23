import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'

class MainPageContainer extends React.Component {
    render(){
        return(
            
            <div className="MainPageContainer">
                <h4>
                Welcome {this.props.currentUser.username}
                </h4>
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

  export default connect(mapStateToProps)(MainPageContainer);
