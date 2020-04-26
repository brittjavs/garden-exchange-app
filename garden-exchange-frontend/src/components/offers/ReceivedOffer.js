import React from 'react'

class ReceivedOffer extends React.Component {
    
    render(){
        const { receivedOffer } = this.props;
        return(
            <div className="received-offer" key={receivedOffer.id}>
                
                <h5>
                {receivedOffer.date}
                <br />
                {receivedOffer.sender.username} is offering you {receivedOffer.qty} {receivedOffer.item}.
                <br />
                Details: {receivedOffer.details}
                <br />
                category:{receivedOffer.category}
                <br />
                </h5>
                <button>Accept</button> <button>Deny</button>
            </div>
        )
    }

}

export default ReceivedOffer