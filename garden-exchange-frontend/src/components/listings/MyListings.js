import React from 'react'
import MyListing from './MyListing'

const MyListings = ({ listings, currentUser}) => {

        const myListings = listings.filter(listing => 
            listing.user.username === currentUser.username)

        const myListing = myListings.map(listing => {
            return <MyListing key={listing.id} listing={listing} />
        })
        
        return(
            <div className="my-listings">
                {myListing}
            </div>
        )    

}

export default MyListings