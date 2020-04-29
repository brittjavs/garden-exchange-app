import React from 'react'
import { connect } from 'react-redux'
import ListingsContainer from './ListingsContainer'
import { Switch, Route, NavLink } from 'react-router-dom'
import OffersContainer from './OffersContainer'
import Logout from '../components/Logout'
import {fetchOffers} from '../actions/offers'
import { fetchListings }from '../actions/listings'
import MyListingsContainer from './MyListingsContainer'

class HomePageContainer extends React.Component {
    componentDidMount(){
        this.props.fetchListings()
        this.props.fetchOffers()
    }
    
    render(){
        return(
            
            <div className="HomePageContainer">
                <div className="user-welcome">
                    <h3>Welcome {this.props.currentUser.username}</h3>
                <p>{this.props.currentUser.city}, {this.props.currentUser.state}</p>
                </div>
                
                <div className="NavBar">
                    <Logout/>
                    <br />
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/offers">My Offers</NavLink>
                    <NavLink to="/myListings">My Listings</NavLink>
                        <div>
                        <Switch>
                        <Route exact path='/' component={ListingsContainer} />
                        <Route exact path='/offers' component={OffersContainer} />
                        <Route exact path='/myListings' component={MyListingsContainer} />
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

  export default connect(mapStateToProps,{ fetchListings, fetchOffers})(HomePageContainer)
