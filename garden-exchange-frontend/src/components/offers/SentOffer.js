import React from 'react'
import { deleteOffer } from '../../actions/offers'
import {connect} from 'react-redux'

class SentOffer extends React.Component {
    
    render(){
        const { sentOffer } = this.props;
        return(
            <div className="sent-offer" key={sentOffer.id}>
                <h5>
                {sentOffer.date}
                <br />
                You offered {sentOffer.recipient.username} {sentOffer.qty} {sentOffer.item}.
                <br />
                Details: {sentOffer.details}
                <br />
                category:{sentOffer.category}
                <br />
                status:{sentOffer.status}
                </h5>
                {sentOffer.status === "pending" ? 
                <button onClick={() => this.props.deleteOffer(sentOffer.id)}>Cancel Offer</button> : ""}
            </div>
        )
    }

}

export default connect(null, { deleteOffer })(SentOffer)