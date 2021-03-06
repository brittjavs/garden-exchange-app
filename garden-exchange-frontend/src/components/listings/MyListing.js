import React from 'react'
import { deleteListing } from '../../actions/listings'
import {connect} from 'react-redux'

const MyListing = ({listing, deleteListing}) => {

        return(
            <div className="my-listing" key={listing.id}>
                <h5>
                {listing.date}
                <br />
                You have {listing.qty} {listing.item} listed for trade.
                <br />
                Details: {listing.details}
                <br />
                Looking For: {listing.wants}
                <br />
                category:{listing.category}
                <br />
                </h5>
                <button onClick={() => deleteListing(listing.id)}>Delete</button>
            </div>
        )
    
}

export default connect(null, { deleteListing })(MyListing)