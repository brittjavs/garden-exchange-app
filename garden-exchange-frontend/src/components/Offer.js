import React from 'react'

class Offer extends React.Component {
    
    render(){
        const { offer } = this.props;
        return(
            <div className="offer" key={offer.id}>
                <h5>
                {offer.date}
                <br />
                {offer.sender.username} is offering you {offer.qty} {offer.item}.
                <br />
                Details: {offer.details}
                <br />
                category:{offer.category}
                <br />
                </h5>
                <button>Accept</button>
                <button>Deny</button>
            </div>
        )
    }

}

export default Offer