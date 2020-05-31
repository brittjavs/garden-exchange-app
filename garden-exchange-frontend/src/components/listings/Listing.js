import React from 'react'
import OfferInput from '../offers/OfferInput'

class Listing extends React.Component {
    
   state = {
       showOfferForm: false,
       likeCount: 0
   }

    handleClick = () => {
        this.setState({
            showOfferForm: !this.state.showOfferForm
        })
    }

    // handleLikeClick = () => {
    //     this.setState({
    //         likeCount: this.state.likeCount + 1
    //     })
    // }
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
                {date}
                <br />
                {listing.user.username} has {listing.qty} {listing.item} available for trade in {listing.user.city}, {listing.user.state}.
                <br />
                Details: {listing.details}
                <br />
                Looking For: {listing.wants}
                <br />
                category: {listing.category}
                <br />
                <button onClick={this.handleClick}>Make an Offer</button>
                {this.state.showOfferForm && <OfferInput listing={listing} toggle={this.handleClick}/>}
                {/* <button onClick={this.handleLikeClick}>Likes {this.state.likeCount}</button> */}
            </div>
        )
    }
}

export default Listing