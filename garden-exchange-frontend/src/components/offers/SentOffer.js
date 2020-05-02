import React from 'react'
import { deleteOffer } from '../../actions/offers'
import {connect} from 'react-redux'

class SentOffer extends React.Component {
    
    render(){
        const { sentOffer } = this.props;
        const date = new Date(sentOffer.created_at).toLocaleDateString()
        return(
            <div className="sent-offer" key={sentOffer.id}>
                <h5>
                {date}
                <br />
                You offered {sentOffer.recipient.username} {sentOffer.qty} {sentOffer.item} in exchange for {sentOffer.listing.qty} {sentOffer.listing.item}.
                <br />
                Offer Details: {sentOffer.details}
                <br />
                category: {sentOffer.category}
                <br />
                Offer status: {sentOffer.status}
                </h5>
                {sentOffer.status === "pending" && sentOffer.listing.completed === false ? 
                <button onClick={() => this.props.deleteOffer(sentOffer.id)}>Cancel Offer</button> : ""}
            </div>
        )
    }

}

export default connect(null, { deleteOffer })(SentOffer)