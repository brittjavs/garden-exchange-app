import React from 'react'
import { connect } from 'react-redux'
import ListingsContainer from './ListingsContainer'
import { Switch, Route, NavLink } from 'react-router-dom'
import OffersContainer from './OffersContainer'
import Logout from '../components/Logout'
import MyListings from '../components/listings/MyListings'

class HomePageContainer extends React.Component {

    render(){
        return(
            
            <div className="HomePageContainer">
                <h4>
                Welcome {this.props.currentUser.username}
                </h4>
                {this.props.currentUser.city}, {this.props.currentUser.state}
                <div className="NavBar">
                    <Logout/>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/offers">My Offers</NavLink>
                    <NavLink to="/myListings">My Listings</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                        <div>
                        <Switch>
                        <Route exact path='/' component={ListingsContainer} />
                        <Route exact path='/offers' component={OffersContainer} />
                        <Route exact path='/myListings' component={MyListings} />
                        </Switch>
                        </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
  }

  export default connect(mapStateToProps)(HomePageContainer)
