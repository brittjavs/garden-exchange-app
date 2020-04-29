import React from 'react'
import OfferInput from '../offers/OfferInput'

class Listing extends React.Component {
    
   state = {
       showOfferForm: false
   }

    handleClick = () => {
        this.setState({
            showOfferForm: !this.state.showOfferForm
        })
    }
    //const date = 
    // listing.created_at.toDateString()
    //new Date(listing.created_at)
    render(){
        const { listing } = this.props;
        const date = new Date(listing.created_at).toLocaleDateString()
        //toDateString()
        //.toLocaleDateString()
        return(
            <div className="listing" key={listing.id}>
                <h5>
                {date}
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
                <button onClick={this.handleClick}>Make an Offer</button>
                {this.state.showOfferForm && <OfferInput listing={listing} toggle={this.handleClick}/>}
            </div>
        )
    }
}

export default Listing