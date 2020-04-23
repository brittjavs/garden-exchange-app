import React from 'react'

class Listing extends React.Component {
    
    render(){
        const { listing } = this.props;
        return(
            <div className="listing" key={listing.id}>
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
        )
    }

}

export default Listing