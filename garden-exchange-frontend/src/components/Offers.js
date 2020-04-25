import React from 'react'
import SentOffer from './SentOffer'
import ReceivedOffer from './ReceivedOffer'

const Offers = ({ offers, currentUser}) => {

    const sentOffers = offers.filter(offer=> offer.sender.username === currentUser.username);

    const receivedOffers = offers.filter(offer=> offer.recipient.username === currentUser.username);

    const sentOffersList = sentOffers.map(sentOffer => {
        return <SentOffer key={sentOffer.id} sentOffer={sentOffer}/>
      })
    
    const receivedOffersList = receivedOffers.map(receivedOffer => {
        return <ReceivedOffer key={receivedOffer.id} receivedOffer={receivedOffer}/>
    })

      
    return(
        <div className="myOffers">
            <div className="received-offers">
                {receivedOffersList}
            </div>
            <div className="sent-offers">
                {sentOffersList}
            </div>
            
        </div>
    )    
}

export default Offers

