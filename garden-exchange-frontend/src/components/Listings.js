import React from 'react'
import Listing from './Listing'

const Listings = ({ listings }) => {
    const listingsList = listings.map(listing => {
            return <Listing key={listing.id} listing={listing}/>
    })

    return(
        <div className="listings">
            {listingsList}
         </div>
    )    
}

export default Listings