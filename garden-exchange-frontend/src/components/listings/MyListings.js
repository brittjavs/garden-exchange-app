import React from 'react'
import MyListing from './MyListing'
import { connect } from 'react-redux'

const MyListings = ({ listings, currentUser }) => {
    const myListings = listings.filter(listing => listing.user.username === currentUser.username);

    const myListingsList = myListings.map(myListing => {
        return <MyListing key={myListing.id} myListing={myListing}/>
    })

    return(
        <div className="mylistings">
            {myListingsList}
         </div>
    )    
}

const mapStateToProps = state => {
    return {
        listings: state.listings,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(MyListings)