import React from 'react'
import Listing from './Listing'

const Listings = ({ listings }) => {
    const listingsList = listings.map(listing => {
            return <Listing key={listing.id} listing={listing}/>
    })

    return(
        <div className="listings">
            {listingsList.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)}
         </div>
    )    
}

export default Listings