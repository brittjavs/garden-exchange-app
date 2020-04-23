import React from 'react'

const Offers = ({ offers }) => {
    return (
        <div className="Offers">
         {offers.map(offer => 
                <div key={offer.id}>
                <h5>
                category:{offer.category}
                <br />
                {offer.sender.username} is offering you {offer.qty} {offer.description}.
                </h5>
                <button>Accept</button>
                <button>Deny</button>
                </div> 
            )}
        </div>
    )
}

export default Offers