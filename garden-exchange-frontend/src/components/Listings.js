import React from 'react'

const Listings = ({ listings }) => {
    return (
        <div className="listing">
            {listings.map(listing => 
                <div key={listing.id}>
                <h5>
                {listing.date}
                <br />
                {listing.user.username} has {listing.qty} {listing.item} available for trade.
                <br />
                Details: {listing.details}
                <br />
                Looking For: {listing.wants}
                <br />
                category:{listing.category}
                <br />
                </h5>
                <button>Make an Offer</button>
                </div>
            )}
        </div>
    )
}

export default Listings