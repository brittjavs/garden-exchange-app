import React from 'react'
import OfferInput from './OfferInput'

class Listing extends React.Component {
   state = {
       showOfferForm: false
   }
    handleClick = () => {
        this.setState({
            showOfferForm: !this.state.showOfferForm
        })
    }

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
                <button onClick={this.handleClick}>Make an Offer</button>
                {this.state.showOfferForm && <OfferInput listing={listing}/>}
            </div>
        )
    }

}

export default Listing