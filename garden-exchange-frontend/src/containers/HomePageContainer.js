import React from 'react'
import { connect } from 'react-redux'
import ListingsContainer from './ListingsContainer'
import { Switch, Route, NavLink } from 'react-router-dom'
import OffersContainer from './OffersContainer'
import Logout from '../components/Logout'
import {fetchOffers} from '../actions/offers'
import { fetchListings }from '../actions/listings'
import MyListingsContainer from './MyListingsContainer'
import ListingInput from '../components/listings/ListingInput'

class HomePageContainer extends React.Component {
    componentDidMount(){
        this.props.fetchListings()
        this.props.fetchOffers()
    }
    render(){
        return(
            
            <div className="home-page-container">
                <h1>The Garden Exchange</h1>
                <h4>Swap seeds or plants to add to your diverse garden</h4>
                <div className="user-welcome">
                    <h2>Welcome {this.props.currentUser.username}!</h2>
                    <Logout/>
                </div>
                
                <div className="content-container">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to = "/listing/new">Create A Listing</NavLink>
                    <NavLink to="/myOffers">My Offers</NavLink>
                    <NavLink to="/myListings">My Listings</NavLink>
                        <div>
                        <Switch>
                        <Route exact path='/listing/new' component={ListingInput} />
                        <Route exact path='/' component={ListingsContainer} />
                        <Route exact path='/myOffers' component={OffersContainer} />
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
