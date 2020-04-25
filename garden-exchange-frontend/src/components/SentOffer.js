import React from 'react'

class SentOffer extends React.Component {
    
    render(){
        const { sentOffer } = this.props;
        return(
            <div className="sentOffer" key={sentOffer.id}>
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
                <button>Cancel Offer</button>
            </div>
        )
    }

}

export default SentOffer