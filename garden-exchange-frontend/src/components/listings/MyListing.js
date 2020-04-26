import React from 'react'
import { deleteListing } from '../../actions/listings'
import {connect} from 'react-redux'

class MyListing extends React.Component {
    
  handleCLick = () => {
    deleteListing(this.props.listing.id)
  }

  render(){
        const { listing } = this.props;
        return(
            <div className="my-listing" key={listing.id}>
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
                <button onClick={this.handleCLick}>Delete</button>
            </div>
        )
    }
}

export default connect(null, { deleteListing })(MyListing)